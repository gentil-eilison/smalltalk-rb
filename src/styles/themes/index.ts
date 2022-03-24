import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		primary: "#000",
	},
	fonts: {
		heading: "Poppins, sans-serif",
		body: "Poppins, sans-serif"
	},
	components: {
		Heading: {
			baseStyle: {
				color: "#646262"
			}
		}
	}
});

export default theme; 