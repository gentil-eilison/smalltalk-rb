import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";

import styles from "../styles/Home.module.scss";

import speechBubble from "../images/speech-bubble.png";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>SmallTalk | A Plataforma de Conversação Gratuita!</title>
				<meta name="description" content="Free foreign languages conversation web app." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<section className={styles.login}>
					<header>
						<h1>SMALL <span>TALK</span></h1>
						<Image 
							src={speechBubble} 
							alt="White and green colored speech bubbles"
							width={128}
							height={128}
						></Image>		
					</header>	

					<div className={styles.loginSection}>
						<button>Login</button>
						<button>Criar conta</button>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;
