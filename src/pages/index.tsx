import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Heading, Flex} from "@chakra-ui/react";

import styles from "../styles/Home.module.scss";

import speechBubble from "../images/speech-bubble.png";
import whyImage from "../images/whyImage.png";
import howTo from "../images/howTo.png";

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

				<section className={styles.whyST}>
					<header>
						<Heading textAlign="center">Por que o Small Talk?</Heading>
					</header>

					<div>
						<span>
							Uma alternativa fácil, grátis e simples para exercitar 
							a conversação em línguas estrangeiras
						</span>
						<Image src={whyImage} alt="The why for using SmallTalk through an image"/>
					</div>
				</section>

				<section className={styles.howWorks}>
					<header>
						<Heading textAlign="center">Como funciona?</Heading>
					</header>

					<div>
						É simples! 
						<ol>
							<li>Encontre um amigo para conversara</li>
							<li>Adicione-o à sua lista de amigos e marquem uma conversa</li>
							<li>Small Talk!</li>
						</ol>
					</div>

					<Flex justifyContent="center" marginTop={20}>
						<Image 
							src={howTo} 
							alt="Sept-by-step infographics on how to use Small Talk"></Image>
					</Flex>
				</section>
			</main>
		</div>
	);
};

export default Home;
