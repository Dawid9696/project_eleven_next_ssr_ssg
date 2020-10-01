/** @format */

import styled from "styled-components";

type LayoutProps = { children: React.ReactNode };

const ShopLayout: React.FC<LayoutProps> = ({ children }) => {
	return <AppShopLayout>{children}</AppShopLayout>;
};

export default ShopLayout;

const AppShopLayout = styled.div`
	margin: 15px;
	padding: 0px;
	box-sizing: border-box;
	width: 80vw;
	min-height: 100vh;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	overflow: hidden;
	background-color: ${(props) => props.theme.backgroundColor2};
`;
