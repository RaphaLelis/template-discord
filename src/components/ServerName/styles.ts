import styled from "styled-components";
import { ExpandMore } from "styled-icons/material";

export const Container = styled.div `
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 11px 0 16px;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
	z-index: 2px;
	

	background-color: var(--secondary);
`;

export const Title = styled.h1 `
	font-size: 16px;
	color: var(--white);
	font-weight: bold;
`;

export const ExpandIcon = styled(ExpandMore) `
	width: 24px;
	height: 24px;

	color: var(--white);
	cursor: pointer;
`;

