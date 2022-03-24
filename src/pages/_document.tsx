import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const Document = () => {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" 
					rel="stylesheet"></link>
			</Head>
			<body>
				<Main/>
				<NextScript/>
			</body>
		</Html>
	);
};

export default Document; 