import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import RequestTable from "@/components/tables/request-table";
import { Link } from "react-router-dom";

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

  {
    title: "Message",
    amount: "22,786",
    description: "Total unread messages",
    icon: "/img/dashboard/icons/4.svg",
  },
];

const requests = [
  {
    country: "Canada",
    state: "Toronto",
    duration: "4 months",
    move_in_date: "2nd Jan 2025",
    occupation: "Software Developer",
    no_of_occupants: "3",
    paid: true,
    status: "pending", //processing, accepted, rejected, queried
    createdAt: "04/04/2022 08:16",
  },
  {
    country: "Canada",
    state: "Toronto",
    duration: "4 months",
    move_in_date: "2nd Jan 2025",
    occupation: "Software Developer",
    no_of_occupants: "3",
    paid: false,
    status: "processing", //processing, accepted, rejected, queried
    createdAt: "04/04/2022 08:16",
  },
  {
    country: "Canada",
    state: "Toronto",
    duration: "4 months",
    move_in_date: "2nd Jan 2025",
    occupation: "Software Developer",
    no_of_occupants: "3",
    paid: true,
    status: "accepted", //processing, accepted, rejected, queried
    createdAt: "04/04/2022 08:16",
  },
  {
    country: "Canada",
    state: "Toronto",
    duration: "4 months",
    move_in_date: "2nd Jan 2025",
    occupation: "Software Developer",
    no_of_occupants: "3",
    paid: true,
    status: "rejected", //processing, accepted, rejected, queried
    createdAt: "04/04/2022 08:16",
  },
  {
    country: "Canada",
    state: "Toronto",
    duration: "4 months",
    move_in_date: "2nd Jan 2025",
    occupation: "Software Developer",
    no_of_occupants: "3",
    paid: false,
    status: "queried", //processing, accepted, rejected, queried
    createdAt: "04/04/2022 08:16",
  },
];

export default function UserDashboard() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Dashboard</h1>
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
              <div key={index} className="col-xl-4 col-md-6">
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
                      <img src={item.icon} alt="icon" />
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

            <RequestTable data={requests} />
          </div>
          {/* End py-30 */}
        </div>
      </div>
    </>
  );
}
