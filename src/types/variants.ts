export interface ColorVariant {
    hue?: number;
    h?: number;
    saturation?: number;
    s?: number;
    lightness?: number;
    l?: number;
    alpha?: number;
    a?: number;

    lighten?: number;
    darken?: number;
    saturate?: number;
    desaturate?: number;
    grayscale?: true;
    fade?: number;
    opaquer?: number;
    rotate?: number;

    [key: string]: number | boolean | undefined;
}

export interface NumberVariant {
    multiply?: string | number;
    divide?: string | number;
    add?: string | number;
    subtract?: string | number;

    [key: string]: NumberVariant | number | string | undefined;
}

export interface SidesVariant extends NumberVariant {
    top?: NumberVariant | string;
    right?: NumberVariant | string;
    bottom?: NumberVariant | string;
    left?: NumberVariant | string;

    [key: string]: NumberVariant | number | string | undefined;
}

export interface CornersVariant extends NumberVariant {
    topLeft?: NumberVariant | string;
    topRight?: NumberVariant | string;
    bottomRight?: NumberVariant | string;
    bottomLeft?: NumberVariant | string;

    [key: string]: NumberVariant | number | string | undefined;
}

export interface Variants {
    borderRadius?: {
        [key: string]: CornersVariant | NumberVariant | string;
    }
    color?: {
        [key: string]: Record<string, ColorVariant | string>;
    };
    margin?: {
        [key: string]: SidesVariant | NumberVariant | string;
    };
    padding?: {
        [key: string]: SidesVariant | NumberVariant | string;
    };
    typography?: {
        fontSize?: {
            [key: string]: NumberVariant | string;
        }
    };
    size?: {
        multiplier?: {
            [key: string]: NumberVariant | string;
        }
    }
}
