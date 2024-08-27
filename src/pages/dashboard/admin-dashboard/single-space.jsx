import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import { authRequests } from "@/utils/http";
import { toast } from "react-toastify";

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
  const [space, setSpace] = useState();
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  let params = useParams();
  const id = params.id;

  useEffect(() => {
    async function getSpaces() {
      try {
        const response = await authRequests.get(`/admin/spaces/${id}`);

        setLoading(false);
        setSpace(response.data);

        setSelectedStatus(response.data.status);

        console.log(response.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }

    async function getRequests() {
      const response = await authRequests.get(
        // `/admin/spaces/${id}/requests&page=${currentPage}`
        `admin/spaces/${id}/requests`
      );

      setCurrentPage(response.data.current_page);
      setTotalPages(response.data.last_page);
      setRequests(response.data.data);
    }
    getSpaces();
    getRequests();
  }, [currentPage]);

  const handleUpdateStatus = async (newStatus) => {
    try {
      const response = await authRequests.put(
        `/admin/spaces/${id}/${newStatus}`
      );

      toast.success(response.message);

      setSelectedStatus(newStatus);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">
            {loading ? "loading" : space?.space_name}
          </h1>
          <div className="text-15 text-light-1">
            {" "}
            {loading ? "loading" : space?.address}
          </div>
        </div>
      </div>
      <div className="tw-bg-white tw-p-5 tw-mb-4 tw-rounded-lg tw-shadow-md">
        {loading ? (
          <p>Loading</p>
        ) : (
          <div className="col-12" key={space.id}>
            <div className="row x-gap-20 y-gap-30">
              <div className="col-md-auto">
                <div className="cardImage ratio ratio-1:1 w-200 md:w-1/1 rounded-4">
                  <div className="cardImage__content">
                    <img
                      className="rounded-4 col-12 js-lazy"
                      src={space.image}
                      alt="image"
                    />
                  </div>
                  <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md">
                <h3 className="text-18 lh-14 fw-500">{space?.space_name}</h3>

                <div className="row x-gap-10 y-gap-10 spaces-center pt-20">
                  <div className="col-auto">
                    <p className="text-14">{space.address}</p>
                  </div>
                  <div className="col-auto">
                    <div className="size-3 rounded-full bg-light-1" />
                  </div>
                </div>

                <div className="row x-gap-10 y-gap-10 pt-20">
                  {space.services.slice(0, 3).map((space) => (
                    <div className="col-auto">
                      <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                        {space}
                      </div>
                    </div>
                  ))}

                  {space.services.length > 3 && (
                    <div className="col-auto">
                      <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                        ...more
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-md-auto text-right md:text-left">
                <div className="d-flex flex-column justify-between h-full">
                  <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                    <div className="col-auto">
                      <Listbox
                        value={selectedStatus}
                        onChange={(e) => handleUpdateStatus(e)}
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
            </div>
          </div>
        )}
      </div>

      {/* host card */}

      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-6 tw-w-full tw-mb-5">
          <div className="tw-flex tw-items-center tw-border-b tw-pb-4 tw-mb-4">
            <div className="tw-flex-grow">
              <h2 className="tw-text-3xl tw-font-bold tw-text-gray-800">
                {space?.user?.first_name} {space?.user?.last_name}
              </h2>
              <p className="tw-text-lg tw-text-gray-600">
                {space?.user?.occupation}
              </p>
              <p className="tw-text-lg tw-text-gray-600">
                {space?.user?.location}
              </p>
            </div>
          </div>
          <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-mb-4">
            <div>
              <p className="tw-text-gray-800">
                <span className="tw-font-semibold">Email:</span>{" "}
                {space?.user?.email}
              </p>
              <p className="tw-text-gray-800">
                <span className="tw-font-semibold">Email Verified At:</span>{" "}
                {space?.user?.email_verified_at}
              </p>
            </div>
            <div>
              <p className="tw-text-gray-800">
                <span className="tw-font-semibold">Status:</span>{" "}
                {space?.user?.status}
              </p>
            </div>
          </div>
          <div className="tw-border-t tw-pt-4">
            <p className="tw-text-gray-800">
              <span className="tw-font-semibold">ID:</span> {space?.user?.id}
            </p>
            <p className="tw-text-gray-800">
              <span className="tw-font-semibold">Created At:</span>{" "}
              {space?.user?.created_at}
            </p>
          </div>
        </div>
      )}

      {/* host card */}
      <div className="tw-bg-white tw-p-10">
        <div className="py-30 px-30 rounded-4 bg-white shadow-3">
          <div className="d-flex justify-between items-center">
            <h2 className="text-18 lh-1 fw-500">All Request On Property</h2>
          </div>
          {/* End d-flex */}

          <RequestTable
            isAdmin
            data={requests}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPage={totalPages}
          />
        </div>
      </div>
    </>
  );
}
