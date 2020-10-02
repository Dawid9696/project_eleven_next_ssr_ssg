/** @format */

import React from "react";
import fs from "fs";
import { GetStaticProps, GetStaticPaths } from "next";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import styled from "styled-components";

import RestCard from "../components/Home/RestCard";
import Seance from "../components/Home/Seance";

const SSGMovie = ({ htmlString, data }: any) => {
	return (
		<div>
			<Head>
				<title>{data.title}</title>
				<meta property='og:title' content='My page title' key='title' />
			</Head>
			<ShopLayout>
				<Card>
					<Photo
						photo={"https://media.multikino.pl/thumbnails/50/rc/OTI4QjU4/eyJ0aHV…ploads/images/films_and_events/naprzod-plakat_72ad32dc1f.jpg"}
					></Photo>
					<Info>
						<Title>{data.title}</Title>
						<Details>
							Od {data.age} lat | {data.genre} | {data.duration} min
						</Details>
						<Description>{data.description}</Description>
						<Seances>
							{data.seance.map((seance, index) => (
								<Seance key={index} seance={seance} />
							))}
						</Seances>
					</Info>
				</Card>
			</ShopLayout>
		</div>
	);
};

const ShopLayout = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export default SSGMovie;

export const getStaticPaths: GetStaticPaths = async () => {
	const files = fs.readdirSync("movies");
	const paths = files.map((filename) => ({
		params: {
			SSGMovie: filename.replace(".md", ""),
		},
	}));
	return {
		paths,
		fallback: false, // See the "fallback" section below
	};
};
export const getStaticProps: GetStaticProps = async ({ params: { SSGMovie } }: any) => {
	const metaData = fs.readFileSync(path.join("movies", SSGMovie + ".md")).toString();
	const parsedMetaData = matter(metaData);
	const htmlString = marked(parsedMetaData.content);
	return {
		props: { htmlString, data: parsedMetaData.data }, // will be passed to the page component as props
	};
};

const Card = styled.div`
	margin: 20px;
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	${(props) => (props.theme.backgroundColor == "black" ? `background-color: ${props.theme.backgroundColor2}` : `border-bottom:2px solid grey`)};

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

type PhotoProp = { photo: string };

const Photo = styled.div<PhotoProp>`
	margin: 20px;
	padding: 0px;
	box-sizing: border-box;
	width: 20vw;
	height: 40vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-image: ${(props) => `url(${props.photo})`};
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;

	@media (max-width: 768px) {
		flex-direction: column;
		width: 100vw;
	}
`;

const Info = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	width: 60vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@media (max-width: 768px) {
		width: 100vw;
	}
`;

const Title = styled.div`
	margin: 0px;
	padding: 20px;
	box-sizing: border-box;
	font-size: 20px;
	width: 100%;
	height: 25%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.colors.main};
	text-align: center;
	:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.fourth};
	}
`;

const Details = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	width: 100%;
	height: 15%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: ${(props) => props.theme.colors.secondary};
`;

const Description = styled.div`
	margin: 0px;
	padding: 20px;
	box-sizing: border-box;
	width: 100%;
	height: 30%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: ${(props) => props.theme.colors.third};
	@media (max-width: 768px) {
		display: none;
	}
`;

const Seances = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;
