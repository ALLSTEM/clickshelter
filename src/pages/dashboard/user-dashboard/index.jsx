import React, { useEffect, useState } from "react";

import MetaComponent from "@/components/common/MetaComponent";
import RequestTable from "@/components/tables/request-table";
import { Link } from "react-router-dom";
import { requestData } from "@/data/dummy";
import { toast } from "react-toastify";
import { authRequests } from "@/utils/http";

const metadata = {
  title: "User Dashboard",
  description: "User dashboard",
};

const data = [
  {
    title: "Request",
    amount: "12",
    description: "Total requests",
    icon: "/img/dashboard/sidebar/house.svg",
  },
  {
    title: "Report",
    amount: "30",
    description: "Total report",
    icon: "/img/featureIcons/1/3.svg",
  },
];

export default function UserDashboard() {
  const [analytics, setAnalytics] = useState();

  useEffect(() => {
    async function getAnalytics() {
      try {
        const response = await authRequests.get(`/user/analytics`);

        setAnalytics(response.data);

        console.log(response.data);
      } catch (error) {
        toast.error("Error fetching analytics");
      }
    }

    getAnalytics();
  }, []);

  const getCount = (title) => {
    console.log(title);

    let count;
    switch (title) {
      case "Report":
        count = analytics?.total_report;
        break;

      case "Request":
        count = analytics?.total_request;
        break;

      default:
        count = 0;
        break;
    }

    return count;
  };

  return (
    <div className="tw-h-screen">
      <MetaComponent meta={metadata} />
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32 ">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Dashboard</h1>
          <div className="text-15 text-light-1">Welcome to your dashboard</div>
        </div>
        {/* End .col-12 */}
      </div>

      <div className="row y-gap-30 pt-20 chart_responsive ">
        <div className="col-xl-7 col-md-6">
          <div className="row y-gap-30">
            {data.map((item, index) => (
              <div key={index} className="col-xl-6 col-md-6">
                <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                  <div className="row y-gap-20 justify-between items-center">
                    <div className="col-auto">
                      <div className="fw-500 lh-14">{item.title}</div>
                      <div className="text-26 lh-16 fw-600 mt-5">
                        {getCount(item.title)}
                      </div>
                      <div className="text-15 lh-14 text-light-1 mt-5">
                        {item.description}
                      </div>
                    </div>
                    <div className="col-auto">
                      <img src={item.icon} alt="icon" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="col-xl-5 col-md-6">
          <div className="py-30 px-30 rounded-4 bg-white shadow-3">
            <div className="d-flex justify-between items-center">
              <h2 className="text-18 lh-1 fw-500">Recent Requests</h2>
              <div>
                <Link
                  to="requests"
                  className="text-14 text-blue-1 fw-500 underline"
                >
                  View All
                </Link>
              </div>
            </div>
            

            <RequestTable data={requestData} />
          </div>
          
        </div> */}
      </div>
    </div>
  );
}
