import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTable, useSortBy } from "react-table";
import { formatDate } from "../../utils/formatDates";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/solid";

const RecsTable = ({ recommendations }) => {
  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      {
        Header: "Fecha",
        accessor: "time_stamp",
        Cell: ({ value }) => formatDate(value),
      },
      { Header: "Tipo de Viaje", accessor: "travel_type" },
      { Header: "Presupuesto", accessor: "budget" },
      { Header: "Clima", accessor: "weather" },
      { Header: "Duración", accessor: "duration" },
    ],
    []
  );

  const handleRowClick = (row) => {
    const recs = recommendations.find((rec) => rec.id === row.values.id);

    // // Redirigir al usuario a la página principal
    navigate("/recommendations", { state: recs.coordinates });
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: recommendations }, useSortBy);

  return (
    <table
      {...getTableProps()}
      className="min-w-full bg-white border border-gray-200 p-4 rounded-lg shadow-lg "
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className="py-2 px-4 border-b bg-falabella hover:bg-falabella-dark text-white font-bold"
              >
                {column.render("Header")}
                <span className="ml-1 inline-flex items-center justify-center">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <ArrowDownIcon className="h-4 w-4" />
                    ) : (
                      <ArrowUpIcon className="h-4 w-4" />
                    )
                  ) : (
                    <ArrowUpIcon className="h-4 w-4 text-transparent" />
                  )}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className="text-center hover:bg-falabella-light cursor-pointer"
              onClick={() => handleRowClick(row)}
            >
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className="py-2 px-4 border-b">
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RecsTable;
