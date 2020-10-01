/** @format */

import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import styled from "styled-components";

import RestCard from "../components/Home/RestCard";

type Seance = {
	_id: string;
	hour: string;
	dimension: string;
	dubbing: string;
};

interface ServerProps {
	city: [string];
	_id: string;
	title: string;
	genre: string;
	duration: number;
	description: string;
	seance: [Seance];
	photo: string;
	age: number;
}

export type DataProps = { shopData?: [ServerProps]; data?: ServerProps };

const ServerShop: React.FC<DataProps> = ({ shopData }) => {
	return (
		<React.Fragment>
			<Head>
				<title>SSR</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<ShopLayout>
				{shopData.map((movie, index) => (
					<RestCard key={index} shopData={movie} />
				))}
			</ShopLayout>
		</React.Fragment>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const res = await fetch(`http://localhost:3000/Mroczkowski/api`);
	const shopData = await res.json();
	return { props: { shopData } };
};

export default ServerShop;

const ShopLayout = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
