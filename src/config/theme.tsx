import "@fontsource/nunito/300.css"
import "@fontsource/nunito/400.css"
import "@fontsource/nunito/600.css"

import { extendTheme } from "@chakra-ui/react"

const components = {
    Button: {
        baseStyle: {
            width: '100%',
            background: 'main',
            backgroundColor: 'main',
            color: '#fff',
            border: '1px solid #4460F7',
            outline: 'none',
            paddingY: '6',
            fontWeight: 600,
            borderRadius: 'md',
            transition: '250ms all ease',
            _disabled: {
                borderColor: '#9194A5',
                backgroundColor:  '#9194A5',
                _hover: {
                    background: '#9194A5',
                    backgroundColor:  '#9194A5! important',
                    borderColor: '#9194A5'
                }
            },
            _hover: {
                background: '#2140E8',
                backgroundColor: '#2140E8',
                borderColor: '#2140E8'
            },
        },
        variants: {
            reverse: {
                backgroundColor: '#fff',
                color: 'main',
                borderColor: 'main',
                _hover: {
                    background: '#fff !important',
                    borderColor: '#2140E8',
                    color: '#2140E8',
                },
            },
            listElement: {
                background: '#fff',
                backgroundColor: '#fff',
                borderColor: '#fff',
                color: "shadows.900",
                justifyContent: 'flex-start',
                py: "7",
                px: "5",
                width: '100%',
                boxShadow: '0px 0px 10px 0px rgba(212, 213, 216, 1)',
                _hover: {
                    background: '#fff',
                    backgroundColor: '#fff',
                    borderColor: '#fff',
                },
},
            star: {
                _active: {
                    color: 'label',
                    fill: 'label'
                },
                pointerEvents: 'none',
                display: 'inline-flex',
                minW: '22px',
                w: "22px",
                background: 'transparent',
                backgroundColor: 'transparent',
                fontSize: 'md',
                color: 'shadows.400',
                paddingX: '1',
                border: 'none',
                outline: 'none',
                fontWeight: 600,
                _focus: {
                    outline: 'none',
                    boxShadow: 'none',
                },
                _hover: {
                    background: 'transparent',
                    backgroundColor: 'transparent',
                    color: 'secondary'
                },
            },
            pagination: {
                _active: {
                  color: 'main',
                },
                display: 'inline-flex',
                width: 'auto',
                background: 'transparent',
                backgroundColor: 'transparent',
                fontSize: 'md',
                color: 'shadows.900',
                paddingX: '5',
                border: 'none',
                outline: 'none',
                fontWeight: 600,
                _focus: {
                  outline: 'none',
                    boxShadow: 'none',
                },
                _hover: {
                    background: 'transparent',
                    backgroundColor: 'transparent',
                    color: 'secondary'
                },
            }
        }
    },
    Checkbox: {
        baseStyle: {
            control: {
                borderWidth: "1px",
                borderRadius: "sm",
                _checked: {
                    bg: "main"
                }
            }
        }
    }
}


const theme = extendTheme({
    components,
    styles: {
        global: {
            body: {
                backgroundColor: '#f2f2f2'
            },
        }
    },
    fonts: {
        body: 'Nunito',
        heading: 'Nunito'
    },
    colors: {
        main: '#4460F7',
        secondary: '#2140E8',
        label: '#F9A52B',
        shadows: {
            100: '#F0F1F5',
            200: '#E0E2EA',
            400: '#B9BDCF',
            600: '#9194A5',
            900: '#1A1B1D'
        }
    },
})

export default theme;