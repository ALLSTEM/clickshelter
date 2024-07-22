// import React from "react";

// import MetaComponent from "@/components/common/MetaComponent";
// import { hotelsData } from "@/data/hotels";

// const metadata = {
//   title: "Spaces",
//   description: "Spaces",
// };

// const item = {
//   id: 1,
//   tag: "Breakfast Included",
//   slideImg: ["/img/hotels/1.png"],
//   img: "/img/hotels/1.png",
//   title: "The Montcalm At Brewery London City",
//   location: "Westminster Borough, London",
//   ratings: "4.7",
//   numberOfReviews: "3014",
//   price: "72",
//   delayAnimation: "100",
//   city: "uk",
//   category: "hotel",
// };

// export default function SingleSpace() {
//   return (
//     <>
//       <MetaComponent meta={metadata} />
//       <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
//         <div className="col-12">
//           <h1 className="text-30 lh-14 fw-600">1 bedroom seater</h1>
//           <div className="text-15 text-light-1">Toronto Canada</div>
//         </div>
//         {/* End .col-12 */}
//       </div>
//       <div className="tw-bg-white tw-p-10">
//         <div className="col-12 [&:not(:last-child)]:tw-border-b-2 tw-py-3">
//           <div className="row x-gap-20 y-gap-30">
//             <div className="col-md-auto">
//               <div className="cardImage ratio ratio-1:1 w-200 md:w-1/1 rounded-4">
//                 <div className="cardImage__content">
//                   <img
//                     className="rounded-4 col-12 js-lazy"
//                     src={item.img}
//                     alt="image"
//                   />
//                 </div>
//               </div>
//             </div>
//             {/* End col */}

//             <div className="col-md">
//               <h3 className="text-18 lh-14 fw-500">{item?.title}</h3>

//               <div className="row x-gap-10 y-gap-10 items-center pt-20">
//                 <div className="col-auto">
//                   <p className="text-14">
//                     Westminster Borough, London
//                     <button
//                       data-x-click="mapFilter"
//                       className="text-blue-1 underline ml-10"
//                     >
//                       Show on map
//                     </button>
//                   </p>
//                 </div>
//                 <div className="col-auto">
//                   <div className="size-3 rounded-full bg-light-1" />
//                 </div>
//               </div>
//               {/* End .row */}

//               <div className="row x-gap-10 y-gap-10 pt-20">
//                 <div className="col-auto">
//                   <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
//                     Breakfast
//                   </div>
//                 </div>
//                 <div className="col-auto">
//                   <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
//                     WiFi
//                   </div>
//                 </div>
//                 <div className="col-auto">
//                   <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
//                     Spa
//                   </div>
//                 </div>
//                 <div className="col-auto">
//                   <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
//                     Bar
//                   </div>
//                 </div>
//               </div>
//               {/* End .row */}
//             </div>
//             {/* End col */}

//             <div className="col-md-auto text-right md:text-left">
//               <div className="d-flex flex-column justify-between h-full">
//                 <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
//                   <div className="col-auto">
//                     <div className="tw-px-10 flex-center text-white fw-600 text-14 size-40 rounded-4 bg-blue-1">
//                       View
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* End col */}
//           </div>
//           {/* End .row */}
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import MetaComponent from "@/components/common/MetaComponent";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { payoutData, reportData, requestData } from "@/data/dummy";
import PayoutTable from "@/components/tables/payout-table";
import ReportTable from "@/components/tables/report-table";
import RequestTable from "@/components/tables/request-table";

const metadata = {
  title: "Spaces",
  description: "Spaces",
};

const item = {
  id: 1,
  tag: "Breakfast Included",
  slideImg: ["/img/hotels/1.png"],
  img: "/img/hotels/1.png",
  title: "The Montcalm At Brewery London City",
  location: "Westminster Borough, London",
  ratings: "4.7",
  numberOfReviews: "3014",
  price: "72",
  delayAnimation: "100",
  city: "uk",
  category: "hotel",
};
const user = {
  id: 1,
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@example.com",
  status: "active",
  email_verified_at: "2022-04-04 08:16",
  occupation: "Software Developer",
  location: "Toronto, Canada",
  createdAt: "2022-04-04 08:16",
};

const statusOptions = ["available", "taken", "disabled"];

