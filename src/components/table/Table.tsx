// Updated Table component
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
    <div className="overflow-x-auto">
      <div className="border border-orange-500">
        <div className="max-h-full">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-orange-500">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-2 border border-orange-500 text-center text-sm font-semibold text-white bg-orange-500"
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

            <tbody className="bg-white divide-y divide-gray-200">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-4 py-2 border border-gray-300 text-sm text-gray-700 text-center"
                      style={{ width: `${cell.column.getSize()}px` }}
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
    </div>
  );

 
};

export default Table;
