import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	semanticTokens: {
		colors: {
			text: "#000000",
			background: "#FFFFFF",
		},
	},
	colors: {
		black: "#000000",
		white: "#FFFFFF",
	},
	fonts: {
		roboto: "'Roboto', sans-serif",
	},
});