export default function SingleSpace() {
  const [selectedStatus, setSelectedStatus] = useState("available");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">1 bedroom seater</h1>
          <div className="text-15 text-light-1">Toronto Canada</div>
        </div>
        {/* End .col-12 */}
      </div>
      <div className="tw-bg-white tw-p-5 tw-mb-4 tw-rounded-lg tw-shadow-md">
        <div className="col-12 ">
          <div className="row x-gap-20 y-gap-30">
            <div className="col-md-auto">
              <div className="cardImage ratio ratio-1:1 w-200 md:w-1/1 rounded-4">
                <div className="cardImage__content">
                  <img
                    className="rounded-4 col-12 js-lazy"
                    src={item.img}
                    alt="image"
                  />
                </div>
              </div>
            </div>
            {/* End col */}

            <div className="col-md">
              <h3 className="text-18 lh-14 fw-500">{item?.title}</h3>

              <div className="row x-gap-10 y-gap-10 items-center pt-20">
                <div className="col-auto">
                  <p className="text-14">
                    Westminster Borough, London
                    <button
                      data-x-click="mapFilter"
                      className="text-blue-1 underline ml-10"
                    >
                      Show on map
                    </button>
                  </p>
                </div>
                <div className="col-auto">
                  <div className="size-3 rounded-full bg-light-1" />
                </div>
              </div>
              {/* End .row */}

              <div className="row x-gap-10 y-gap-10 pt-20">
                <div className="col-auto">
                  <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                    Breakfast
                  </div>
                </div>
                <div className="col-auto">
                  <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                    WiFi
                  </div>
                </div>
                <div className="col-auto">
                  <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                    Spa
                  </div>
                </div>
                <div className="col-auto">
                  <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                    Bar
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End col */}

            <div className="col-md-auto text-right md:text-left">
              <div className="d-flex flex-column justify-between h-full">
                <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                  <div className="col-auto">
                    <Listbox
                      value={selectedStatus}
                      onChange={setSelectedStatus}
                    >
                      <ListboxButton className="tw-px-10 tw-text-right text-white fw-600 text-14 tw-py-2 rounded-4 bg-blue-1 relative">
                        {selectedStatus}
                        <RiArrowDownDoubleLine
                          className="tw-group tw-pointer-events-none tw-ml-4 tw-absolute tw-top-2.5 tw-right-2.5 tw-size-4"
                          aria-hidden="true"
                        />
                      </ListboxButton>
                      <ListboxOptions className="tw-absolute tw-mt-1 tw-p-3 tw-bg-white tw-shadow-md tw-rounded-md tw-z-10">
                        {statusOptions.map((status) => (
                          <ListboxOption
                            key={status}
                            value={status}
                            className="tw-cursor-pointer tw-rounded-md tw-py-2 tw-px-4 hover:tw-bg-slate-50"
                          >
                            {status}
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </Listbox>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>
          {/* End .row */}
        </div>
      </div>

      {/* host card */}
      <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-6 tw-w-full tw-mb-5">
        <div className="tw-flex tw-items-center tw-border-b tw-pb-4 tw-mb-4">
          <div className="tw-flex-grow">
            <h2 className="tw-text-3xl tw-font-bold tw-text-gray-800">
              {user.first_name} {user.last_name}
            </h2>
            <p className="tw-text-lg tw-text-gray-600">{user.occupation}</p>
            <p className="tw-text-lg tw-text-gray-600">{user.location}</p>
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-mb-4">
          <div>
            <p className="tw-text-gray-800">
              <span className="tw-font-semibold">Email:</span> {user.email}
            </p>
            <p className="tw-text-gray-800">
              <span className="tw-font-semibold">Email Verified At:</span>{" "}
              {user.email_verified_at}
            </p>
          </div>
          <div>
            <p className="tw-text-gray-800">
              <span className="tw-font-semibold">Status:</span> {user.status}
            </p>
          </div>
        </div>
        <div className="tw-border-t tw-pt-4">
          <p className="tw-text-gray-800">
            <span className="tw-font-semibold">ID:</span> {user.id}
          </p>
          <p className="tw-text-gray-800">
            <span className="tw-font-semibold">Created At:</span>{" "}
            {user.createdAt}
          </p>
        </div>
      </div>
      {/* host card */}
      <div className="tw-bg-white tw-p-10">
        <div className="tw-border-b-2 tw-w-full tw-mt-6"></div>

        <div className="py-30 px-30 rounded-4 bg-white shadow-3">
          <div className="d-flex justify-between items-center">
            <h2 className="text-18 lh-1 fw-500">All Payouts On Property</h2>
          </div>
          {/* End d-flex */}

          <PayoutTable
            isAdmin
            data={payoutData.slice(0, 4)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="tw-border-b-2 tw-w-full tw-mt-6"></div>
        <div className="py-30 px-30 rounded-4 bg-white shadow-3">
          <div className="d-flex justify-between items-center">
            <h2 className="text-18 lh-1 fw-500">All Reports On Property</h2>
          </div>
          {/* End d-flex */}

          <ReportTable
            isAdmin
            data={reportData.slice(0, 3)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="tw-border-b-2 tw-w-full tw-mt-6"></div>
        <div className="py-30 px-30 rounded-4 bg-white shadow-3">
          <div className="d-flex justify-between items-center">
            <h2 className="text-18 lh-1 fw-500">All Request On Property</h2>
          </div>
          {/* End d-flex */}

          <RequestTable
            isAdmin
            data={requestData.slice(0, 4)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}
