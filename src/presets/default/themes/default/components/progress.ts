import type { RawTheme } from '../../../../../types';

export const progress: RawTheme['components']['progress'] = {
    default: {
        background: 'var(--color-light)',
        boxShadow: {
            offsetX: 'var(--box-shadow-offset-x)',
            offsetY: 'var(--box-shadow-offset-y)',
            blurRadius: 'var(--box-shadow-blur-radius)',
            spreadRadius: 'var(--box-shadow-spread-radius)',
            color: 'var(--box-shadow-color)'
        },
        border: {
            top: {
                width: 'var(--border-top-width)',
                style: 'var(--border-top-style)',
                color: 'var(--border-top-color)'
            },
            right: {
                width: 'var(--border-right-width)',
                style: 'var(--border-right-style)',
                color: 'var(--border-right-color)'
            },
            bottom: {
                width: 'var(--border-bottom-width)',
                style: 'var(--border-bottom-style)',
                color: 'var(--border-bottom-color)'
            },
            left: {
                width: 'var(--border-left-width)',
                style: 'var(--border-left-style)',
                color: 'var(--border-left-color)'
            }
        },
        borderRadius: {
            topLeft: 'var(--border-top-left-radius)',
            topRight: 'var(--border-top-right-radius)',
            bottomRight: 'var(--border-bottom-right-radius)',
            bottomLeft: 'var(--border-bottom-left-radius)'
        },
        height: '0.75rem',
        transition: {
            property: 'background-color, color, border-color',
            duration: 'var(--transition-duration)',
            timingFunction: 'var(--transition-timing-function)'
        }
    },
    light: {
        background: 'var(--color-light)',
        border: {
            color: 'var(--color-light-shade-50)'
        }
    },
    dark: {
        background: 'var(--color-dark)',
        border: {
            color: 'var(--color-dark-tint-50)'
        }
    },
    sm: {
        borderRadius: {
            topLeft: 'var(--border-top-left-radius-sm)',
            topRight: 'var(--border-top-right-radius-sm)',
            bottomRight: 'var(--border-bottom-right-radius-sm)',
            bottomLeft: 'var(--border-bottom-left-radius-sm)'
        },
        height: 'calc(0.75rem * var(--size-multiplier-sm))'
    },
    md: {
        borderRadius: {
            topLeft: 'var(--border-top-left-radius-md)',
            topRight: 'var(--border-top-right-radius-md)',
            bottomRight: 'var(--border-bottom-right-radius-md)',
            bottomLeft: 'var(--border-bottom-left-radius-md)'
        },
        height: 'calc(0.75rem * var(--size-multiplier-md))'
    },
    lg: {
        borderRadius: {
            topLeft: 'var(--border-top-left-radius-lg)',
            topRight: 'var(--border-top-right-radius-lg)',
            bottomRight: 'var(--border-bottom-right-radius-lg)',
            bottomLeft: 'var(--border-bottom-left-radius-lg)'
        },
        height: 'calc(0.75rem * var(--size-multiplier-lg))'
    }
};

export const progressBar: RawTheme['components']['progressBar'] = {
    default: {
        background: 'var(--color-primary)',
        color: 'var(--contrast-text-color-dark)'
    },
    primary: {
        background: 'var(--color-primary)',
        color: 'var(--contrast-text-color-dark)'
    },
    secondary: {
        background: 'var(--color-secondary)',
        color: 'var(--contrast-text-color-dark)'
    },
    info: {
        background: 'var(--color-info)',
        color: 'var(--contrast-text-color-light)'
    },
    success: {
        background: 'var(--color-success)',
        color: 'var(--contrast-text-color-light)'
    },
    warning: {
        background: 'var(--color-warning)',
        color: 'var(--contrast-text-color-light)'
    },
    danger: {
        background: 'var(--color-danger)',
        color: 'var(--contrast-text-color-light)'
    },
    light: {
        background: 'var(--color-white)',
        color: 'var(--contrast-text-color-light)'
    },
    dark: {
        background: 'var(--color-dark)',
        color: 'var(--contrast-text-color-dark)'
    }
};
