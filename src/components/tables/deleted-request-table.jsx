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
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const statusOptions = [
  "pending",
  "processing",
  "accepted",
  "rejected",
  "queried",
  "assigned",
  "completed",
];

const statusRender = (status, isAdmin, onChange) => {
  const statusClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-light-2 text-grey";
      case "processing":
        return "bg-blue-2 text-blue-1";
      case "accepted":
        return "bg-green-1 text-green-2";
      case "rejected":
        return "bg-red-3 text-danger";
      case "queried":
        return "bg-yellow-4 text-yellow-3";
      case "assigned":
        return "tw-bg-blue-900 !tw-text-white";
      case "completed":
        return "tw-bg-blue-900 !tw-text-white";
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
        <p className={`tw-mr-2  ${statusClass(status).split(" ")[1]}`}>
          {status?.toUpperCase()}
        </p>
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

const DeletedRequestTable = ({
  data,
  currentPage,
  setCurrentPage,
  isAdmin,
  totalPage,
}) => {
  const [statuses, setStatuses] = useState(
    data.reduce((acc, row) => ({ ...acc, [row.id]: row.status }), {})
  );

  const navigate = useNavigate();

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await authRequests.put(`/admin/requests/${id}`, {
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

  const { user: AuthUser } = useSelector((state) => state.auth);

  const handleRestore = async (id) => {
    if (window.confirm("Are you sure you want to restore this request?")) {
      try {
        const response = await authRequests.post(
          `/admin/requests/${id}/restore`
        );
        toast.success(response.message);
        navigate(0);
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            "An error occurred while deleting the request"
        );
      }
    }
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
              <th>Phone</th>
              <th>Address</th>
              <th>Duration</th>
              <th>Move In Date</th>
              <th>Occupation</th>
              <th>No of occupants</th>
              <th>Paid</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row?.id}>
                <td>{index + 1}</td>
                <td>{row?.user?.first_name}</td>
                <td>{row?.user?.last_name}</td>
                <td>{row?.user?.email}</td>
                <td>{row?.user?.phone}</td>

                <td>{row?.user?.address_line_one}</td>
                <td className="fw-500">{row?.move_out_date}</td>
                <td>{row?.move_in_date}</td>
                <td>{row?.user?.occupation}</td>
                <td style={{ textAlign: "center" }}>
                  {row?.guest_adults + row?.guest_children}
                </td>
                <td>{row?.payment_status}</td>
                <td>
                  {statusRender(statuses[row?.id], isAdmin, (newStatus) =>
                    handleStatusChange(row?.id, newStatus)
                  )}
                </td>
                <td>{dayjs(row?.created_at).format("MMMM DD")}</td>
                <td className="tw-flex tw-items-center">
                  <button
                    onClick={() => handleRestore(row?.id)}
                    className="tw-cursor-pointer tw-bg-blue-800 tw-mr-2 tw-px-3 tw-py-2 tw-rounded-lg tw-text-center tw-self-start tw-text-white"
                  >
                    Restore
                  </button>
                </td>
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

export default DeletedRequestTable;
