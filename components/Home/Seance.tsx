/** @format */

import React from "react";
import styled from "styled-components";

type Seance = {
	_id: string;
	hour: string;
	dimension: string;
	dubbing: string;
};

export type DataProps = { seance: Seance };

const Seance: React.FC<DataProps> = ({ seance }) => {
	const { hour, dimension, dubbing } = seance;
	return (
		<SeanceCard>
			<Hour>{hour}</Hour>
			<Infos>
				{dimension}, {dubbing}
			</Infos>
		</SeanceCard>
	);
};

export default Seance;

const SeanceCard = styled.div`
	margin: 20px;
	padding: 10px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: ${(props) => `3px solid ${props.theme.colors.fourth}`};
	border-radius: 3px;
	color: ${(props) => props.theme.colors.main};
	transition: 0.25s;
	:hover {
		cursor: pointer;
		transition: 0.25s;
		background-color: ${(props) => props.theme.colors.fourth};
	}
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const Hour = styled.div`
	margin: 5px;
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	font-size: 18px;
	align-items: center;
	flex-direction: row;
	font-weight: 600;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const Infos = styled.div`
	margin: 5px;
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
