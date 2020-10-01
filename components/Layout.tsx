/** @format */

import styled from "styled-components";

//IMPORTED COMPONENTS
import Navbar from "./Navbar/Navbar";

type LayoutProps = { children: React.ReactNode };

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<AppLayout>
			<Navbar />
			{children}
		</AppLayout>
	);
};

export default Layout;

const AppLayout = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	width: 100vw;
	min-height: 100vh;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	overflow: hidden;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url("https://static.dezeen.com/uploads/2016/04/back-bike-ion-lucin-sport-cycling-design-technology_dezeen_1568_17.jpg");

	@media (max-width: 768px) {
		background-size: cover;
	}
`;
