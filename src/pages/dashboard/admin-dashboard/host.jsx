import React, { useEffect, useState } from "react";

import MetaComponent from "@/components/common/MetaComponent";
import UsersTable from "@/components/tables/user-table";
import { userData } from "@/data/dummy";
import { authRequests } from "@/utils/http";
import NotAuthorized from "@/components/common/401";

const metadata = {
  title: "Hosts",
  description: "Hosts",
};

export default function AdminHosts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await authRequests.get(
          `/admin/users/hosts?page=${currentPage}`
        );

        setUsers(response.data.data);
        setTotalPages(response.data.last_page);

        console.log(response.data.last_page);
      } catch (error) {
        toast.error("Error fetching users");
      }
    }
    getUsers();
  }, [currentPage]);

  // if (!["super", "admin"].includes(user.role)) {
  //   return <NotAuthorized />;
  // }

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Hosts</h1>
          <div className="text-15 text-light-1">
            Manage host on ClickShelter
          </div>
        </div>
        {/* End .col-12 */}
      </div>
      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <div className="d-flex justify-between items-center">
          <h2 className="text-18 lh-1 fw-500">All Hosts</h2>
        </div>
        {/* End d-flex */}

        <UsersTable
          data={users}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPages}
        />
      </div>
    </>
  );
}
