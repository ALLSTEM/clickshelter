import React, { useState } from "react";
import Pagination from "./Pagination";
import { RiArrowDownDoubleLine, RiEyeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useEffect } from "react";
import InvoiceComponent from "../invoice/Invoice";

const statusOptions = ["sent", "rejected", "processing"];

const statusRender = (status, isAdmin, onChange) => {
  const statusClass = (status) => {
    switch (status) {
      case "sent":
        return "bg-green-1 text-green-2";
      case "rejected":
        return "bg-red-3 text-danger";
      case "processing":
        return "bg-blue-2 text-blue-1";
      default:
        return "bg-grey text-grey";
    }
  };

  return isAdmin ? (
    <Listbox value={status} onChange={onChange}>
      <ListboxButton
        className={`tw-text-left rounded-100 py-4 tw-px-2  tw-relative col-12 text-14 fw-500 ${statusClass(
          status
        )}`}
      >
        {status.toUpperCase()}
        <RiArrowDownDoubleLine
          className="tw-group tw-pointer-events-none tw-absolute tw-top-1.5 tw-right-2.5 tw-size-4"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions className="tw-absolute tw-mt-1 tw-p-3  tw-bg-white tw-shadow-md tw-rounded-md tw-z-10">
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
      {status.toUpperCase()}
    </div>
  );
};

const PayoutTable = ({ data, currentPage, setCurrentPage, isAdmin }) => {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);
  const [payout, setPayout] = useState();

  useEffect(() => {
    if (payout) {
      setIsOpen(true);
    }
  }, [payout]);

  function close() {
    setIsOpen(false);
  }

  const [statuses, setStatuses] = useState(
    data.reduce((acc, row) => ({ ...acc, [row.id]: row.status }), {})
  );

  const handleStatusChange = (id, newStatus) => {
    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      [id]: newStatus,
    }));
    // Add logic to update status in backend or state management
    console.log(`Update status for id ${id} to ${newStatus}`);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="tw-relative tw-z-50 tw-focus:outline-none "
        onClose={close}
      >
        <div className="tw-fixed bg-pr tw-inset-0 tw-z-50 tw-w-screen tw-overflow-y-auto tw-mt-20">
          <div className="tw-flex tw-min-h-full tw-items-center tw-justify-center tw-p-4">
            <DialogPanel
              transition
              className="tw-w-full tw-bg-white tw-shadow-lg tw-max-w-3xl tw-rounded-xl tw-p-6 tw-backdrop-blur-2xl tw-duration-300 tw-ease-out data-[closed]:tw-transform-[scale(95%)] data-[closed]:tw-opacity-0"
            >
              <InvoiceComponent />
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
              <th>Property</th>
              <th>Status</th>
              <th>Date Created</th>
              <th
                style={{
                  textAlign: "center",
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="tw-text-center">
                <td>{index + 1}</td>
                <td>{row.amount}</td>
                <td className="fw-500">{row.property}</td>
                <td>
                  {statusRender(statuses[row.id], isAdmin, (newStatus) =>
                    handleStatusChange(row.id, newStatus)
                  )}
                </td>
                <td>{row.createdAt}</td>
                <td className="tw-flex tw-text-center tw-justify-center tw-align-middle !tw-pr-0">
                  <div
                    title="View Invoice"
                    className="tw-mr-3 tw-cursor-pointer"
                    onClick={() => setPayout(row.id)}
                  >
                    <RiEyeLine size={20} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {currentPage && setCurrentPage && (
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </>
  );
};

export default PayoutTable;
