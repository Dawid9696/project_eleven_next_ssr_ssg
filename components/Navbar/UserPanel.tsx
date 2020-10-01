/** @format */

import styled from "styled-components";

const UserPanel: React.FC = () => {
	return <AppUserPanel>ZALOGUJ SIĘ</AppUserPanel>;
};

export default UserPanel;

const AppUserPanel = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	width: 25%;
	min-height: 8vh;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.colors.main};
	@media (max-width: 768px) {
		width: 100vw;
		justify-content: space-evenly;
		font-size: 14px;
	}
`;
