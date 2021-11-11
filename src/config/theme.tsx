import "@fontsource/nunito/300.css"
import "@fontsource/nunito/400.css"
import "@fontsource/nunito/600.css"

import { extendTheme } from "@chakra-ui/react"

const components = {
    Button: {
        baseStyle: {
            width: '100%',
            backgroundColor: '#4460F7 !important',
            fontWeight: 'normal',
            color: '#fff',
            border: '1px solid #4460F7',
            outline: 'none',
            paddingY: '6',
            borderRadius: '0.4rem',
            _disabled: {
                backgroundColor:  '#9194A5',
                borderColor: '#9194A5'
            },
            _hover: {
                backgroundColor: '#2140E8 !important',
                borderColor: '#2140E8'
            },
        },
    }
}


const theme = extendTheme({
    components,
    fonts: {
        body: 'Nunito',
        heading: 'Nunito'
    },
    colors: {
        main: '#2140E8',
        secondary: '#4460F7',
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