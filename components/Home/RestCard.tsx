/** @format */

import React from "react";
import styled from "styled-components";
import { DataProps } from "../../pages/ServerShop";

import Seance from "./Seance";

interface CardProps {
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

type CardData = { shopData: CardProps };

const RestCard: React.FC<CardData> = ({ shopData }) => {
	console.log(shopData);
	return (
		<Card>
			<Photo photo={shopData.photo}></Photo>
			<Info>
				<Title>{shopData.title}</Title>
				<Details>
					Od {shopData.age} lat | {shopData.genre} | {shopData.duration} min
				</Details>
				<Description>{shopData.description}</Description>
				<Seances>
					{shopData.seance.map((seance, index) => (
						<Seance key={index} seance={seance} />
					))}
				</Seances>
			</Info>
		</Card>
	);
};

export default RestCard;

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
