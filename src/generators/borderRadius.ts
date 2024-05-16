import {
    codegenCssVariables,
    defineGenerator,
    defineGeneratorValueFn,
    createGenerateFn,
    toKebabCase,
    getCssVariablePreamble,
    shouldGenerateAggregateValue,
    getCssVariableVariantName,
    getResolvedCssVariableVariantName,
    getCssVariablePreamblePath
} from '../utils';
import {
    GeneratorType,
    ResolvedTheme,
    ResolvedThemeBorderRadius,
    ResolvedThemeValueType
} from '../types';
import { cornersPropertyKeys } from '../constants';

export const generateBorderRadius = defineGeneratorValueFn<ResolvedThemeBorderRadius>(
    (borderRadius, meta) => {
        const variablePreamblePath = getCssVariablePreamblePath(meta);
        const variablePreamble = getCssVariablePreamble(variablePreamblePath);
        const variantName = getCssVariableVariantName(meta);
        const resolvedVariantName = getResolvedCssVariableVariantName(variantName);

        const tokens: string[] = [];
        const cornerCssVariables: string[] = [];

        cornersPropertyKeys.forEach((corner) => {
            const resolvedCornerName = toKebabCase(corner);
            const cssVariableName = `${variablePreamble}border-${resolvedCornerName}-radius${resolvedVariantName}`;

            if (typeof borderRadius[corner] !== 'undefined') {
                tokens.push(codegenCssVariables.set(cssVariableName, borderRadius[corner]));
                cornerCssVariables.push(codegenCssVariables.get(cssVariableName));
            }
        });

        if (shouldGenerateAggregateValue(meta)) {
            tokens.push(
                codegenCssVariables.set(
                    `${variablePreamble}border-radius${resolvedVariantName}`,
                    cornerCssVariables.join(' ')
                )
            );
        }

        return tokens;
    }
);

export const borderRadiusGenerator = defineGenerator<
    ResolvedThemeValueType<ResolvedTheme['borderRadius']>
>({
    key: [/^borderRadius\.[^.]+$/, /.*\.borderRadius$/],
    type: GeneratorType.CssVariables,
    generate: createGenerateFn(generateBorderRadius)
});
