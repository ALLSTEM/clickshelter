import React from "react";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Admin Messages",
  description: "Admin message center",
};

export default function AdminMessages() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Messages</h1>
        </div>
        {/* End .col-12 */}
      </div>
    </>
  );
}
