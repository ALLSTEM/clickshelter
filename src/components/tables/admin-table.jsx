import React from "react";
import Pagination from "./Pagination";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { RiArrowDownDoubleLine } from "react-icons/ri";

const statusOptions = ["active", "inactive"];

const statusRender = (status, onChange) => {
  const statusClass = (status) => {
    switch (status) {
      case "active":
        return "bg-green-1 text-green-2";
      case "inactive":
        return "bg-red-3 text-danger";
      default:
        return "bg-grey text-grey";
    }
  };

  return (
    <Listbox value={status} onChange={onChange}>
      <ListboxButton
        className={`tw-text-left rounded-100 py-4 tw-px-2 tw-relative col-12 text-14 fw-500 ${statusClass(
          status
        )}`}
      >
        {status.toUpperCase()}
        <RiArrowDownDoubleLine
          className="tw-group tw-pointer-events-none tw-absolute tw-top-1.5 tw-right-2.5 tw-size-4"
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
  );
};

const AdminTable = ({ data, currentPage, setCurrentPage }) => {
  const handleStatusChange = (id, newStatus) => {
    // Implement status update logic here
    console.log(`Update status for id ${id} to ${newStatus}`);
  };

  return (
    <div>
      <div className="overflow-scroll scroll-bar-1 pt-30">
        <table className="table-2 col-12">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.first_name}</td>
                <td>{row.last_name}</td>
                <td>{row.email}</td>
                <td>{row.role}</td>
                <td>
                  {statusRender(row.status, (newStatus) =>
                    handleStatusChange(row.id, newStatus)
                  )}
                </td>
                <td>{row.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {currentPage && setCurrentPage && (
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default AdminTable;
