import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { IListChannel, IListGroups } from '../../interfaces';
import { ColumnDef } from "@tanstack/react-table";
import { useTable } from "@refinedev/react-table";

export type dataListProps = {
  data: IListGroups[] | IListChannel[];
  actions: boolean;
  keysArray: string[]
};


export const Table = ({ data, actions,  keysArray}: dataListProps) => {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: "id",
        accessorKey: "id",
        header: "Id",
      },
      {
        id: "name",
        accessorKey: "name",
        header: "Name",
      },
      {
        id: "price",
        accessorKey: "price",
        header: "Price",
      },
      {
        id: "category",
        header: "Category",
        enableSorting: false,
        accessorKey: "category.title",
      },
      {
        id: "description",
        accessorKey: "description",
        enableSorting: false,
        header: "Description",
      },
      {
        id: "actions",
        accessorKey: "id",
        header: "Actions",
        enableSorting: false,
        cell: function render({ getValue }) {
          return (
            <div className="flex justify-around items-center">
              <button
                className="btn btn-xs btn-circle btn-ghost m-1"
                onClick={() => {
                  // edit("products", getValue() as string);
                }}
              >
                <PencilSquareIcon className="h-4 w-4" />
              </button>
              <button
                className="btn btn-xs btn-circle btn-ghost m-1"
                onClick={() => {
                  // deleteProduct({
                  //   resource: "products",
                  //   id: getValue() as string,
                  // });
                }}
              >
                <TrashIcon className="h-4 w-4 text-error" />
              </button>
            </div>
          );
        },
      },
    ],
    [],
  );

  const {
    getHeaderGroups,
    getRowModel,
    refineCore: { filters, setCurrent, setFilters },
    getState,
    setPageIndex,
    getCanPreviousPage,
    getPageCount,
    getCanNextPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable({
    columns,
  });

  const [sortConfig, setSortConfig] = useState<{ key:string; direction: string | null }>({
    key: '',
    direction: 'ascending',
  });

  const filteredData = data.map((item) => {
    const filteredItem: Partial<IListGroups & IListChannel> = {};
    keysArray.forEach((key) => {
      if (item.hasOwnProperty(key)) {
        filteredItem[key as keyof IListGroups & keyof IListChannel] = item[key as keyof IListGroups & keyof IListChannel];
      }
    });
    return filteredItem;
  });

  const sortedData = filteredData.sort((a:any, b:any) => {
    const keyA = a[sortConfig.key];
    const keyB = b[sortConfig.key];

    if (keyA < keyB) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (keyA > keyB) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
     }
    return 0;
  });

  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <>
      <table className="table table-zebra border-t">
        <thead className="bg-slate-200">
          <tr>
            {keysArray?.map((header, index) => (
              <th
                className="text-center hover:bg-slate-300"
                key={index}
                onClick={() => requestSort(header)}
                style={{ cursor: 'pointer' }}
              >
                <div className="flex justify-start items-center">
                  {header}
                  {sortConfig.key === header ? (
                    <span className="ml-2">
                      {sortConfig.direction === 'ascending' ? <ChevronUpIcon className="w-4 h-4 font-bold text-black" /> : <ChevronDownIcon className="w-4 h-4 font-bold text-black" />}
                    </span>
                  ): <span className="ml-2"><ChevronDownIcon  className="w-4 h-4 font-bold"/></span>}
                </div>
              </th>
            ))}
            {actions && <th className="text-center hover:bg-slate-300">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row:any, index) => (
            <tr className={index % 2 === 0 ? 'bg-white' : ''} key={index}>
              {Object.keys(row).map((key, cellIndex) => (
                <td key={cellIndex}>{row[key]}</td>
              ))}
              {actions && 
                <td>
                  <div className="flex justify-around items-center">
                    <button
                      className="btn btn-xs btn-circle btn-ghost m-1"
                      onClick={() => {
                        // edit("products", getValue() as string);
                      }}
                    >
                      <PencilSquareIcon className="h-4 w-4" />
                    </button>
                    <button
                      className="btn btn-xs btn-circle btn-ghost m-1"
                      onClick={() => {
                        // deleteProduct({
                        //   resource: "products",
                        //   id: getValue() as string,
                        // });
                      }}
                    >
                      <TrashIcon className="h-4 w-4 text-error" />
                    </button>
                  </div>
                </td>
              }
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-3">
        <div className="join">
          <button
            className="join-item btn btn-sm btn-ghost"
            // onClick={() => setPageIndex(0)}
            // disabled={!getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className="join-item btn btn-sm btn-ghost"
            // onClick={() => previousPage()}
            // disabled={!getCanPreviousPage()}
          >
            {"<"}
          </button>
          {Array.from({ length: getPageCount() }, (_, index) => index + 1)?.map(
            (pageNumber) => {
              const btnActive =
                pageNumber - 1 === getState()?.pagination?.pageIndex
                  ? " btn-active"
                  : "";
              return (
                <button
                  key={pageNumber}
                  className={`join-item btn btn-sm${btnActive}`}
                  onClick={() => setPageIndex(pageNumber - 1)}
                >
                  {pageNumber}
                </button>
              );
            },
          )}
          <button
            className="join-item btn btn-sm btn-ghost"
            onClick={() => nextPage()}
            disabled={!getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="join-item btn btn-sm btn-ghost"
            onClick={() => setPageIndex(getPageCount() - 1)}
            disabled={!getCanNextPage()}
          >
            {">>"}
          </button>
        </div>
        <select
          className="mx-2 p-1 border rounded"
          value={getState()?.pagination?.pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 25, 50].map((pageSize) => (
            <option className="border rounded" key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

