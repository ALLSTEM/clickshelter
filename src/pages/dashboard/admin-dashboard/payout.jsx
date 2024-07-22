import React, { useState } from "react";

import MetaComponent from "@/components/common/MetaComponent";
import PayoutTable from "@/components/tables/payout-table";
import { payoutData } from "@/data/dummy";

const metadata = {
  title: "Admin Payouts",
  description: "Admin Payouts",
};

export default function AdminPayouts() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Admin Payouts</h1>
          <div className="text-15 text-light-1">
            Lorem ipsum dolor sit amet, consectetur.
          </div>
        </div>
        {/* End .col-12 */}
      </div>

      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <div className="d-flex justify-between items-center">
          <h2 className="text-18 lh-1 fw-500">All Payouts</h2>
        </div>
        {/* End d-flex */}

        <PayoutTable
          isAdmin
          data={payoutData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
