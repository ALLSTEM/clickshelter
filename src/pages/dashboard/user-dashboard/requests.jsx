import React, { useEffect, useState } from "react";

import MetaComponent from "@/components/common/MetaComponent";
import RequestTable from "@/components/tables/request-table";
import { Link } from "react-router-dom";
import { requestData } from "@/data/dummy";
import { authRequests } from "@/utils/http";
import { useSelector } from "react-redux";
import StepperBooking from "@/components/booking-page/stepper-booking";

const metadata = {
  title: "User Requests",
  description: "User Requests",
};

export default function UserRequests() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState([]);

  const data = useSelector((state) => state.auth);

  useEffect(() => {
    async function getRequests() {
      const response = await authRequests.get(
        `/user/requests?user=${data.user.id}&page=${currentPage}`
      );

      setCurrentPage(response.data.current_page);
      setTotalPages(response.data.last_page);
      setRequests(response.data.data);
    }

    getRequests();
  }, [currentPage]);

  return (
    <>
      <MetaComponent meta={metadata} />
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Request
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <StepperBooking />
          </div>
        </div>
      </div>
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12 justify-between d-flex">
          <div>
            <h1 className="text-30 lh-14 fw-600">Requests</h1>
            <div className="text-15 text-light-1">Manage requests</div>
          </div>
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          >
            New Request <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
        {/* End .col-12 */}
      </div>
      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <div className="d-flex justify-between items-center">
          <h2 className="text-18 lh-1 fw-500">All Your Requests</h2>
        </div>
        {/* End d-flex */}

        <RequestTable
          data={requests}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPages}
        />
      </div>
    </>
  );
}
