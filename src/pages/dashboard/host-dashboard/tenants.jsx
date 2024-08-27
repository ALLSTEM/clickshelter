import React, { useEffect, useState } from "react";

import MetaComponent from "@/components/common/MetaComponent";
import TenantTable from "@/components/tables/tenant-table";
import { authRequests } from "@/utils/http";

const metadata = {
  title: "Host Tenants",
  description: "Host Tenants",
};

const users = [
  {
    id: 1,
    first_name: "Lekan",
    last_name: "Kodunmi",
    email: "lekan@jdjd.com",
    phone: "07031737373",
    space: "Lake views apartments",
    status: "active",
    occupation: "Banker",
  },
  {
    id: 2,
    first_name: "Lekan",
    last_name: "Kodunmi",
    email: "lekan@jdjd.com",
    phone: "07031737373",
    space: "Lake views apartments",
    status: "active",
    occupation: "Software Engineer",
  },
  {
    id: 3,
    first_name: "Lekan",
    last_name: "Kodunmi",
    email: "lekan@jdjd.com",
    phone: "07031737373",
    space: "Lake views apartments",
    status: "active",
    occupation: "Banker",
  },
  {
    id: 4,
    first_name: "Lekan",
    last_name: "Kodunmi",
    email: "lekan@jdjd.com",
    phone: "07031737373",
    space: "Lake views apartments",
    status: "active",
    occupation: "Software Engineer",
  },
  {
    id: 5,
    first_name: "Lekan",
    last_name: "Kodunmi",
    email: "lekan@jdjd.com",
    phone: "07031737373",
    space: "Lake views apartments",
    status: "active",
    occupation: "Banker",
  },
];

export default function HostTenants() {
  const [currentPage, setCurrentPage] = useState(1);
  const [spaces, setSpaces] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function getTenants() {
      try {
        const response = await authRequests.get(`/host/spaces/tenants`);
        setSpaces(response.data.data);
        setTotalPages(response.data.last_page);
      } catch (error) {
        console.error("Error fetching spaces:", error);
      }
    }
    getTenants();
  }, []);
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Tenants</h1>
          <div className="text-15 text-light-1">
            Lorem ipsum dolor sit amet, consectetur.
          </div>
        </div>
        {/* End .col-12 */}
      </div>
      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <div className="d-flex justify-between items-center">
          <h2 className="text-18 lh-1 fw-500">All Your Tenants</h2>
        </div>
        {/* End d-flex */}

        <TenantTable
          data={spaces}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPages}
        />
      </div>
    </>
  );
}
