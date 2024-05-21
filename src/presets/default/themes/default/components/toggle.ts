import type { RawTheme } from '../../../../../types';

export const toggle: RawTheme['components']['toggle'] = {
    default: {
        background: 'var(--color-light-shade-50)',
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
        color: 'var(--contrast-text-color-light)',
        fontSize: 'var(--font-size)',
        transition: {
            property: 'background-color, color, border-color, transform',
            duration: 'var(--transition-duration)',
            timingFunction: 'var(--transition-timing-function)'
        },
        width: '40px',
        height: '20px',
        margin: {
            top: 0,
            right: 'var(--margin-right)',
            bottom: 0,
            left: 0
        },
        indicator: {
            background: 'var(--color-white)',
            width: '1rem',
            height: '1rem'
        },
        checked: {
            background: 'var(--color-primary)',
            border: {
                color: 'var(--color-primary-shade-50)'
            },
            indicator: {
                background: 'var(--color-white)'
            },
            disabled: {
                background: 'var(--color-primary-shade-100)'
            },
            readonly: {
                background: 'var(--color-light-shade-100)'
            }
        },
        disabled: {
            color: 'var(--text-color-weaker)',
            background: 'var(--color-light)',
            border: {
                color: 'var(--color-light-shade-50)'
            },
            indicator: {
                background: 'var(--color-light-shade-100)'
            }
        },
        readonly: {
            color: 'var(--text-color-weaker)',
            background: 'var(--color-light)',
            border: {
                color: 'var(--color-light-shade-50)'
            },
            indicator: {
                background: 'var(--color-light-shade-100)'
            }
        }
    },
    light: {
        background: 'var(--color-light-shade-50)',
        border: {
            color: 'var(--color-light-shade-100)'
        },
        color: 'var(--contrast-text-color-light)',
        disabled: {
            background: 'var(--color-light)',
            border: {
                color: 'var(--color-light-shade-50)'
            },
            indicator: {
                background: 'var(--color-gray-100)'
            }
        },
        readonly: {
            background: 'var(--color-light)',
            border: {
                color: 'var(--color-light-shade-50)'
            },
            indicator: {
                background: 'var(--color-gray-100)'
            }
        },
        checked: {
            disabled: {
                background: 'var(--color-primary-200)',
                border: {
                    color: 'var(--color-primary-300)'
                }
            },
            readonly: {
                background: 'var(--color-primary-200)',
                border: {
                    color: 'var(--color-primary-300)'
                }
            }
        }
    },
    dark: {
        background: 'var(--color-dark)',
        border: {
            color: 'var(--color-dark-tint-50)'
        },
        color: 'var(--contrast-text-color-dark)',
        disabled: {
            background: 'var(--color-dark-tint-50)',
            border: {
                color: 'var(--color-dark-tint-100)'
            },
            indicator: {
                background: 'var(--color-gray-300)'
            }
        },
        readonly: {
            background: 'var(--color-dark-tint-50)',
            border: {
                color: 'var(--color-dark-tint-100)'
            },
            indicator: {
                background: 'var(--color-gray-300)'
            }
        },
        checked: {
            disabled: {
                background: 'var(--color-primary-800)'
            },
            readonly: {
                background: 'var(--color-primary-800)'
            }
        }
    },
    sm: {
        borderRadius: {
            topLeft: 'var(--border-top-left-radius-sm)',
            topRight: 'var(--border-top-right-radius-sm)',
            bottomRight: 'var(--border-bottom-right-radius-sm)',
            bottomLeft: 'var(--border-bottom-left-radius-sm)'
        },
        fontSize: 'var(--font-size-sm)',
        width: 'calc(40px * var(--size-multiplier-sm))',
        height: 'calc(20px * var(--size-multiplier-sm))',
        indicator: {
            width: 'calc(1rem * var(--size-multiplier-sm))',
            height: 'calc(1rem * var(--size-multiplier-sm))'
        }
    },
    md: {
        borderRadius: {
            topLeft: 'var(--border-top-left-radius-md)',
            topRight: 'var(--border-top-right-radius-md)',
            bottomRight: 'var(--border-bottom-right-radius-md)',
            bottomLeft: 'var(--border-bottom-left-radius-md)'
        },
        fontSize: 'var(--font-size-md)',
        width: 'calc(40px * var(--size-multiplier-md))',
        height: 'calc(20px * var(--size-multiplier-md))',
        indicator: {
            width: 'calc(1rem * var(--size-multiplier-md))',
            height: 'calc(1rem * var(--size-multiplier-md))'
        }
    },
    lg: {
        borderRadius: {
            topLeft: 'var(--border-top-left-radius-lg)',
            topRight: 'var(--border-top-right-radius-lg)',
            bottomRight: 'var(--border-bottom-right-radius-lg)',
            bottomLeft: 'var(--border-bottom-left-radius-lg)'
        },
        fontSize: 'var(--font-size-lg)',
        width: 'calc(40px * var(--size-multiplier-lg))',
        height: 'calc(20px * var(--size-multiplier-lg))',
        indicator: {
            width: 'calc(1rem * var(--size-multiplier-lg))',
            height: 'calc(1rem * var(--size-multiplier-lg))'
        }
    }
};
