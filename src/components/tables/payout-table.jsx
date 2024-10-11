import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import {
  RiArrowDownDoubleLine,
  RiDeleteBinLine,
  RiEyeLine,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogPanel,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import InvoiceComponent from "../invoice/Invoice";
import { authRequests } from "@/utils/http";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const statusOptions = ["completed", "failed", "pending"];

const statusRender = (status, isAdmin, onChange) => {
  const statusClass = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-1 text-green-2";
      case "failed":
        return "bg-red-3 text-danger";
      case "pending":
        return "bg-blue-2 text-blue-1";
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
        {status?.toUpperCase()}
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

const PayoutTable = ({
  data,
  currentPage,
  setCurrentPage,
  isAdmin,
  totalPage,
}) => {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);
  const [payout, setPayout] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    if (payout) {
      setIsOpen(true);
    }
  }, [payout]);

  function close() {
    setIsOpen(false);
  }

  const [statuses, setStatuses] = useState();

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await authRequests.put(`/admin/payouts/${id}`, {
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

  const { user } = useSelector((state) => state.auth);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this payout?")) {
      try {
        const response = await authRequests.delete(`/admin/payouts/${id}`);
        toast.success(response.message);
        navigate(0);
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            "An error occurred while deleting the payout"
        );
      }
    }
  };

  useEffect(() => {
    setStatuses(
      data.reduce((acc, row) => ({ ...acc, [row.id]: row.status }), {})
    );
  }, [data]);

  const maskAccountNumber = (number) => {
    return number?.slice(-4).padStart(number.length, "*");
  };

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="tw-relative tw-z-50 tw-focus:outline-none"
        onClose={close}
      >
        <div className="tw-fixed bg-pr tw-inset-0 tw-z-50 tw-w-screen tw-overflow-y-auto tw-mt-20">
          <div className="tw-flex tw-min-h-full tw-items-center tw-justify-center tw-p-4">
            <DialogPanel className="tw-w-full tw-bg-white tw-shadow-lg tw-max-w-3xl tw-rounded-xl tw-p-6 tw-backdrop-blur-2xl">
              <InvoiceComponent payout={payout} />
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <div className="overflow-scroll scroll-bar-1 pt-30">
        <table className="table-2 col-12 tw-text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Amount</th>
              <th>Account Name</th>
              <th>Account Number</th>
              <th>Bank Name</th>
              <th>Status</th>
              <th>Date Created</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="tw-text-center">
                <td>{index + 1}</td>
                <td>{row.amount}</td>
                <td className="fw-500">{row.account_name}</td>
                <td>{maskAccountNumber(row.account_number)}</td>
                <td>{row.bank_name}</td>
                <td>
                  {statusRender(statuses[row.id], isAdmin, (newStatus) =>
                    handleStatusChange(row.id, newStatus)
                  )}
                </td>
                <td>{row.created_at}</td>
                <td>{row.payment_method}</td>
                <td className="tw-flex tw-text-center tw-justify-center tw-align-middle !tw-pr-0">
                  <div
                    title="View Invoice"
                    className="tw-mr-3 tw-cursor-pointer"
                    onClick={() => setPayout(row)}
                  >
                    <RiEyeLine size={20} />
                  </div>
                  {user.type == "admin" && (
                    <div
                      title="View Invoice"
                      className="tw-mr-3 tw-cursor-pointer"
                      onClick={() => handleDelete(row.id)}
                    >
                      <RiDeleteBinLine className="tw-text-red-400" size={20} />
                    </div>
                  )}
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
    </>
  );
};

export default PayoutTable;
