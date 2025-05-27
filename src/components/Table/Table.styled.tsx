import styled from 'styled-components';
import type { HTMLAttributes, TableHTMLAttributes, RefObject } from 'react';

type TableWrapperProps = HTMLAttributes<HTMLDivElement> & {
  ref?: RefObject<HTMLDivElement>;
};

type StyledTableProps = TableHTMLAttributes<HTMLTableElement>;

export const TableWrapper = styled.div<TableWrapperProps>`
	overflow-x: auto;
	width: 100%;
	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;
	::-webkit-scrollbar {
		height: 6px;
		background-color: transparent;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 3px;
		background: ${({ theme: { colors } }) => colors.colorLightNeutral3};
	}
`;

export const StyledTable = styled.table<StyledTableProps>`
	width: 100%;
	table-layout: fixed;
	min-width: max-content;
	border-spacing: 0;
	border-collapse: collapse;
	position: relative;
	font-variant-numeric: tabular-nums;

	tr {
		text-align: right;

		&:hover td {
			background: ${({ theme: { colors } }) => colors.colorNeutral1};
		}
	}

	td {
		padding: 10px;
		font-size: 14px;
		line-height: 24px;
		font-weight: 600;
		white-space: nowrap;
		text-align: right;
		border-bottom: 1px solid ${({ theme: { colors } }) => colors.borderColor};
		background: ${({ theme: { colors } }) => colors.bgColor};
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
		min-width: 100px;
		width: auto;

		&:nth-child(1),
		&:nth-child(2),
		&:nth-child(3) {
			position: sticky;
			z-index: 5;
			background: ${({ theme: { colors } }) => colors.bgColor};
			box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
		}

		&:nth-child(1) {
			left: 0px;
		}

		&:nth-child(2) {
			left: 33px;
		}

		&:nth-child(3) {
			left: 78px;
		}
	}

	th {
		padding: 10px;
		font-size: 12px;
		line-height: 1.9;
		white-space: nowrap;
		text-align: right;
		background: ${({ theme: { colors } }) => colors.bgColor};
		border-top: 1px solid ${({ theme: { colors } }) => colors.borderColor};
		border-bottom: 1px solid ${({ theme: { colors } }) => colors.borderColor};
		position: sticky;
		top: 0;
		z-index: 10;
	}

	thead th:nth-child(1),
	thead th:nth-child(2),
	thead th:nth-child(3) {
		position: sticky;
		z-index: 15;
		background: ${({ theme: { colors } }) => colors.bgColor};
		box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
	}

	thead th:nth-child(1) {
		left: 0px;
	}
	thead th:nth-child(2) {
		left: 33px;
	}
	thead th:nth-child(3) {
		left: 78px;
	}
`;

