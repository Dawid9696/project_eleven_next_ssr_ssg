/** @format */

import React from "react";
import fs from "fs";
import styled from "styled-components";
import Link from "next/link";
import { GetStaticProps } from "next";
import Head from "next/head";

const StaticShop = ({ slugs }: any) => {
	console.log(slugs);
	return (
		<div>
			<Head>
				<title>SSG</title>
				<meta property='og:title' content='My page title' key='title' />
			</Head>
			<StaticLayout>
				{slugs.map((slug) => {
					return (
						<Link key={slug} href={`/${slug}`}>
							<LinkCard>{slug}</LinkCard>
						</Link>
					);
				})}
			</StaticLayout>
		</div>
	);
};

export default StaticShop;

const LinkCard = styled.div`
	position: relative;
	margin: 25px;
	padding: 20px;
	box-sizing: border-box;
	font-size: 25px;
	letter-spacing: 1px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 60vw;
	height: 5vw;
	${(props) =>
		props.theme.backgroundColor === "black" ? `background-color: ${props.theme.backgroundColor2}` : `border: 2px solid ${props.theme.colors.fourth}`};
	${(props) => props.theme.backgroundColor !== "black" && `border-radius: 200px`};
	color: ${(props) => props.theme.colors.main};
	transition: 0.5s;
	text-transform: uppercase;
	@media (max-width: 768px) {
		margin: 10px;
		min-width: 90vw;
	}
	:hover {
		cursor: pointer;
		border: ${(props) => `3px solid ${props.theme.colors.fourth}`};
	}
`;

const StaticLayout = styled.div`
	margin: 0px;
	padding: 20px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const getStaticProps: GetStaticProps = async () => {
	const files = fs.readdirSync("movies");
	const slugs = files.map((filename) => filename.replace(".md", ""));
	return {
		props: {
			slugs,
		},
	};
};
