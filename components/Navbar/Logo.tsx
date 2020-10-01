/** @format */

import styled from "styled-components";

type LogoProp = { photo: string };

const Logo: React.FC<LogoProp> = ({ photo }) => {
	return <AppLogo photo={photo}></AppLogo>;
};

export default Logo;

type AppLogoProp = { photo: string };

const AppLogo = styled.div<AppLogoProp>`
	margin: 10px;
	padding: 0px;
	box-sizing: border-box;
	width: 25%;
	height: 100%;
	min-height: 8vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	background-image: ${(props) => `url(${props.photo})`};
	@media (max-width: 768px) {
		width: 100%;
		height: 20vh;
	}
`;
