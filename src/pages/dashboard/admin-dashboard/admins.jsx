import React, { useEffect, useState } from "react";

import MetaComponent from "@/components/common/MetaComponent";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import AdminTable from "@/components/tables/admin-table";
import { adminData } from "@/data/dummy";
import { authRequests } from "@/utils/http";
import { toast } from "react-toastify";

const metadata = {
  title: "Admins",
  description: "Admins",
};

export default function AdminAdmin() {
  let [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    role: "",
    status: "active",
  });

  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await authRequests.get(
          `/admin/admins?page=${currentPage}`
        );

        setUsers(response.data.data);
        setTotalPages(response.data.last_page);
        toast.success(response.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    getUsers();
  }, [currentPage]);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await authRequests.post(`/admin/admins`, formData);
      toast.success(response.message);

      const getAdmins = await authRequests.get(
        `/admin/admins?page=${currentPage}`
      );

      setUsers(getAdmins.data.data);
      setTotalPages(getAdmins.data.last_page);

      close(); // Close the modal after successful submission
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
            <DialogPanel
              transition
              className="tw-w-full tw-bg-white tw-shadow-lg tw-max-w-md tw-rounded-xl tw-p-6 tw-backdrop-blur-2xl tw-duration-300 tw-ease-out data-[closed]:tw-transform-[scale(95%)] data-[closed]:tw-opacity-0"
            >
              <DialogTitle
                as="h3"
                className="tw-text-2xl tw-font-medium tw-text-gray-700 tw-text-center "
                onClick={open}
              >
                Add New Admin
              </DialogTitle>
              <p className="tw-mt-2  tw-text-sm/6 ">
                {errors.length > 0 && (
                  <ul className="tw-text-red-700">
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                )}
                <form className="tw-mt-4" onSubmit={handleAddAdmin}>
                  <div className="tw-grid tw-gap-6 tw-mb-6 tw-md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="role"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Select Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        required
                      >
                        <option value="">Select a role</option>
                        <option value="super">Super Admin</option>
                        <option value="agent">Agent Admin</option>
                        <option value="sales">Sales Admin</option>
                        <option value="admin">Normal Admin</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="status"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Select Status
                      </label>
                      <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        required
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Not Active</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        placeholder="Admin first name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last_name"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        placeholder="Admin last name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        placeholder="Admin email"
                        required
                      />
                    </div>
                  </div>
                  <button
                    disabled={loading}
                    type="submit"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white tw-w-full"
                  >
                    {loading ? "Loading..." : "Add Admin"}
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
          <h1 className="text-30 lh-14 fw-600">Admins</h1>
          <div className="text-15 text-light-1">
            Lorem ipsum dolor sit amet, consectetur.
          </div>
        </div>
        <button
          className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          onClick={open}
        >
          New Admin
        </button>
      </div>
      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <div className="d-flex justify-between items-center">
          <h2 className="text-18 lh-1 fw-500">All Admins</h2>
        </div>
        {/* End d-flex */}

        <AdminTable
          data={users}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPages}
        />
      </div>
    </>
  );
}
