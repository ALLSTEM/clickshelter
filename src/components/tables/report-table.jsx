import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { authRequests } from "@/utils/http";

const statusOptions = [
  "pending",
  "processing",
  "resolved",
  "rejected",
  "queried",
];

const statusRender = (status, isAdmin, onChange) => {
  const statusClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-light-2 text-grey";
      case "processing":
        return "bg-blue-2 text-blue-1";
      case "resolved":
        return "bg-green-1 text-green-2";
      case "rejected":
        return "bg-red-3 text-danger";
      case "queried":
        return "bg-yellow-4 text-yellow-3";
      default:
        return "bg-grey text-grey";
    }
  };

  return isAdmin ? (
    <Listbox value={status} onChange={onChange}>
      <ListboxButton
        className={`tw-text-left tw-flex rounded-100 py-4 tw-px-2 tw-relative col-12 text-14 fw-500 ${statusClass(
          status
        )}`}
      >
        <p className="tw-mr-2">{status?.toUpperCase()}</p>
        <RiArrowDownDoubleLine
          className="tw-group tw-pointer-events-none  tw-top-1.5 tw-right-2.5 tw-size-4"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions className="tw-absolute tw-mt-1 tw-p-3 tw-bg-white tw-shadow-md tw-rounded-md tw-z-10">
        {statusOptions.map((option) => (
          <ListboxOption
            key={option}
            value={option}
            className={`tw-cursor-pointer tw-rounded-md tw-py-2 tw-mb-3 hover:tw-bg-slate-50 tw-px-4 ${statusClass(
              option
            )}`}
          >
            {option.toUpperCase()}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  ) : (
    <div
      className={`rounded-100 py-4 text-center col-12 text-14 fw-500 ${statusClass(
        status
      )}`}
    >
      {status?.toUpperCase()}
    </div>
  );
};

const ReportTable = ({
  data,
  currentPage,
  setCurrentPage,
  isAdmin,
  totalPage = 10,
}) => {
  const [statuses, setStatuses] = useState();

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await authRequests.put(`/admin/reports/${id}`, {
        status: newStatus,
      });

      setStatuses((prevStatuses) => ({
        ...prevStatuses,
        [id]: newStatus,
      }));

      toast.success(response.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    setStatuses(
      data.reduce((acc, row) => ({ ...acc, [row.id]: row.status }), {})
    );
  }, [data]);

  return (
    <div>
      <div className="overflow-scroll scroll-bar-1 pt-30">
        <table className="table-2 col-12">
          <thead>
            <tr>
              <th>#</th>
              <th>Space ID</th>
              <th>Type</th>
              <th>Detail</th>
              <th>Host</th>
              <th>Occupant</th>
              <th>Assigned to</th>
              <th>Status</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.space_id}</td>
                <td className="fw-500">{row.type}</td>
                <td>{row.description}</td>
                <td>{row.host}</td>
                <td>{row.user}</td>
                <td>{row.assigned_to ? row.assigned_to : "Not Assigned"}</td>
                <td>
                  {statusRender(statuses[row.id], isAdmin, (newStatus) =>
                    handleStatusChange(row.id, newStatus)
                  )}
                </td>
                <td>{row.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {currentPage && setCurrentPage && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
        />
      )}
    </div>
  );
};

export default ReportTable;
