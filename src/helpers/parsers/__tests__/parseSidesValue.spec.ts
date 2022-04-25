import { parseValue } from '../parseValue';
import { Configuration, UserConfiguration } from '../../../types';
import {parseSidesValue} from "../parseSidesValue";

describe('helpers', () => {
    describe('parsers', () => {
        describe('parseSidesValue', () => {
            it('should return same value for all sides if one value string', () => {
                const config = {} as Configuration;
                const value = '1rem';

                expect(parseSidesValue(config, value)).toEqual({
                    top: value,
                    right: value,
                    bottom: value,
                    left: value
                });
            });

            it('should return value for top-bottom, left-right sides if two value string', () => {
                const config = {} as Configuration;
                const value = '1rem 2rem';
                const parts = value.split(' ');

                expect(parseSidesValue(config, value)).toEqual({
                    top: parts[0],
                    right: parts[1],
                    bottom: parts[0],
                    left: parts[1]
                });
            });

            it('should return value for top, left-right, bottom sides if three value string', () => {
                const config = {} as Configuration;
                const value = '1rem 2rem 3rem';
                const parts = value.split(' ');

                expect(parseSidesValue(config, value)).toEqual({
                    top: parts[0],
                    right: parts[1],
                    bottom: parts[2],
                    left: parts[1]
                });
            });

            it('should return value for top, right, bottom, left sides if four value string', () => {
                const config = {} as Configuration;
                const value = '1rem 2rem 3rem 4rem';
                const parts = value.split(' ');

                expect(parseSidesValue(config, value)).toEqual({
                    top: parts[0],
                    right: parts[1],
                    bottom: parts[2],
                    left: parts[3]
                });
            });

            it('should return same value for all sides if one value array', () => {
                const config = {} as Configuration;
                const value = ['1rem'];

                expect(parseSidesValue(config, value)).toEqual({
                    top: value[0],
                    right: value[0],
                    bottom: value[0],
                    left: value[0]
                });
            });

            it('should return value for top-bottom, left-right sides if two value array', () => {
                const config = {} as Configuration;
                const value = ['1rem', '2rem'];

                expect(parseSidesValue(config, value)).toEqual({
                    top: value[0],
                    right: value[1],
                    bottom: value[0],
                    left: value[1]
                });
            });

            it('should return value for top, left-right, bottom sides if three value array', () => {
                const config = {} as Configuration;
                const value = ['1rem', '2rem', '3rem'];

                expect(parseSidesValue(config, value)).toEqual({
                    top: value[0],
                    right: value[1],
                    bottom: value[2],
                    left: value[1]
                });
            });

            it('should return value for top, right, bottom, left sides if four value array', () => {
                const config = {} as Configuration;
                const value = ['1rem', '2rem', '3rem', '4rem'];

                expect(parseSidesValue(config, value)).toEqual({
                    top: value[0],
                    right: value[1],
                    bottom: value[2],
                    left: value[3]
                });
            });

            it('should return same value for all sides if number', () => {
                const config = {} as Configuration;
                const value = 10;

                expect(parseSidesValue(config, value)).toEqual({
                    top: value,
                    right: value,
                    bottom: value,
                    left: value
                });
            });

            it('should call parseFn and parse return value if function', () => {
                const config = {
                    theme: {
                        margin: '1rem 2rem 3rem 4rem'
                    }
                } as Configuration;

                const value: UserConfiguration.PropertyFn<string[]> = ({ theme }) => {
                    const parts = (theme.margin as string).split(' ');

                    return [
                        parts[0],
                        parts[1],
                        parts[2],
                        parts[3]
                    ];
                };

                expect(parseSidesValue(config, value)).toEqual({
                    top: '1rem',
                    right: '2rem',
                    bottom: '3rem',
                    left: '4rem'
                });
            });
        });
    });
});
