// import React, { useEffect, useState } from "react";

// import MetaComponent from "@/components/common/MetaComponent";
// import PayoutTable from "@/components/tables/payout-table";
// import { payoutData } from "@/data/dummy";
// import { authRequests } from "@/utils/http";
// import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

// const metadata = {
//   title: "Admin Payouts",
//   description: "Admin Payouts",
// };

// export default function AdminPayouts() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);

//   const [payouts, setPayouts] = useState([]);

//   function open() {
//     setIsOpen(true);
//   }

//   function close() {
//     setIsOpen(false);
//   }

//   useEffect(() => {
//     async function getPayouts() {
//       try {
//         const response = await authRequests.get(
//           `/admin/payouts?page=${currentPage}`
//         );

//         setPayouts(response.data.data);
//         setTotalPages(response.data.last_page);

//         console.log(response.data);
//       } catch (error) {
//         toast.error("Error fetching payouts");
//       }
//     }
//     getPayouts();
//   }, [currentPage]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleAddAdmin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrors([]);
//     try {
//       const response = await authRequests.post(`/admin/admins`, formData);
//       toast.success(response.message);

//       const getAdmins = await authRequests.get(
//         `/admin/admins?page=${currentPage}`
//       );

//       setUsers(getAdmins.data.data);
//       setTotalPages(getAdmins.data.last_page);

//       setErrors([]);
//       close(); // Close the modal after successful submission
//     } catch (error) {
//       if (error.response.data.errors) {
//         const errorMessages = [];
//         for (const key in error.response.data.errors) {
//           if (error.response.data.errors.hasOwnProperty(key)) {
//             errorMessages.push(...error.response.data.errors[key]);
//           }
//         }
//         setErrors(errorMessages);
//       } else {
//         setErrors([error.response.data.message]);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//      <Dialog
//         open={isOpen}
//         as="div"
//         className="tw-relative tw-z-10 tw-focus:outline-none"
//         onClose={close}
//       >
//         <div className="tw-fixed bg-pr tw-inset-0 tw-z-10 tw-w-screen tw-overflow-y-auto">
//           <div className="tw-flex tw-min-h-full tw-items-center tw-justify-center tw-p-4">
//             <DialogPanel
//               transition
//               className="tw-w-full tw-bg-white tw-shadow-lg tw-max-w-md tw-rounded-xl tw-p-6 tw-backdrop-blur-2xl tw-duration-300 tw-ease-out data-[closed]:tw-transform-[scale(95%)] data-[closed]:tw-opacity-0"
//             >
//               <DialogTitle
//                 as="h3"
//                 className="tw-text-2xl tw-font-medium tw-text-gray-700 tw-text-center "
//                 onClick={open}
//               >
//                 Add New Payout
//               </DialogTitle>
//               <p className="tw-mt-2  tw-text-sm/6 ">
//                 {errors.length > 0 && (
//                   <ul className="tw-text-red-700">
//                     {errors.map((error, index) => (
//                       <li key={index}>{error}</li>
//                     ))}
//                   </ul>
//                 )}
//                 <form className="tw-mt-4" onSubmit={handleAddAdmin}>
//                   <div className="tw-grid tw-gap-6 tw-mb-6 tw-md:grid-cols-2">
//                     <div>
//                       <label
//                         htmlFor="role"
//                         className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
//                       >
//                         Select Role
//                       </label>
//                       <select
//                         id="role"
//                         name="role"
//                         value={formData.role}
//                         onChange={handleInputChange}
//                         className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
//                         required
//                       >
//                         <option value="">Select a role</option>
//                         <option value="super">Super Admin</option>
//                         <option value="agent">Agent Admin</option>
//                         <option value="sales">Sales Admin</option>
//                         <option value="admin">Normal Admin</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="status"
//                         className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
//                       >
//                         Select Status
//                       </label>
//                       <select
//                         id="status"
//                         name="status"
//                         value={formData.status}
//                         onChange={handleInputChange}
//                         className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
//                         required
//                       >
//                         <option value="active">Active</option>
//                         <option value="inactive">Not Active</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="first_name"
//                         className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
//                       >
//                         First Name
//                       </label>
//                       <input
//                         type="text"
//                         id="first_name"
//                         name="first_name"
//                         value={formData.first_name}
//                         onChange={handleInputChange}
//                         className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
//                         placeholder="Admin first name"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="last_name"
//                         className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
//                       >
//                         Last Name
//                       </label>
//                       <input
//                         type="text"
//                         id="last_name"
//                         name="last_name"
//                         value={formData.last_name}
//                         onChange={handleInputChange}
//                         className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
//                         placeholder="Admin last name"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
//                       >
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
//                         placeholder="Admin email"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <button
//                     disabled={loading}
//                     type="submit"
//                     className="button h-50 px-24 -dark-1 bg-blue-1 text-white tw-w-full"
//                   >
//                     {loading ? "Loading..." : "Add Admin"}
//                   </button>
//                 </form>
//               </p>
//             </DialogPanel>
//           </div>
//         </div>
//       </Dialog>
//       <MetaComponent meta={metadata} />
//       {/* <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
//         <div className="col-12">
//           <h1 className="text-30 lh-14 fw-600">Admin Payouts</h1>
//           <div className="text-15 text-light-1">
//             Manage Payouts On ClickShelter
//           </div>
//         </div>

