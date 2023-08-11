import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Character } from '../interface';
import Image from 'next/image';
import { GetStaticProps, NextPage } from "next";
import { Card } from "@/components/ui/card";
import { Layout } from "@/components/layouts/Layout";

interface Props {
	characters: Character[]
}

const Home: NextPage<Props> = ({characters}) => {

	return (
		
		<Layout title='Home'>
		<h1>Bienvenido a mi sitio web</h1>
			<div className={styles.grid}>
				{characters?.map((character) => (
					<Card key={character.tail} character={character} />
				))}
			</div>
		</Layout>

		
	);
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const characters = await fetch("https://www.amiiboapi.com/api/amiibo/");
    const resp = await characters.json();
    const data = resp.amiibo.slice(0, 20);

	return {
		props: {
			characters: data
		}
	}
}