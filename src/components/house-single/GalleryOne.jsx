import ModalVideo from "react-modal-video";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function GalleryOne({ space }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="oqNZOOWF8qM"
        onClose={() => setOpen(false)}
      />
      <section className="pt-40">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="row x-gap-20  items-center">
                <div className="col-auto">
                  <h1 className="text-30 sm:text-25 fw-600">
                    {space?.space_name}
                  </h1>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <div className="d-flex items-center text-15 text-light-1">
                    <i className="icon-location-2 text-16 mr-5" />
                    {space?.address}
                  </div>
                </div>
                <div className="col-auto">
                  <button
                    data-x-click="mapFilter"
                    className="text-blue-1 text-15 underline"
                  >
                    Show on map
                  </button>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="row x-gap-15 y-gap-15 items-center">
                <div className="col-auto">
                  <div className="text-14">
                    From{" "}
                    <span className="text-22 text-dark-1 fw-500">
                      US${space?.space_price}
                    </span>
                  </div>
                </div>
                <div className="col-auto">
                  <Link
                    to="/booking-page"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Request Property{" "}
                    <div className="icon-arrow-top-right ml-15" />
                  </Link>
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <Gallery>
            <div className="galleryGrid -type-1 pt-30">
              <div className="galleryGrid__item relative d-flex">
                <Item
                  original={space?.image}
                  thumbnail={space?.image}
                  width={660}
                  height={660}
                >
                  {({ ref, open }) => (
                    <img
                      src={space?.image}
                      ref={ref}
                      onClick={open}
                      alt="image"
                      role="button"
                      className="rounded-4"
                    />
                  )}
                </Item>
                <div className="absolute px-20 py-20 col-12 d-flex justify-end">
                  <button className="button -blue-1 size-40 rounded-full flex-center bg-white text-dark-1">
                    <i className="icon-heart text-16" />
                  </button>
                </div>
              </div>
              {/* End .galleryGrid__item */}

              {space?.images &&
                JSON.parse(space?.images)
                  .slice(0, 4)
                  .map((image, index) => (
                    <div className="galleryGrid__item">
                      <Item
                        original={image}
                        thumbnail={image}
                        width={450}
                        height={375}
                      >
                        {({ ref, open }) => (
                          <img
                            ref={ref}
                            onClick={open}
                            src={image}
                            alt="image"
                            className="rounded-4"
                            role="button"
                          />
                        )}
                      </Item>
                    </div>
                  ))}
            </div>
          </Gallery>
        </div>
        {/* End .container */}
      </section>
    </>
  );
}
