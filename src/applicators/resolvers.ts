import { Configuration, ConfigurationContext, Plugin, ResolvedTheme, Theme } from '../types';
import { setValueByPath } from '@grozav/utils';

/**
 * Recursively apply resolvers to each key value pair in the source object, setting the value in the target object
 *
 * @param config
 * @param theme
 * @param source
 * @param target
 * @param parentPath
 */
export function applyResolvers (
    config: Configuration,
    theme: Theme,
    source: Theme | Theme[keyof Theme],
    target: ResolvedTheme = {} as ResolvedTheme,
    parentPath: string[] = []
): ResolvedTheme {
    Object.entries(source).forEach(([key, value]) => {
        const path = [...parentPath, key];
        const joinedPath = path.join('.');

        const context: ConfigurationContext<Theme, typeof value> = {
            config,
            theme,
            value,
            path
        };

        let matches = 0;
        config.resolvers.forEach((resolver) => {
            // Check if resolver test path matches and type guard passes,
            // then set resolved value at target path
            if (resolver.test.test(joinedPath) && !resolver.skip?.test(joinedPath) && (resolver.guard ? resolver.guard(context) : true)) {
                const targetValue = resolver.apply(context);

                // If there's a set function, use it to set the value
                if (typeof resolver.set === 'function') {
                    resolver.set(context, targetValue);
                } else {
                    (Array.isArray(resolver.set) ? resolver.set : [resolver.set]).forEach((setPath: string) => {
                        // Compute target path by processing the path string
                        const targetPath = joinedPath.replace(resolver.test, setPath);
                        setValueByPath(target, targetPath, targetValue);
                    });
                }

                matches += 1;
            }
        });

        // Increase depth and apply resolvers to object fields recursively
        if (matches === 0 && typeof value === 'object') {
            return applyResolvers(config, theme, value, target, path);
        }
    });

    return target;
}
