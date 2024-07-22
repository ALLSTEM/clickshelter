// import React, { useState } from "react";
// import Pagination from "./Pagination";
// import { RiArrowDownDoubleLine } from "react-icons/ri";
// import {
//   Listbox,
//   ListboxButton,
//   ListboxOption,
//   ListboxOptions,
// } from "@headlessui/react";

// const statusOptions = [
//   "pending",
//   "processing",
//   "accepted",
//   "rejected",
//   "queried",
// ];
// const statusRender = (status, isAdmin, onChange) => {
//   const statusClass = (status) => {
//     switch (status) {
//       case "pending":
//         return "bg-light-2 text-grey";
//       case "processing":
//         return "bg-blue-2 text-blue-1";
//       case "accepted":
//         return "bg-green-1 text-green-2";
//       case "rejected":
//         return "bg-red-3 text-danger";
//       case "queried":
//         return "bg-yellow-4 text-yellow-3";
//       default:
//         return "bg-grey text-grey";
//     }
//   };

//   return isAdmin ? (
//     <Listbox value={status} onChange={onChange}>
//       <ListboxButton
//         className={`tw-text-left rounded-100 py-4 tw-px-2  tw-relative col-12 text-14 fw-500 ${statusClass(
//           status
//         )}`}
//       >
//         {status.toUpperCase()}
//         <RiArrowDownDoubleLine
//           className="tw-group tw-pointer-events-none tw-absolute tw-top-1.5 tw-right-2.5 tw-size-4"
//           aria-hidden="true"
//         />
//       </ListboxButton>
//       <ListboxOptions className="tw-absolute tw-mt-1 tw-p-3  tw-bg-white tw-shadow-md tw-rounded-md tw-z-10">
//         {statusOptions.map((option) => (
//           <ListboxOption
//             key={option}
//             value={option}
//             className={`tw-cursor-pointer tw-rounded-md tw-py-2 tw-mb-3 hover:tw-bg-slate-50 tw-px-4 ${statusClass(
//               option
//             )}`}
//           >
//             {option.toUpperCase()}
//           </ListboxOption>
//         ))}
//       </ListboxOptions>
//     </Listbox>
//   ) : (
//     <div
//       className={`rounded-100 py-4 text-center col-12 text-14 fw-500 ${statusClass(
//         status
//       )}`}
//     >
//       {status.toUpperCase()}
//     </div>
//   );
// };

// const RequestTable = ({ data, currentPage, setCurrentPage, isAdmin }) => {
//   const [statuses, setStatuses] = useState(
//     data.reduce((acc, row) => ({ ...acc, [row.id]: row.status }), {})
//   );
//   const handleStatusChange = (id, newStatus) => {
//     setStatuses((prevStatuses) => ({
//       ...prevStatuses,
//       [id]: newStatus,
//     }));
//     console.log(`Update status for id ${id} to ${newStatus}`);
//   };

//   return (
//     <>
//       <div className="overflow-scroll scroll-bar-1 pt-30">
//         <table className="table-2 col-12 tw-text-center">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Location</th>
//               <th>Duration</th>
//               <th>Move In Date</th>
//               <th>Occupation</th>
//               <th>No of occupants</th>
//               <th>Paid</th>
//               <th>Status</th>
//               <th>Created At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>
//                   {row.country}
//                   <br /> {row.state}
//                 </td>
//                 <td className="fw-500">{row.duration}</td>
//                 <td>{row.move_in_date}</td>
//                 <td>{row.occupation}</td>
//                 <td style={{ textAlign: "center" }}>{row.no_of_occupants}</td>
//                 <td>{row.paid ? "Made Payment" : "No Payment"}</td>
//                 <td>
//                   {statusRender(statuses[row.id], isAdmin, (newStatus) =>
//                     handleStatusChange(row.id, newStatus)
//                   )}
//                 </td>
//                 <td>{row.createdAt}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {currentPage && setCurrentPage && (
//         <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
//       )}
//     </>
//   );
// };

// export default RequestTable;

import React, { useState } from "react";
import Pagination from "./Pagination";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { RiArrowDownDoubleLine } from "react-icons/ri";

const statusOptions = [
  "pending",
  "processing",
  "accepted",
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
      case "accepted":
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

const RequestTable = ({ data, currentPage, setCurrentPage, isAdmin }) => {
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
    <div>
      <div className="overflow-scroll scroll-bar-1 pt-30">
        <table className="table-2 col-12">
          <thead>
            <tr>
              <th>#</th>
              <th>Location</th>
              <th>Duration</th>
              <th>Move In Date</th>
              <th>Occupation</th>
              <th>No of occupants</th>
              <th>Paid</th>
              <th>Status</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>
                  {row.country}
                  <br /> {row.state}
                </td>
                <td className="fw-500">{row.duration}</td>
                <td>{row.move_in_date}</td>
                <td>{row.occupation}</td>
                <td style={{ textAlign: "center" }}>{row.no_of_occupants}</td>
                <td>{row.paid ? "Made Payment" : "No Payment"}</td>
                <td>
                  {statusRender(statuses[row.id], isAdmin, (newStatus) =>
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

export default RequestTable;
