"use strict";
module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primaryColor: {
                    light: '#81d4fa',
                    DEFAULT: '#0288d1',
                    dark: '#01579b',
                    hover: '#0277bd',
                    hoverDark: '#004c8c'
                },
                secondaryColor: {
                    light: '#a5d6a7',
                    DEFAULT: '#4caf50',
                    dark: '#388e3c',
                    hover: '#66bb6a',
                    hoverDark: '#2e7d32'
                },
                accentColor: {
                    light: '#ffecb3',
                    DEFAULT: '#ffc107',
                    dark: '#ffa000',
                    hover: '#ffb300',
                    hoverDark: '#ff6f00'
                },
                backgroundColor: {
                    light: '#fafafa',
                    DEFAULT: '#f5f5f5',
                    dark: '#eeeeee',
                    hover: '#e0e0e0',
                    hoverDark: '#bdbdbd'
                },
                textColor: {
                    DEFAULT: '#212121',
                    dark: '#757575',
                    hover: '#424242',
                    hoverDark: '#616161'
                },
                headingColor: {
                    DEFAULT: '#212121',
                    dark: '#424242',
                    hover: '#424242',
                    hoverDark: '#616161'
                },
                buttonBGColor: {
                    light: '#bbdefb',
                    DEFAULT: '#64b5f6',
                    dark: '#1e88e5',
                    hover: '#42a5f5',
                    hoverDark: '#1976d2'
                },
                buttonTextColor: {
                    light: '#ffffff',
                    DEFAULT: '#212121',
                    dark: '#757575',
                    hover: '#424242',
                    hoverDark: '#616161'
                },
                borderColor: {
                    light: '#e0e0e0',
                    DEFAULT: '#bdbdbd',
                    dark: '#9e9e9e',
                    hover: '#bdbdbd',
                    hoverDark: '#757575'
                },
                linkColor: {
                    light: '#64b5f6',
                    DEFAULT: '#1e88e5',
                    dark: '#1565c0',
                    hover: '#1976d2',
                    hoverDark: '#0d47a1'
                },
                linkHoverColor: {
                    light: '#1976d2',
                    DEFAULT: '#0d47a1',
                    dark: '#002171',
                    hover: '#0d47a1',
                    hoverDark: '#001f3f'
                },
                errorColor: {
                    light: '#ef9a9a',
                    DEFAULT: '#f44336',
                    dark: '#d32f2f',
                    hover: '#e57373',
                    hoverDark: '#c62828'
                },
                successColor: {
                    light: '#a5d6a7',
                    DEFAULT: '#4caf50',
                    dark: '#388e3c',
                    hover: '#66bb6a',
                    hoverDark: '#2e7d32'
                },
                warningColor: {
                    light: '#ffcc80',
                    DEFAULT: '#ff9800',
                    dark: '#f57c00',
                    hover: '#ffa726',
                    hoverDark: '#ef6c00'
                },
                infoColor: {
                    light: '#81d4fa',
                    DEFAULT: '#03a9f4',
                    dark: '#0288d1',
                    hover: '#29b6f6',
                    hoverDark: '#0277bd'
                },
                disabledColor: {
                    light: '#e0e0e0',
                    DEFAULT: '#bdbdbd',
                    dark: '#9e9e9e',
                    hover: '#bdbdbd',
                    hoverDark: '#757575'
                }
            },
            fontSize: {
                display: [
                    '6rem',
                    {
                        lineHeight: '6.875rem',
                        letterSpacing: '-2.5px',
                        fontWeight: '700'
                    }
                ],
                display2: [
                    '5rem',
                    {
                        lineHeight: '5.75rem',
                        letterSpacing: '-2.875px',
                        fontWeight: '700'
                    }
                ],
                h1: [
                    '3rem',
                    {
                        lineHeight: '3.6rem',
                        letterSpacing: '-1.5px',
                        fontWeight: '700'
                    }
                ],
                h2: [
                    '2.5rem',
                    {
                        lineHeight: '3.25rem',
                        letterSpacing: '-1.9px',
                        fontWeight: '700'
                    }
                ],
                h3: [
                    '2rem',
                    {
                        lineHeight: '2.8rem',
                        letterSpacing: '-1.5px',
                        fontWeight: '600'
                    }
                ],
                h4: [
                    '1.75rem',
                    {
                        lineHeight: '2.625rem',
                        letterSpacing: '-1.3px',
                        fontWeight: '600'
                    }
                ],
                h5: [
                    '1.5rem',
                    {
                        lineHeight: '2.25rem',
                        letterSpacing: '-1.1px',
                        fontWeight: '500'
                    }
                ],
                h6: [
                    '1.25rem',
                    {
                        lineHeight: '1.875rem',
                        letterSpacing: '-0.9px',
                        fontWeight: '500'
                    }
                ],
                body1: [
                    '1rem',
                    {
                        lineHeight: '1.5rem',
                        letterSpacing: '-0.7px',
                        fontWeight: '400'
                    }
                ],
                body2: [
                    '0.875rem',
                    {
                        lineHeight: '1.25rem',
                        letterSpacing: '-0.75px',
                        fontWeight: '400'
                    }
                ],
                caption: [
                    '0.75rem',
                    {
                        lineHeight: '1.66rem',
                        letterSpacing: '-0.5px',
                        fontWeight: '400'
                    }
                ],
                p: [
                    '1rem',
                    {
                        lineHeight: '1.5rem',
                        letterSpacing: '-0.7px',
                        fontWeight: '400'
                    }
                ]
            },
            boxShadow: {
                small: '0px 1px 2px rgba(45, 54, 67, 0.05)',
                default: '0px 2px 4px rgba(45, 54, 67, 0.08), 0px 1px 2px rgba(45, 54, 67, 0.04)',
                medium: '0px 4px 8px -2px rgba(45, 54, 67, 0.08), 0px 2px 4px -2px rgba(45, 54, 67, 0.06)',
                large: '0px 20px 24px -4px rgba(45, 54, 67, 0.04), 0px 8px 11px -4px rgba(45, 54, 67, 0.04)',
                xLarge: '0px 24px 50px -12px rgba(45, 54, 67, 0.12)',
                '2xLarge': '0px 32px 64px -12px rgba(45, 54, 67, 0.14)',
            },
            keyframes: {
                zoomIn: {
                    '0%': { transform: 'scale(0.5)' },
                    '50%': { transform: 'scale(1.1)' },
                    '100%': { transform: 'scale(1)' },
                },
            },
            animation: {
                zoomIn: 'zoomIn 0.3s ease-in-out',
            },
        }
    }
};
