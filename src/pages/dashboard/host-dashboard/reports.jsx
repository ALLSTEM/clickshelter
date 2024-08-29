import React, { useEffect } from "react";

import MetaComponent from "@/components/common/MetaComponent";
import { useState } from "react";
import ReportTable from "@/components/tables/report-table";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useSearchParams } from "react-router-dom";
import { reportData } from "@/data/dummy";
const metadata = {
  title: "Host Reports",
  description: "Host reports",
};

export default function HostReports() {
  const [currentPage, setCurrentPage] = useState(1);
  let [isOpen, setIsOpen] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  const userId = searchParams.get("userId");

  useEffect(() => {
    console.log(userId);
    if (userId) {
      setIsOpen(true);
    }
  }, [userId]);

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
                Add New Report
              </DialogTitle>
              <p className="tw-mt-2  tw-text-sm/6 ">
                <form className="row y-gap-20">
                  <form>
                    <div class="tw-grid tw-gap-6 tw-mb-6 tw-md:grid-cols-2">
                      <div>
                        <label
                          for="property"
                          class="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                        >
                          Select Property
                        </label>
                        <select
                          id="property"
                          class="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                          required
                        >
                          <option value="">Select a property</option>
                          <option value="property_1">Property 1</option>
                          <option value="property_2">Property 2</option>
                          <option value="property_3">Property 3</option>
                          <option value="property_4">Property 4</option>
                          <option value="property_5">Property 5</option>
                        </select>
                      </div>
                      <div>
                        <label
                          for="tenant"
                          class="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                        >
                          Select Tenant
                        </label>
                        <select
                          id="tenant"
                          class="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                          required
                          defaultValue={userId ? userId : false}
                        >
                          <option value="">Select a Tenant</option>
                          <option value="1">tenant 1</option>
                          <option value="2">tenant 2</option>
                          <option value="3">tenant 3</option>
                          <option value="4">tenant 4</option>
                          <option value="5">tenant 5</option>
                        </select>
                      </div>

                      <div>
                        <label
                          for="type"
                          class="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                        >
                          Type Of Report
                        </label>
                        <select
                          id="type"
                          class="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                          placeholder="Title of report"
                          required
                        >
                          <option value="">Select a report type</option>
                          <option value="maintenance">Maintenance</option>
                          <option value="payment">Payment</option>
                          <option value="complaint">Complaint</option>
                          <option value="inspection">Inspection</option>
                          <option value="move_in">Move-In</option>
                          <option value="move_out">Move-Out</option>
                        </select>
                      </div>
                      <div>
                        <label
                          for="first_name"
                          class="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900 "
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          class="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                          placeholder="Title of report"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="details"
                          class="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                        >
                          Details of Report
                        </label>
                        <textarea
                          id="details"
                          class="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                          rows="4"
                          placeholder="Enter details of the report"
                          required
                        ></textarea>
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
                  Add Report
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <MetaComponent meta={metadata} />

      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12 justify-between d-flex">
          <div>
            <h1 className="text-30 lh-14 fw-600">Report</h1>
            <div className="text-15 text-light-1">All your reports</div>
          </div>
          <button
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
            onClick={open}
          >
            New Report
          </button>
        </div>
        {/* End .col-12 */}
      </div>
      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <div className="d-flex justify-between items-center">
          <h2 className="text-18 lh-1 fw-500">All Your Reports</h2>
        </div>
        {/* End d-flex */}

        <ReportTable
          data={reportData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
