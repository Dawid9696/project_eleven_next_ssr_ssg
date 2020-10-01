/** @format */

import React from "react";
import fs from "fs";
import styled from "styled-components";
import { GetStaticProps } from "next";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";

const StaticShop = ({ slugs }: any) => {
	console.log(slugs);
	return (
		<div>
			<Head>
				<title>SSG</title>
				<meta property='og:title' content='My page title' key='title' />
			</Head>
			<StaticLayout>asd</StaticLayout>
		</div>
	);
};

export default StaticShop;

const StaticLayout = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 80vw;
	height: 50vh;
	border: 1px solid red;
`;

export const getStaticProps: any = async () => {
	const files = fs.readdirSync("movies");
	const slugs = files.map((filename) => filename.replace(".md", ""));
	return {
		props: {
			slugs,
		},
	};
};
