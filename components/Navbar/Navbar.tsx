/** @format */

import styled from "styled-components";

//IMPORTED COMPOENTNS
import Logo from "./Logo";
import Navigator from "./Navigator";
import UserPanel from "./UserPanel";

const Navbar: React.FC = () => {
	return (
		<AppNavbar>
			<Logo photo='https://st.focusedcollection.com/13422768/i/650/focused_243419438-stock-photo-rendered-illustration-male-cyclist-black.jpg' />
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
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
