import React, { useEffect, useState } from "react";

import MetaComponent from "@/components/common/MetaComponent";
import UsersTable from "@/components/tables/user-table";
import { userData } from "@/data/dummy";
import { authRequests } from "@/utils/http";
import { toast } from "react-toastify";

const metadata = {
  title: "Users",
  description: "Users",
};

export default function AdminUsers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await authRequests.get(
          `/admin/users?page=${currentPage}`
        );

        setUsers(response.data.data);
        setTotalPages(response.data.last_page);

        console.log(response.data);
      } catch (error) {
        toast.error("Error fetching users");
      }
    }
    getUsers();
  }, [currentPage]);

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Admin Users</h1>
          <div className="text-15 text-light-1">
            Manage Admins On ClickShelter
          </div>
        </div>
        {/* End .col-12 */}
      </div>
      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <div className="d-flex justify-between items-center">
          <h2 className="text-18 lh-1 fw-500">All Users</h2>
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
