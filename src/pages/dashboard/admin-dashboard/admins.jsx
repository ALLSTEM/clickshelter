import React, { useState } from "react";

import MetaComponent from "@/components/common/MetaComponent";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import AdminTable from "@/components/tables/admin-table";
import { adminData } from "@/data/dummy";

const metadata = {
  title: "Admins",
  description: "Admins",
};

export default function AdminAdmin() {
  let [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
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
                <form className="row y-gap-20">
                  <form>
                    <div class="tw-grid tw-gap-6 tw-mb-6 tw-md:grid-cols-2">
                      <div>
                        <label
                          for="role"
                          class="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                        >
                          Select Role
                        </label>
                        <select
                          id="role"
                          class="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                          required
                        >
                          <option value="">Select a role</option>
                          <option value="super">Super Admin</option>
                          <option value="agent">Agent Admin</option>
                          <option value="sales">Sales Admin</option>
                          <option value="normal">Normal Admin 4</option>
                        </select>
                      </div>
                      <div>
                        <label
                          for="status"
                          class="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                        >
                          Select Status
                        </label>
                        <select
                          id="status"
                          class="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                          required
                        >
                          <option value="active">Active</option>
                          <option value="inactive">Not Active</option>
                        </select>
                      </div>

                      <div>
                        <label
                          for="first_name"
                          class="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900 "
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          class="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                          placeholder="Admin first name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="last_name"
                          class="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900 "
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          class="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                          placeholder="Admin last name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          class="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900 "
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          class="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                          placeholder="Admin email"
                          required
                        />
                      </div>
                    </div>

                    {/* <button
                      type="submit"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button> */}
                  </form>

                  {/* End .col */}
                </form>
              </p>
              <div className="tw-mt-4">
                <Button
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  onClick={close}
                >
                  Add Admin
                </Button>
              </div>
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
          data={adminData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
