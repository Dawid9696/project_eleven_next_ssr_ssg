/** @format */
import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface LinkButtonProps {
	href: string;
	onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
	header: string;
	text: string;
}

const LinkButton: React.ForwardRefExoticComponent<any & React.RefAttributes<any>> = React.forwardRef(
	({ onClick, href, header, text }: LinkButtonProps, ref: React.MutableRefObject<any>) => {
		return (
			<Option href={href} onClick={onClick} ref={ref}>
				<h1>{header}</h1>
				<StyledDiv>{text}</StyledDiv>
			</Option>
		);
	}
);

export default React.memo(LinkButton);

const Option = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 15px;
	padding: 20px;
	border: ${(props) => `3px solid ${props.theme.colors.fourth}`};
	min-height: 30vh;
	min-width: 40%;
	flex-direction: column;
	border-radius: 50px;
	${(props) => props.theme.backgroundColor == "black" && `background-color: ${props.theme.backgroundColor2}`};
	transition: 0.5s;
	:hover {
		cursor: pointer;
		transition: 0.5s;
		transform: scale(1.05);
	}
	@media (max-width: 768px) {
		margin: 10px;
		min-width: 70vw;
	}
`;

const StyledDiv = styled.div`
	color: ${(props) => props.theme.colors.secondary};
`;

const StyledHeader = styled.div`
	color: ${(props) => props.theme.colors.secondary};
`;
