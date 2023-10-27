import React, { useState, useMemo, useEffect } from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Tooltip from "@/components/ui/Tooltip";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import GlobalFilter from "./GlobalFilter";


const COLUMNS = [
  {
    Header: "#",
    accessor: "rowIndex",
  },
  {
    Header: "CUSTOMER",
    accessor: "fname",
  },
  {
    Header: "PHONE",
    accessor: "phone",
  },
  {
    Header: "EMAIL",
    accessor: "email",
  },
  {
    Header: "DOB",
    accessor: "dob",
  },
  {
    Header: "GENDER",
    accessor: "gender",
  },
  {
    Header: "ADDRESS",
    accessor: "address",
  },
  {
    Header: "ACTION",
    accessor: "actions", 
  },
];
const PatientTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/patients');
      if (response.status === 200) {
        const usersWithRowIndex = response.data.map((user, index) => ({
          ...user,
          rowIndex: index + 1,
        }));
        setData(usersWithRowIndex);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching doctor data:", error);
      setLoading(false);
    }
  };

  const navigate = useNavigate();
  const handleView = (email) => {
    // Navigate to the ViewPage with the patient's email as a parameter
    navigate(`/view?email=${encodeURIComponent(email)}`);
  };

  const handleDelete = async (email) => {
    const endpoints = ['patients', 'pcs', 'moxfq',  'sf_36s', 'image','patientinfo'];

    for (const endpoint of endpoints) {
        try {
            const response = await axios.delete(`http://localhost:3001/${endpoint}/${email}`);

            if (response.status === 200) {
                setData((prevData) => prevData.filter((item) => item.email !== email));
                // Reload the page after successful deletion
                window.location.reload();
            } else {
                console.error(`Delete request for ${endpoint} failed with status:`, response.status);
            }
        } catch (error) {
            console.error(`Error deleting ${endpoint}:`, error);
        }
    }
   
};

  const tableInstance = useTable(
    {
      columns,
      data,
    },

    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;
  return (
    <>
      <Card>
        <div className="md:flex justify-between items-center mb-6">
          <div className=" flex items-center space-x-3 rtl:space-x-reverse">
            <select
              className="form-control py-2 w-max"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[5, 10, 15].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Page{" "}
              <span>
                {pageIndex + 1} of {pageOptions.length}
              </span>
            </span>
          </div>
          <div>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
        </div>
        <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
        <thead className="bg-slate-200 dark:bg-slate-700">
          <tr>
            <th className=" table-th " >#</th>
            <th className=" table-th " >CUSTOMER</th>
            <th className=" table-th " >PHONE</th>
            <th className=" table-th " >EMAIL</th>
            <th className=" table-th " >DOB</th>
            <th className=" table-th " >GENDER</th>
            <th className=" table-th " >ADDRESS</th>
            <th className=" table-th " >ACTION</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.original._id}>
                <td className="table-td">{row.original.rowIndex}</td>
                <td className="table-td">{row.original.fname}</td>
                <td className="table-td">{row.original.phone}</td>
                <td className="table-td">{row.original.email}</td>
                <td className="table-td">{row.original.dob}</td>
                <td className="table-td">{row.original.gender}</td>
                <td className="table-td">{row.original.address}</td>
                <td className="table-td">
                  <div className="d-flex justify-around rtl-space-x-reverse">
                    <Tooltip content="View" placement="top" arrow animation="shift-away">
            <button
              className="action-btn"
              type="button"
              onClick={() => handleView(row.original.email)}
            >
              <Icon icon="heroicons:eye" />
            </button>
          </Tooltip>
                    <Tooltip
                      content="Delete"
                      placement="top"
                      arrow
                      animation="shift-away"
                      theme="danger"
                    >
                      <button
                        className="action-btn"
                        type="button"
                        onClick={() => handleDelete(row.original.email)}
                      >
                        <Icon icon="heroicons:trash" />
                      </button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        <div className="md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center">
          <div className=" flex items-center space-x-3 rtl:space-x-reverse"></div>
          <ul className="flex items-center  space-x-3  rtl:space-x-reverse">
            <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                className={` ${!canPreviousPage ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <Icon icon="heroicons:chevron-double-left-solid" />
              </button>
            </li>
            <li className="text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                className={` ${!canPreviousPage ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                Prev
              </button>
            </li>
            {pageOptions.map((page, pageIdx) => (
              <li key={pageIdx}>
                <button
                  href="#"
                  aria-current="page"
                  className={` ${pageIdx === pageIndex
                    ? "bg-slate-900 dark:bg-slate-600  dark:text-slate-200 text-white font-medium "
                    : "bg-slate-100 dark:bg-slate-700 dark:text-slate-400 text-slate-900  font-normal  "
                    }    text-sm rounded leading-[16px] flex h-6 w-6 items-center justify-center transition-all duration-150`}
                  onClick={() => gotoPage(pageIdx)}
                >
                  {page + 1}
                </button>
              </li>
            ))}
            <li className="text-sm leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                className={` ${!canNextPage ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                Next
              </button>
            </li>
            <li className="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
              <button
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
                className={` ${!canNextPage ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                <Icon icon="heroicons:chevron-double-right-solid" />
              </button>
            </li>
          </ul>
        </div>
        {/*end*/}
      </Card>
    </>
  );
};

export default PatientTable;
