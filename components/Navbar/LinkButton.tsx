/** @format */
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

interface LinkButtonProps {
	href: string;
	onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
	pathName: string;
}

const LinkButton: React.ForwardRefExoticComponent<any & React.RefAttributes<any>> = React.forwardRef(
	({ onClick, href, pathName }: LinkButtonProps, ref: React.MutableRefObject<any>) => {
		const { pathname } = useRouter();
		return (
			<AppLink href={href} onClick={onClick} ref={ref} currentPath={pathname} thisPath={href}>
				{pathName}
			</AppLink>
		);
	}
);

export default React.memo(LinkButton);

type AppLinkProps = {
	currentPath: string;
	thisPath: string;
};

const AppLink = styled.a<AppLinkProps>`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	width: 25%;
	min-height: 8vh;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => (props.currentPath == props.thisPath ? props.theme.colors.fourth : props.theme.colors.main)};
	:hover {
		cursor: pointer;
		${(props) => (props.theme.backgroundColor == "black" ? `color: ${props.theme.colors.secondary}` : `color: ${props.theme.colors.fourth}`)};
	}
`;
