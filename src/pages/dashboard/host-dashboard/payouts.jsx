import React, { useEffect, useState } from "react";

import MetaComponent from "@/components/common/MetaComponent";
import PayoutTable from "@/components/tables/payout-table";
import { payoutData } from "@/data/dummy";
import { authRequests } from "@/utils/http";
import { toast } from "react-toastify";

const metadata = {
  title: "Host Payout",
  description: "Host payout",
};

export default function HostPayout() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [payouts, setPayouts] = useState([]);

  useEffect(() => {
    async function getPayouts() {
      try {
        const response = await authRequests.get(
          `/host/payouts?page=${currentPage}`
        );

        setPayouts(response.data.data);
        setTotalPages(response.data.last_page);

        console.log(response.data);
      } catch (error) {
        toast.error("Error fetching payouts");
      }
    }
    getPayouts();
  }, [currentPage]);

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Payout</h1>
          <div className="text-15 text-light-1">All your payouts</div>
        </div>
        {/* End .col-12 */}
      </div>
      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <div className="d-flex justify-between items-center">
          <h2 className="text-18 lh-1 fw-500">All Your Payouts</h2>
        </div>
        {/* End d-flex */}

        <PayoutTable
          data={payouts}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPages}
        />
      </div>
    </>
  );
}
