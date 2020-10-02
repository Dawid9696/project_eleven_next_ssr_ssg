/** @format */

import React from "react";
import fs from "fs";
import { GetStaticProps, GetStaticPaths } from "next";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import styled from "styled-components";

const Movie = ({ movie }: any) => {
	return (
		<div>
			<Head>
				<title>{movie.title}</title>
				<meta property='og:title' content='My page title' key='title' />
			</Head>
			<ShopLayout>
				<ul>
					<li>Tytuł: {movie.title}</li>
					<li>Od {movie.age} lat</li>
					<li>Rodzaj: {movie.genre}</li>
					<li>Czas trwania: {movie.duration} min</li>
					<li>Opis: {movie.description}</li>
				</ul>
			</ShopLayout>
		</div>
	);
};

const ShopLayout = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	width: 60vw;
	height: 80vh;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: ${(props) => props.theme.colors.main};
	@media (max-width: 768px) {
		min-width: 90vw;
	}
`;

export default Movie;

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch("http://localhost:3000/Mroczkowski/api");
	const movies = await res.json();
	const paths = movies.map((movie) => ({
		params: { Movie: movie._id },
	}));
	return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params: { Movie } }: any) => {
	const res = await fetch(`http://localhost:5000/Multikino/movie/${Movie}`);
	const movie = await res.json();
	return {
		props: {
			movie,
		},
		revalidate: 1,
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
	background-color: ${(props) => props.theme.backgroundColor2};

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
