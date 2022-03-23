import "../styles/globals.ts";
import React from "react";
import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyle from "../styles/globals";
import theme from "../styles/themes";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<GlobalStyle/>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
