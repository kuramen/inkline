import { colorResolvers } from '../color';
import { Configuration, Theme } from '../../types';

const [colorResolver] = colorResolvers();

describe('resolvers', () => {
    describe('color', () => {
        describe('test', () => {
            it('should match direct path', () => {
                const path = 'color.primary';
                expect(colorResolver.test.test(path)).toEqual(true);
            });

            it('should match nested path', () => {
                const path = 'nested.color.primary';
                expect(colorResolver.test.test(path)).toEqual(true);
            });
        });

        describe('set', () => {
            it('should replace direct path', () => {
                const path = 'color.primary';
                expect(path.replace(colorResolver.test, colorResolver.set as string)).toEqual('color.primary');
            });

            it('should replace nested path', () => {
                const path = 'nested.color.primary';
                expect(path.replace(colorResolver.test, colorResolver.set as string)).toEqual('nested.color.primary');
            });
        });

        describe('resolve', () => {
            it('should parse hex string and return hsla value', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = '#ffffff';
                const path = ['color', 'white'];

                expect(colorResolver.resolve({ config, theme, value, path })).toEqual({
                    h: 0,
                    s: 0,
                    l: 100,
                    a: 1
                });
            });

            it('should parse hsla string and return hsla value', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = 'hsla(100, 100%, 100%, 0.5)';
                const path = ['color', 'other'];

                expect(colorResolver.resolve({ config, theme, value, path })).toEqual({
                    h: 100,
                    s: 100,
                    l: 100,
                    a: 0.5
                });
            });

            it('should parse rgba string and return hsla value', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = 'rgba(255, 255, 255, 50%)';
                const path = ['color', 'other'];

                expect(colorResolver.resolve({ config, theme, value, path })).toEqual({
                    h: 0,
                    s: 0,
                    l: 100,
                    a: 0.5
                });
            });

            it('should parse rgba color object and return hsla value', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = { r: 0, g: 0, b: 0, a: 1 };
                const path = ['color', 'other'];

                expect(colorResolver.resolve({ config, theme, value, path })).toEqual({
                    h: 0,
                    s: 0,
                    l: 0,
                    a: 1
                });
            });

            it('should parse named color string and return hsla value', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = 'blue';
                const path = ['color', 'other'];

                expect(colorResolver.resolve({ config, theme, value, path })).toEqual({
                    h: 240,
                    s: 100,
                    l: 50,
                    a: 1
                });
            });

            it('should parse hsla color object and return hsla value', () => {
                const config = {} as Configuration;
                const theme = {} as Theme;
                const value = { h: '90deg', s: '25.50%', l: '100%', a: '25%' };
                const path = ['color', 'other'];

                expect(colorResolver.resolve({ config, theme, value, path })).toEqual({
                    h: 90,
                    s: 25.5,
                    l: 100,
                    a: 0.25
                });
            });
        });
    });
});
