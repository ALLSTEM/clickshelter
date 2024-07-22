import HotelContent from "./content/HotelContent";
import HotelPolicy from "./content/HotelPolicy";
import BannerUploader from "./content/BannerUploader";
import FeaturedUploader from "./content/FeaturedUploader";
import GalleryUploader from "./content/GalleryUploader";
import { useState } from "react";

const ContentTabContent = ({
  items,
  setItems,
  spaceName,
  setSpaceName,
  overview,
  setOverview,
  image,
  setImage,
  images,
  setImages,
}) => {
  const handleSave = () => {};
  return (
    <>
      <div className="col-xl-10">
        <div className="text-18 fw-500 mb-10">Space Content</div>
        <HotelContent
          spaceName={spaceName}
          setSpaceName={setSpaceName}
          overview={overview}
          setOverview={setOverview}
        />
        {/* End HotelContent */}

        <div className="mt-30">
          <div className="fw-500">Banner Image</div>
          <BannerUploader setImage={setImage} image={image} />
        </div>
        {/* End BannerUploader */}

        <div className="mt-30">
          <div className="fw-500">Gallery</div>
          <GalleryUploader images={images} setImages={setImages} />
        </div>
        {/* End GalleryUploader */}

        <div className="border-top-light mt-30 mb-30" />

        <div className="text-18 fw-500 mb-10">Space Rules</div>
        <HotelPolicy items={items} setItems={setItems} />
        {/* End hotelpolicy */}

        {/* End FeaturedUploader */}
      </div>
    </>
  );
};

export default ContentTabContent;
