import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

import MetaComponent from "@/components/common/MetaComponent";
import ReportTable from "@/components/tables/report-table";
import { reportData } from "@/data/dummy";
import { useSelector } from "react-redux";
import { authRequests } from "@/utils/http";
import { toast } from "react-toastify";

const metadata = {
  title: "User Reports",
  description: "User reports",
};

export default function UserReports() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  let [isOpen, setIsOpen] = useState(false);

  const [property, setProperty] = useState("");
  const [reportType, setReportType] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const [reports, setReports] = useState([]);

  const [spaces, setSpaces] = useState([]);

  const data = useSelector((state) => state.auth);

  useEffect(() => {
    async function getRequests() {
      const response = await authRequests.get(
        `/user/reports?user=${data.user.id}&page=${currentPage}`
      );

      console.log(response.data.reports.data);

      setCurrentPage(response.data.reports.current_page);
      setTotalPages(response.data.reports.last_page);
      setReports(response.data.reports.data);
      setSpaces(response.data.spaces);
    }

    getRequests();
  }, [currentPage]);

  async function addReport(e) {
    e.preventDefault();

    try {
      const data = {
        space_id: property,
        type: reportType,
        title: title,
        details: details,
      };

      const resp = await authRequests.post(`/user/reports`, data);

      toast.success(resp.message);

      setProperty("");
      setReportType("");
      setTitle("");
      setDetails("");

      setIsOpen(false);

      console.log(resp.data); // Log response data for debugging
    } catch (error) {
      console.error(error);

      toast.error("An error occurred, check fields and try again");
    }
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
              >
                Add New Report
              </DialogTitle>
              <p className="tw-mt-2  tw-text-sm/6 ">
                <form onSubmit={addReport} className="row y-gap-20">
                  <div className="tw-grid tw-gap-6 tw-mb-6 tw-md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="property"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Select Property
                      </label>
                      <select
                        id="property"
                        value={property}
                        onChange={(e) => setProperty(e.target.value)}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        required
                      >
                        <option value="">Select a property</option>
                        {spaces.map((space) => (
                          <option key={space.id} value={space.id}>
                            {space.space_name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="type"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Type Of Report
                      </label>
                      <select
                        id="type"
                        value={reportType}
                        onChange={(e) => setReportType(e.target.value)}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
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
                        htmlFor="title"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        placeholder="Title of report"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="details"
                        className="block tw-mb-2 tw-text-sm tw-font-medium text-gray-900"
                      >
                        Details of Report
                      </label>
                      <textarea
                        id="details"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="border tw-text-sm tw-rounded-lg tw-focus:ring-blue-500 tw-focus:border-blue-500 tw-block tw-w-full tw-p-2.5"
                        rows="4"
                        placeholder="Enter details of the report"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-w-full tw-px-5 tw-py-2.5 tw-text-center"
                  >
                    Submit
                  </button>
                </form>
              </p>
              {/* <div className="tw-mt-4">
                <Button
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  type="submit"
                >
                  Add Report
                </Button>
              </div> */}
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <MetaComponent meta={metadata} />

      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12 justify-between d-flex">
          <div>
            <h1 className="text-30 lh-14 fw-600">Report</h1>
            <div className="text-15 text-light-1">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
          <button
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
            onClick={open}
          >
            New Report <div className="icon-arrow-top-right ml-15" />
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
          data={reports}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPages}
        />
      </div>
    </>
  );
}
