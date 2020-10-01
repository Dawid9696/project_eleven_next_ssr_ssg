/** @format */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

//IMPORTED COMPONENTS
import Card from "../components/Home/Card";

const Home: React.FC = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Home</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Container>
				<h1>SHOPS - {process.env.pageName}</h1>
				<StyledHeader>PLEASE CHOOSE YOUR OPTION</StyledHeader>
				<Options>
					<Link href={"/RestShop"} scroll passHref>
						<Card header='REST API' text='Movie shop which was created using Rest Api' />
					</Link>
					<Link href={"/StaticShop"} scroll passHref>
						<Card header='SSG' text='Bike shop which was created using SSG' />
					</Link>
					<Link href={"/ServerShop"} scroll passHref>
						<Card header='SSR' text='Movie shop was created using SSR' />
					</Link>
				</Options>
			</Container>
		</React.Fragment>
	);
};

export default Home;

const Container = styled.div`
	margin: 20px;
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: ${(props) => props.theme.colors.main};
	@media (max-width: 768px) {
		width: 100vw;
		text-align: center;
	}
`;

const Options = styled.div`
	margin: 0px;
	padding: 20px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	min-width: 80vw;
	min-height: 50vh;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	@media (max-width: 768px) {
		flex-direction: column;
		width: 100vw;
		text-align: center;
	}
`;

const StyledHeader = styled.div`
	color: ${(props) => props.theme.colors.secondary};
`;
