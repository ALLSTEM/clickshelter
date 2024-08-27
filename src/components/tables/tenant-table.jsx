import React from "react";
import Pagination from "./Pagination";
import { RiChat1Line } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const statusRender = (status) => {
  let el;
  switch (status) {
    case "active":
      el = (
        <div
          className={`rounded-100 py-4 text-center col-12 text-14 fw-500 bg-green-1 text-green-2`}
        >
          {status?.toUpperCase()}
        </div>
      );
      break;
    case "inactive":
      el = (
        <div
          className={`rounded-100 py-4 text-center col-12 text-14 fw-500 bg-red-3 text-danger`}
        >
          {status?.toUpperCase()}
        </div>
      );
      break;

    default:
      el = (
        <div
          className={`rounded-100 py-4 text-center col-12 text-14 fw-500 bg-grey text-grey`}
        >
          {status?.toUpperCase()}
        </div>
      );

      break;
  }

  return el;
};

const TenantTable = ({ data, currentPage, setCurrentPage, totalPage }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="overflow-scroll scroll-bar-1 pt-30">
        <table className="table-2 col-12">
          <thead>
            <tr>
              <th>#</th>
              <th>first_name</th>
              <th>last_name</th>
              <th>email</th>
              <th>phone</th>
              <th>occupation</th>
              <th>space</th>
              <th>status</th>
              <th className="!tw-mr-8">action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.user.first_name}</td>
                <td className="fw-500">{row.user.last_name}</td>
                <td>{row.user.email}</td>
                <td>{row.user.phone ?? "no phone"}</td>
                <td>{row.user.occupation ?? "not provided"}</td>
                <td>{row.space.space_name}</td>
                <td>{statusRender(row.status)}</td>
                <td className="tw-flex tw-text-center tw-justify-center tw-align-middle !tw-pr-0">
                  <div
                    title="Chat Tenant"
                    className="tw-mr-3 tw-cursor-pointer"
                    onClick={() =>
                      navigate(`/dashboard/host/messages?userId=${row.id}`)
                    }
                  >
                    <RiChat1Line size={20} />
                  </div>
                  <div
                    title="Report Tenant"
                    className="tw-cursor-pointer"
                    onClick={() =>
                      navigate(`/dashboard/user/reports?userId=${row.id}`)
                    }
                  >
                    <RiCustomerService2Fill size={20} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {currentPage && setCurrentPage && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
        />
      )}
    </div>
  );
};

export default TenantTable;
