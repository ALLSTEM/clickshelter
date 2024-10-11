import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import isTextMatched from "../../utils/isTextMatched";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { authRequests } from "@/utils/http";

const PropertyItem = ({ item }) => {
  const data = useSelector((state) => state.auth);

  const handleWishlistClick = async (event) => {
    if (!data.user) {
      toast.info("Login to add property to wishlist");
      return;
    }

    try {
      const res = await authRequests.put(`/user/wishlists/update`, {
        space_id: item.id,
      });
      toast.success(res.message);
    } catch (error) {
      toast.error("Failed to add property to wishlist");
    }
  };

  function ArrowSlick(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }
  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="col-xl-3 col-lg-3 col-sm-6"
      key={item?.id}
      data-aos="fade"
      data-aos-delay={item.delayAnimation}
    >
      <Link
        to={`/listing/${item.id}`}
        className="hotelsCard -type-1 hover-inside-slider"
      >
        <div className="hotelsCard__image">
          <div className="cardImage inside-slider">
            <Slider
              {...itemSettings}
              arrows={true}
              nextArrow={<ArrowSlick type="next" />}
              prevArrow={<ArrowSlick type="prev" />}
            >
              <div className="cardImage ratio ratio-1:1">
                <div className="cardImage__content ">
                  <img
                    className="rounded-4 col-12 js-lazy"
                    src={item.image}
                    alt="image"
                  />
                </div>
              </div>
            </Slider>

            <div className="cardImage__wishlist">
              {/* <button
                onClick={(e) => handleWishlistClick(e)}
                className="button -blue-1 bg-white size-30 rounded-full shadow-2 tw-z-40"
              >
                <i className="icon-heart text-12" />
              </button> */}
              <div className="tw-z-50">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleWishlistClick(e);
                  }}
                  className="button -blue-1 bg-white size-30 rounded-full shadow-2 tw-z-50"
                >
                  <i className="icon-heart text-12" />
                </button>
              </div>
            </div>

            <div className="cardImage__leftBadge">
              <div
                className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
                  isTextMatched(item?.country, "united_kingdom")
                    ? "bg-dark-1 text-white"
                    : ""
                } ${
                  isTextMatched(item?.country, "canada")
                    ? "bg-yellow-1 text-dark-1"
                    : ""
                } 
              `}
              >
                {item?.country}
              </div>
            </div>
          </div>
        </div>
        <div className="hotelsCard__content mt-10">
          <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
            <span>{item?.space_name}</span>
          </h4>
          {/* <p className="text-light-1 lh-14 text-14 mt-5">{item?.address}</p> */}

          <div className="mt-5">
            <div className="fw-500">
              Starting from{" "}
              <span className="text-blue-1">${item?.space_price}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyItem;
