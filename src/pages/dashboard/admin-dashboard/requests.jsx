import React, { useEffect, useState } from "react";

import MetaComponent from "@/components/common/MetaComponent";
import RequestTable from "@/components/tables/request-table";
import { authRequests } from "@/utils/http";

const metadata = {
  title: "Requests",
  description: "Requests",
};

export default function AdminRequests() {
  // State management for all requests
  const [requests, setRequests] = useState([]);
  const [requestsCurrentPage, setRequestsCurrentPage] = useState(1);
  const [requestsTotalPages, setRequestsTotalPages] = useState(0);

  // State management for open requests
  const [openRequests, setOpenRequests] = useState([]);
  const [openCurrentPage, setOpenCurrentPage] = useState(1);
  const [openTotalPages, setOpenTotalPages] = useState(0);

  // State management for assigned requests
  const [assignedRequests, setAssignedRequests] = useState([]);
  const [assignedCurrentPage, setAssignedCurrentPage] = useState(1);
  const [assignedTotalPages, setAssignedTotalPages] = useState(0);

  useEffect(() => {
    async function getRequests() {
      try {
        // Fetch all requests
        const response = await authRequests.get(
          `/admin/requests?page=${requestsCurrentPage}`
        );
        setRequests(response.data.data);
        setRequestsCurrentPage(response.data.current_page);
        setRequestsTotalPages(response.data.last_page);

        // Fetch open requests
        const responseOpen = await authRequests.get(
          `/admin/requests?page=${openCurrentPage}&assignment=not_assigned`
        );
        setOpenRequests(responseOpen.data.data);
        setOpenCurrentPage(responseOpen.data.current_page);
        setOpenTotalPages(responseOpen.data.last_page);

        // Fetch assigned requests
        const responseAssign = await authRequests.get(
          `/admin/requests?page=${assignedCurrentPage}&assignment=assigned`
        );
        setAssignedRequests(responseAssign.data.data);
        setAssignedCurrentPage(responseAssign.data.current_page);
        setAssignedTotalPages(responseAssign.data.last_page);
      } catch (error) {
        console.error("Failed to fetch requests:", error);
      }
    }

    getRequests();
  }, [requestsCurrentPage, openCurrentPage, assignedCurrentPage]);

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Requests</h1>
          <div className="text-15 text-light-1">
            Lorem ipsum dolor sit amet, consectetur.
          </div>
        </div>
      </div>

      <div className="py-30 px-30 rounded-4 bg-white tw-mt-5 shadow-3">
        <div className="d-flex justify-between items-center">
          <h2 className="text-18 lh-1 fw-500">Open Requests</h2>
        </div>
        <RequestTable
          isAdmin
          data={openRequests}
          currentPage={openCurrentPage}
          setCurrentPage={setOpenCurrentPage}
          totalPage={openTotalPages}
        />
      </div>
      <div className="py-30 px-30 rounded-4 bg-white tw-mt-5 shadow-3">
        <div className="d-flex justify-between items-center">
          <h2 className="text-18 lh-1 fw-500">Assigned Requests</h2>
        </div>
        <RequestTable
          isAdmin
          data={assignedRequests}
          currentPage={assignedCurrentPage}
          setCurrentPage={setAssignedCurrentPage}
          totalPage={assignedTotalPages}
        />
      </div>
      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <div className="d-flex justify-between items-center">
          <h2 className="text-18 lh-1 fw-500">All Requests</h2>
        </div>
        <RequestTable
          isAdmin
          data={requests}
          currentPage={requestsCurrentPage}
          setCurrentPage={setRequestsCurrentPage}
          totalPage={requestsTotalPages}
        />
      </div>
    </>
  );
}
