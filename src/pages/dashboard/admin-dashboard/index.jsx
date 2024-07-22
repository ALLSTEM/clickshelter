import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import { Link } from "react-router-dom";
import RequestTable from "@/components/tables/request-table";
import PayoutTable from "@/components/tables/payout-table";
import { payoutData, requestData } from "@/data/dummy";

const metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const data = [
  {
    title: "Requests",
    amount: "1200",
    description: "Total requests",
    icon: "/img/dashboard/sidebar/house.svg",
  },
  {
    title: "Reports",
    amount: "300",
    description: "Total report",
    icon: "/img/featureIcons/1/3.svg",
  },

  {
    title: "Hosts",
    amount: "200",
    description: "Total unread messages",
    icon: "/img/dashboard/icons/4.svg",
  },
  {
    title: "Users",
    amount: "22",
    description: "Total tenants",
    icon: "/img/dashboard/sidebar/booking.svg",
  },
];

export default function AdminDashboard() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Admin Dashboard</h1>
          <div className="text-15 text-light-1">
            Lorem ipsum dolor sit amet, consectetur.
          </div>
        </div>
        {/* End .col-12 */}
      </div>
      <div className="row y-gap-30 pt-20 chart_responsive">
        <div className="col-xl-7 col-md-6">
          <div className="row y-gap-30">
            {data.map((item, index) => (
              <div key={index} className="col-xl-3 col-md-6">
                <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                  <div className="row y-gap-20 justify-between items-center">
                    <div className="col-auto">
                      <div className="fw-500 lh-14">{item.title}</div>
                      <div className="text-26 lh-16 fw-600 mt-5">
                        {item.amount}
                      </div>
                      <div className="text-15 lh-14 text-light-1 mt-5">
                        {item.description}
                      </div>
                    </div>
                    <div className="col-auto">
                      <img
                        height="20px"
                        width="60px"
                        src={item.icon}
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-xl-5 col-md-6">
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
            {/* End d-flex */}

            <RequestTable isAdmin data={requestData} />
          </div>
          {/* End py-30 */}
        </div>
        <div className="col-xl-5 col-md-6">
          <div className="py-30 px-30 rounded-4 bg-white shadow-3">
            <div className="d-flex justify-between items-center">
              <h2 className="text-18 lh-1 fw-500">Recent Payout</h2>
              <div>
                <Link
                  to="payouts"
                  className="text-14 text-blue-1 fw-500 underline"
                >
                  View All
                </Link>
              </div>
            </div>
            {/* End d-flex */}

            <PayoutTable isAdmin={true} data={payoutData} />
          </div>
          {/* End py-30 */}
        </div>
      </div>
    </>
  );
}
