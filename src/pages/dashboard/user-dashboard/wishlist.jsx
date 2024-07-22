import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import { hotelsData } from "@/components/data/hotels";

const metadata = {
  title: "User Wishlist",
  description: "User Wishlist",
};

export default function UserWishlist() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Wishlist</h1>
          <div className="text-15 text-light-1">
            Lorem ipsum dolor sit amet, consectetur.
          </div>
        </div>
        <div className="tw-bg-white tw-p-10">
          {hotelsData.slice(0, 5).map((item) => (
            <div className="col-12" key={item.id}>
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
                    <div className="cardImage__wishlist">
                      <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                        <i className="icon-heart text-12" />
                      </button>
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
                        <div className="text-14 lh-14 fw-500">View on Map</div>
                      </div>
                      <div className="col-auto">
                        <div className="tw-px-10 flex-center text-white fw-600 text-14 size-40 rounded-4 bg-blue-1">
                          View
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End col */}
              </div>
              {/* End .row */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
