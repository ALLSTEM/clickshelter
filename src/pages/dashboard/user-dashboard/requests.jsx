import React, { useState } from "react";

import MetaComponent from "@/components/common/MetaComponent";
import RequestTable from "@/components/tables/request-table";
import { Link } from "react-router-dom";
import { requestData } from "@/data/dummy";

const metadata = {
  title: "User Requests",
  description: "User Requests",
};

export default function UserRequests() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12 justify-between d-flex">
          <div>
            <h1 className="text-30 lh-14 fw-600">Requests</h1>
            <div className="text-15 text-light-1">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
          <Link
            to="/listing"
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          >
            New Request <div className="icon-arrow-top-right ml-15" />
          </Link>
        </div>
        {/* End .col-12 */}
      </div>
      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <div className="d-flex justify-between items-center">
          <h2 className="text-18 lh-1 fw-500">All Your Requests</h2>
        </div>
        {/* End d-flex */}

        <RequestTable
          data={requestData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
