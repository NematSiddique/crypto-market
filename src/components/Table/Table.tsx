import React, { useRef, useEffect, useState } from 'react';
import type { CSSProperties } from 'react';

import type { ColumnDef, Row } from '@tanstack/react-table';
import {
	flexRender,
	getCoreRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { StyledTable, TableWrapper } from './Table.styled';
import { Container } from 'styled/elements/Container';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useTheme } from 'styled-components';

export type TableColumn<T> = ColumnDef<T> & {
	textAlign?: CSSProperties['textAlign'];
};

interface TableProps<T> {
	data: T[];
	columns: TableColumn<T>[];
	columnWidths?: Record<string, string>; // Optional column width overrides
}


const Table = <T,>({ data, columns }: TableProps<T>) => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});
	const { colors } = useTheme();
	const tableContainerRef = useRef<HTMLDivElement>(null);

	const { rows } = table.getRowModel();
	const rowVirtualizer = useVirtualizer({
		count: rows.length,
		getScrollElement: () => tableContainerRef.current,
		estimateSize: () => 35, // Estimated row height
		overscan: 20, // Increased for smoother scrolling
	});

	const virtualRows = rowVirtualizer.getVirtualItems();
	const totalSize = rowVirtualizer.getTotalSize();

	const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
	const paddingBottom =
		virtualRows.length > 0
			? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
			: 0;

	return (
		<Container>
			<TableWrapper 
				ref={tableContainerRef} 
				style={{ 
					overflowX: 'auto',
					scrollBehavior: 'smooth',
					WebkitOverflowScrolling: 'touch'
				}}>
				<StyledTable style={{ width: '100%', tableLayout: 'auto' }}>
					<thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header, index) => {
									const isSticky = index === 0 || index === 1 || index === 2;
									const leftOffset = index === 0 ? 0 : index === 1 ? 33 : index === 2 ? 78 : undefined;

									return (
										<th
											key={header.id}
											style={{
												width: `${header.getSize()}px`,
												textAlign: (header.column.columnDef as TableColumn<T>).textAlign,
												whiteSpace: 'nowrap',
												position: 'sticky',
												top: 0,
												zIndex: isSticky ? 15 : 10,
												background: colors.bgColor,
												left: isSticky ? `${leftOffset}px` : undefined,
											}}
										>
											{header.isPlaceholder
												? null
												: flexRender(header.column.columnDef.header, header.getContext())}
										</th>
										);
									})}
								</tr>
							))}
					</thead>
				  
          <tbody>
						{paddingTop > 0 && (
							<tr>
								<td style={{ height: `${paddingTop}px` }} />
							</tr>
						)}
						{virtualRows.map((virtualRow) => {
							const row = rows[virtualRow.index] as Row<T>;
							return (
								<tr key={row.id}>
									{row.getVisibleCells().map((cell) => {
										return (
											<td
												style={{
													width: `${cell.column.getSize()}px`,
													textAlign: (cell.column.columnDef as TableColumn<T>)
														.textAlign,
												}}
												key={cell.id}
											>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</td>
										);
									})}
								</tr>
							);
						})}
						{paddingBottom > 0 && (
							<tr>
								<td style={{ height: `${paddingBottom}px` }} />
							</tr>
						)}
					</tbody>
				</StyledTable>
			</TableWrapper>
		</Container>
	);
};

export default Table;
