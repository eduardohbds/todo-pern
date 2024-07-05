import { extendTheme } from "@chakra-ui/react";

const config = { 
    initialColorMode: localStorage.getItem('chakra-ui-color-mode') || 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({theme})

export default theme