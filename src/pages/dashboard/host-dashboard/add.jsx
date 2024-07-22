import React from "react";
import DashboardPage from "../../../components/dashboard/host-dashboard/add-location";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Host Add Location",
  description: "Host adding location",
};

export default function HostAddHouse() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
