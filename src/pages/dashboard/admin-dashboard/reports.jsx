import React, { useEffect, useState } from "react";

import MetaComponent from "@/components/common/MetaComponent";
import ReportTable from "@/components/tables/report-table";
import { reportData } from "@/data/dummy";
import { authRequests } from "@/utils/http";

const metadata = {
  title: "Reports",
  description: "Reports",
};

export default function AdminReports() {
  const [reports, setReports] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function getRequests() {
      const response = await authRequests.get(
        `/admin/reports?page=${currentPage}`
      );

      console.log(response.data.reports.data);

      setCurrentPage(response.data.reports.current_page);
      setTotalPages(response.data.reports.last_page);
      setReports(response.data.reports.data);
    }

    getRequests();
  }, [currentPage]);

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Reports</h1>
          <div className="text-15 text-light-1">
            Manage Reports On ClickShelter
          </div>
        </div>
        {/* End .col-12 */}
      </div>
      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <div className="d-flex justify-between items-center">
          <h2 className="text-18 lh-1 fw-500">All Reports</h2>
        </div>
        {/* End d-flex */}

        <ReportTable
          isAdmin
          data={reports}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPages}
        />
      </div>
    </>
  );
}