//       </div> */}

//       <div className="col-12 justify-between d-flex">
//         <div>
//           <h1 className="text-30 lh-14 fw-600">Admin Payouts</h1>
//           <div className="text-15 text-light-1">
//             Manage Payouts On ClickShelter
//           </div>
//         </div>
//         <button
//           className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
//           onClick={open}
//         >
//           New Admin
//         </button>
//       </div>

//       <div className="py-30 px-30 rounded-4 bg-white shadow-3">
//         <div className="d-flex justify-between items-center">
//           <h2 className="text-18 lh-1 fw-500">All Payouts</h2>
//         </div>
//         {/* End d-flex */}

//         <PayoutTable
//           isAdmin
//           data={payouts}
//           currentPage={currentPage}
//           setCurrentPage={setCurrentPage}
//           totalPage={totalPages}
//         />
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import MetaComponent from "@/components/common/MetaComponent";
import PayoutTable from "@/components/tables/payout-table";
import { authRequests } from "@/utils/http";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const metadata = {
  title: "Admin Payouts",
  description: "Admin Payouts",
};

export default function AdminPayouts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [payouts, setPayouts] = useState([]);
  const [hosts, setHosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
    user_id: "",
    amount: "",
    date: "",
    account_name: "",
    account_number: "",
    bank_name: "",
    currency: "USD",
    fee: "",
    payment_method: "",
    reference: "",
    notes: "",
  });

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  useEffect(() => {
    async function getPayouts() {
      try {
        const response = await authRequests.get(
          `/admin/payouts?page=${currentPage}`
        );
        setPayouts(response.data.data);
        setTotalPages(response.data.last_page);
      } catch (error) {
        toast.error("Error fetching payouts");
      }
    }
    getPayouts();
  }, [currentPage]);

  useEffect(() => {
    async function getHosts() {
      try {
        const response = await authRequests.get(
          `/admin/users/hosts?page=${currentPage}`
        );
        setHosts(response.data.data);
      } catch (error) {
        toast.error("Error fetching hosts");
      }
    }
    getHosts();
  }, [currentPage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddPayout = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    try {
      const response = await authRequests.post(`/admin/payouts`, formData);
      toast.success(response.message);

      const getPayouts = await authRequests.get(
        `/admin/payouts?page=${currentPage}`
      );

      setPayouts(getPayouts.data.data);
      setTotalPages(getPayouts.data.last_page);

      setErrors([]);
      close();
    } catch (error) {
      if (error.response.data.errors) {
        const errorMessages = [];
        for (const key in error.response.data.errors) {
          if (error.response.data.errors.hasOwnProperty(key)) {
            errorMessages.push(...error.response.data.errors[key]);
          }
        }
        setErrors(errorMessages);
      } else {
        setErrors([error.response.data.message]);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="tw-relative tw-z-10 tw-focus:outline-none"
        onClose={close}
      >
        <div className="tw-fixed bg-pr tw-inset-0 tw-z-10 tw-w-screen tw-overflow-y-auto">
          <div className="tw-flex tw-min-h-full tw-items-center tw-justify-center tw-p-4">
            <DialogPanel className="tw-w-full tw-bg-white tw-shadow-lg tw-max-w-md tw-rounded-xl tw-p-6 tw-backdrop-blur-2xl tw-duration-300 tw-ease-out data-[closed]:tw-transform-[scale(95%)] data-[closed]:tw-opacity-0">
              <DialogTitle
                as="h3"
                className="tw-text-2xl tw-font-medium tw-text-gray-700 tw-text-center"
              >
                Add New Payout
              </DialogTitle>
              <p className="tw-mt-2 tw-text-sm/6">
                {errors.length > 0 && (
                  <ul className="tw-text-red-700">
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                )}
                <form className="tw-mt-4" onSubmit={handleAddPayout}>
                  <div className="tw-grid tw-gap-6 tw-mb-6 tw-md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="user_id"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Select Host
                      </label>
                      <select
                        id="user_id"
                        name="user_id"
                        value={formData.user_id}
                        onChange={handleInputChange}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        required
                      >
                        <option value="">Select a host</option>
                        {hosts.map((host) => (
                          <option key={host.id} value={host.id}>
                            {host.first_name} {host.last_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="amount"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Amount
                      </label>
                      <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        placeholder="Enter amount"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="date"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="account_name"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Account Name
                      </label>
                      <input
                        type="text"
                        id="account_name"
                        name="account_name"
                        value={formData.account_name}
                        onChange={handleInputChange}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        placeholder="Enter account name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="account_number"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Account Number
                      </label>
                      <input
                        type="text"
                        id="account_number"
                        name="account_number"
                        value={formData.account_number}
                        onChange={handleInputChange}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        placeholder="Enter account number"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="bank_name"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Bank Name
                      </label>
                      <input
                        type="text"
                        id="bank_name"
                        name="bank_name"
                        value={formData.bank_name}
                        onChange={handleInputChange}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        placeholder="Enter bank name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="fee"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Fee
                      </label>
                      <input
                        type="number"
                        id="fee"
                        name="fee"
                        value={formData.fee}
                        onChange={handleInputChange}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        placeholder="Enter fee"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="payment_method"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Payment Method
                      </label>
                      <select
                        id="payment_method"
                        name="payment_method"
                        value={formData.payment_method}
                        onChange={handleInputChange}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        required
                      >
                        <option value="">Select payment method</option>
                        <option value="bank transfer">Bank Transfer</option>
                        <option value="PayPal">PayPal</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="notes"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Notes
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        placeholder="Enter notes (optional)"
                      />
                    </div>
                  </div>
                  <button
                    disabled={loading}
                    type="submit"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white tw-w-full"
                  >
                    {loading ? "Processing..." : "Add Payout"}
                  </button>
                </form>
              </p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <MetaComponent meta={metadata} />

      <div className="col-12 justify-between d-flex">
        <div>
          <h1 className="text-30 lh-14 fw-600">Admin Payouts</h1>
          <div className="text-15 text-light-1">
            Manage Payouts On ClickShelter
          </div>
        </div>
        <button
          className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          onClick={open}
        >
          New Payout
        </button>
      </div>

      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <div className="d-flex justify-between items-center">
          <h2 className="text-18 lh-1 fw-500">All Payouts</h2>
        </div>

        <PayoutTable
          isAdmin
          data={payouts}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPages}
        />
      </div>
    </>
  );
}
