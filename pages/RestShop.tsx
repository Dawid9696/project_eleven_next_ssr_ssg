/** @format */

import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import useSWR from "swr";
import { DataProps } from "./ServerShop";
import styled from "styled-components";

//IMPORTED COMPONENTS
import RestCard from "../components/Home/RestCard";

const RestShop: React.FC<DataProps> = ({ shopData }) => {
	const { data }: any = useSWR("/api/posts", { initialData: shopData });
	return (
		<React.Fragment>
			<Head>
				<title>REST</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<ShopLayout>
				{data.map((movie, index) => (
					<RestCard key={index} shopData={movie} />
				))}
			</ShopLayout>
		</React.Fragment>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const res = await fetch("http://localhost:3000/Mroczkowski/api");
	const shopData = await res.json();
	return {
		props: {
			shopData,
		},
		revalidate: 1,
	};
};

export default RestShop;

const ShopLayout = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
