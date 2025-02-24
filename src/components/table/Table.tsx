import React from "react";
import { OrderInterface } from "../../services/intefaces";
import { orderColumns } from "./columns";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";

interface TableProps {
  orderData: OrderInterface[];
  filterDate: Date | null;
  setFilterDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const Table: React.FC<TableProps> = ({ orderData, filterDate, setFilterDate }) => {
  const table = useReactTable({
    data: orderData,
    columns: orderColumns,
    state: {
      globalFilter: filterDate,
    },
    onGlobalFilterChange: setFilterDate,
    globalFilterFn: (row, _, filterValue) => {
      if (!filterValue) return true;
      const pSem = row.getValue("p_sem") as string;
      if (!pSem) return false;

      const filterDateString = filterValue.toISOString().split("T")[0];
      const rowDateString = pSem.split("T")[0];

      return rowDateString === filterDateString;
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="overflow-x-auto border border-orange-500 rounded-lg">
      <div className="max-h-[70vh] overflow-y-auto relative">
        <table className="min-w-full">
          <thead className="bg-orange-500 sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                    <th
                    key={header.id}
                    className="px-5 md:px-0 py-2 md:py-4 border border-orange-500 text-center text-xs md:text-sm font-semibold text-white"
                    style={{ width: `${header.column.getSize()}px` }}
                    >
                    <div className="flex items-center justify-center">
                      {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                      )}
                    </div>
                    </th>
                ))}
              </tr>
            ))}
          </thead>

            <tbody className="bg-white ">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                key={cell.id}
                className="px-0 md:px-4 py-2 border border-orange-500 text-xs md:text-sm text-gray-700 text-center"
                >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;