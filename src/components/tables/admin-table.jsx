import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { authRequests } from "@/utils/http";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const statusOptions = ["deactivated", "pending", "active", "suspended"];
const roleOptions = ["agent", "admin", "super", "sales"];

const roleRender = (role, onChange) => {
  return (
    <Listbox value={role} onChange={onChange}>
      <ListboxButton className="tw-text-left rounded-100 tw-py-1 tw-px-2 tw-relative col-12 text-14 fw-500 tw-flex bg-blue-100 text-blue-700">
        <p className="tw-mr-2">{role?.toUpperCase()}</p>
        <RiArrowDownDoubleLine
          className="tw-group tw-pointer-events-none tw-top-1.5 tw-right-2.5 tw-size-4"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions className="tw-absolute tw-mt-1 tw-p-3 tw-bg-white tw-shadow-md tw-rounded-md tw-z-10">
        {roleOptions.map((option) => (
          <ListboxOption
            key={option}
            value={option}
            className="tw-cursor-pointer tw-rounded-md tw-py-2 tw-mb-3 hover:tw-bg-slate-50 tw-px-4 bg-blue-100 text-blue-700"
          >
            {option.toUpperCase()}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

const statusRender = (status, onChange) => {
  const statusClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-light-2 text-grey";
      case "active":
        return "bg-green-1 text-green-2";
      case "deactivated":
        return "bg-red-3 text-danger";
      case "suspended":
        return "bg-yellow-4 text-yellow-3";
      default:
        return "bg-grey text-grey";
    }
  };

  return (
    <Listbox value={status} onChange={onChange}>
      <ListboxButton
        className={`tw-text-left rounded-100 tw-py-1 tw-px-2 tw-relative col-12 text-14 fw-500 tw-flex ${statusClass(
          status
        )}`}
      >
        <p className="tw-mr-2">{status?.toUpperCase()}</p>
        <RiArrowDownDoubleLine
          className="tw-group tw-pointer-events-none tw-top-1.5 tw-right-2.5 tw-size-4"
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

const AdminTable = ({ data, currentPage, setCurrentPage, totalPage }) => {
  const [statuses, setStatuses] = useState(
    data.reduce((acc, row) => ({ ...acc, [row.id]: row.status }), {})
  );

  const [roles, setRoles] = useState(
    data.reduce((acc, row) => ({ ...acc, [row.id]: row.role }), {})
  );
  const handleStatusChange = async (id, newStatus) => {
    if (window.confirm("Are you sure you want to change admin status?")) {
      try {
        const response = await authRequests.put(
          `/admin/users/${id}/${newStatus}`
        );

        console.log(id);

        setStatuses((prevStatuses) => ({
          ...prevStatuses,
          [id]: newStatus,
        }));

        toast.success(response.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
      console.log(`Update status for id ${id} to ${newStatus}`);
    }
  };

  const handleRoleChange = async (id, newRole) => {
    if (window.confirm("Are you sure you want to change admin role?")) {
      try {
        const response = await authRequests.put(
          `/admin/users/${id}/role/${newRole}`
        );

        setRoles((prevRoles) => ({
          ...prevRoles,
          [id]: newRole,
        }));

        toast.success(response.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    setStatuses(
      data.reduce((acc, row) => ({ ...acc, [row.id]: row.status }), {})
    );

    setRoles(data.reduce((acc, row) => ({ ...acc, [row.id]: row.role }), {}));
  }, [data]);

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete admin?")) {
      try {
        const response = await authRequests.delete(`/admin/users/${id}/delete`);

        toast.success(response.message);
        navigate(0);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const { user: AuthUser } = useSelector((state) => state.auth);

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
              {["super", "admin"].includes(AuthUser.role) && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.first_name}</td>
                <td>{row.last_name}</td>
                <td>{row.email}</td>
                <td>
                  {roleRender(roles[row.id], (newRole) =>
                    handleRoleChange(row.id, newRole)
                  )}
                </td>
                <td>
                  {statusRender(statuses[row.id], (newStatus) =>
                    handleStatusChange(row.id, newStatus)
                  )}
                </td>
                <td>{row.created_at}</td>
                {["super", "admin"].includes(AuthUser.role) && (
                  <td>
                    <button
                      onClick={() => handleDelete(row.id)}
                      className="btn btn-secondary "
                      type="button"
                    >
                      Delete
                    </button>
                  </td>
                )}
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

export default AdminTable;
