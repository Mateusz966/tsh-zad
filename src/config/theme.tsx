import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
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
