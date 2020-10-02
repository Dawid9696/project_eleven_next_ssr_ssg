/** @format */

import styled from "styled-components";

//IMPORTED COMPOENTNS
import Navigator from "./Navigator";
import UserPanel from "./UserPanel";

const Navbar: React.FC = () => {
	return (
		<AppNavbar>
			<Navigator />
			<UserPanel />
		</AppNavbar>
	);
};

export default Navbar;

const AppNavbar = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	width: 100vw;
	min-height: 8vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	${(props) =>
		props.theme.backgroundColor == "black"
			? `background-color: ${props.theme.backgroundColor2}`
			: `border-left:40px solid ${props.theme.colors.fourth}`};
	@media (max-width: 768px) {
		flex-direction: column;
		border: none;
	}
`;
