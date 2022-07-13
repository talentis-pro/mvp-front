import { ChakraProvider } from "@chakra-ui/react";
import { LayoutWrapper } from "layouts/wrapper";
import type { AppProps } from "next/app";
import Head from "next/head";
import { theme } from "theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<ChakraProvider theme={theme}>
				<LayoutWrapper>
					<Component {...pageProps} />
				</LayoutWrapper>
			</ChakraProvider>
		</>
	);
};

export default MyApp;
