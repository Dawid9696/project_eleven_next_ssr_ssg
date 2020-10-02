/** @format */

import Link from "next/link";
import styled from "styled-components";
import LinkButton from "./LinkButton";

//passHref przekazuje właściwości LINK do dziecka
//scroll prze przejściu na następny link strona załduje się od góry
//aktualizuje ścieżke bez ponownego ładowania get...Props.

const Navigator: React.FC = () => {
	return (
		<AppNavigator>
			<Link as='/' href={"/"} passHref scroll>
				<LinkButton pathName='HOME' />
			</Link>
			<Link as='/RestShop' href={"/RestShop"} passHref scroll>
				<LinkButton pathName='REST SHOP' />
			</Link>
			<Link as='/StaticShop' href={"/StaticShop"} passHref scroll>
				<LinkButton pathName='STATIC SHOP' />
			</Link>
			<Link as='/ServerShop' href={"/ServerShop"} passHref scroll>
				<LinkButton pathName='SERVER SHOP' />
			</Link>
		</AppNavigator>
	);
};

export default Navigator;

const AppNavigator = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	min-width: 50%;
	min-height: 8vh;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.colors.main};
	@media (max-width: 768px) {
		width: 100vw;
		justify-content: space-evenly;
		font-size: 10px;
		${(props) => props.theme.backgroundColor == "black" && `background-color: ${props.theme.backgroundColor2}`};
		flex-direction: column;
	}
`;
