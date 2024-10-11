import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ContentTabContent from "./ContentTabContent";
import LocationTabContent from "./LocationTabContent";
import PricingTabContent from "./PricingTabContent";
import AttributesTabContent from "./AttributesTabContent";
import { authRequests } from "@/utils/http";
import { toast } from "react-toastify";

const Index = () => {
  const [items, setItems] = useState([{ title: "", content: "" }]);
  const [spaceName, setSpaceName] = useState("");
  const [overview, setOverview] = useState("");
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [spacePrice, setSpacePrice] = useState("");
  const [advanceReservationTime, setAdvanceReservationTime] = useState("");
  const [minimumStayRequirements, setMinimumStayRequirements] = useState("");
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleCheckboxChange = (category, value, isChecked) => {
    switch (category) {
      case "propertyType":
        setSelectedPropertyTypes((prev) =>
          isChecked ? [...prev, value] : prev.filter((item) => item !== value)
        );
        break;
      case "facilities":
        setSelectedFacilities((prev) =>
          isChecked ? [...prev, value] : prev.filter((item) => item !== value)
        );
        break;
      case "services":
        setSelectedServices((prev) =>
          isChecked ? [...prev, value] : prev.filter((item) => item !== value)
        );
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    const newErrors = [];

    // Example validation checks
    if (!spaceName) newErrors.push("Space Name is required");
    if (!address) newErrors.push("Address is required");
    if (!spacePrice) newErrors.push("Space Price is required");
    if (!country) newErrors.push("Space country is required");
    if (!state) newErrors.push("Space state is required");
    if (!image) newErrors.push("Space image is required");
    // Add more validation checks as needed

    setErrors(newErrors);

    window.scrollTo(0, 0);
    return newErrors.length === 0;
  };

  const resetForm = () => {
    setItems([{ title: "", content: "" }]);
    setSpaceName("");
    setOverview("");
    setImage(null);
    setImages([]);
    setAddress("");
    setCountry("");
    setState("");
    setLatitude("");
    setLongitude("");
    setSpacePrice("");
    setAdvanceReservationTime("");
    setMinimumStayRequirements("");
    setSelectedPropertyTypes([]);
    setSelectedFacilities([]);
    setSelectedServices([]);
    setTabIndex(0);
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const formData = new FormData();

    formData.append("spaceName", spaceName);
    formData.append("overview", overview);
    formData.append("address", address);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("spacePrice", spacePrice);
    formData.append("advance_reservation_time", advanceReservationTime);
    formData.append("minimum_stay_requirements", minimumStayRequirements);
    // formData.append("selectedPropertyTypes", selectedPropertyTypes);
    // formData.append("selectedFacilities", selectedFacilities);
    // formData.append("selectedServices", selectedServices);

    // Append main image
    if (image) {
      formData.append("image", image);
    }

    images.forEach((img, index) => {
      formData.append(`images[${index}]`, img);
    });

    // Append items
    items.forEach((item, index) => {
      formData.append(`items[${index}][title]`, item.title);
      formData.append(`items[${index}][content]`, item.content);
    });
    selectedPropertyTypes.forEach((item, index) => {
      formData.append(`selectedPropertyTypes[${index}]`, item);
    });
    selectedFacilities.forEach((item, index) => {
      formData.append(`selectedFacilities[${index}]`, item);
    });
    selectedServices.forEach((item, index) => {
      formData.append(`selectedServices[${index}]`, item);
    });

    setLoading(true);
    setErrors([]);

    try {
      const response = await authRequests.post("/admin/spaces", formData);

      console.log(response);

      toast.success("Space added successfully");

      resetForm();
    } catch (error) {
      console.log(error);

      window.scrollTo(0, 0);

      if (error instanceof Error) {
        // This is a network error or an error we threw
        setErrors([error.message]);
      } else if (error.response && error.response.data) {
        // This is an error response from the server
        if (error.response.data.errors) {
          const errorMessages = [];
          for (const key in error.response.data.errors) {
            if (error.response.data.errors.hasOwnProperty(key)) {
              errorMessages.push(...error.response.data.errors[key]);
            }
          }
          setErrors(errorMessages);
        } else if (error.response.data.message) {
          setErrors([error.response.data.message]);
        } else {
          setErrors(["An unexpected error occurred"]);
        }
      } else {
        // This is an unknown error
        setErrors(["An unexpected error occurred"]);
      }

      // Handle error (e.g., show an error message)
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    {
      label: "Content",
      labelNo: 1,
      content: (
        <ContentTabContent
          items={items}
          setItems={setItems}
          spaceName={spaceName}
          setSpaceName={setSpaceName}
          overview={overview}
          setOverview={setOverview}
          image={image}
          setImage={setImage}
          images={images}
          setImages={setImages}
          errors={errors}
        />
      ),
    },
    {
      label: "Location",
      labelNo: 2,
      content: (
        <LocationTabContent
          address={address}
          setAddress={setAddress}
          country={country}
          setCountry={setCountry}
          state={state}
          setState={setState}
          latitude={latitude}
          setLatitude={setLatitude}
          longitude={longitude}
          setLongitude={setLongitude}
          errors={errors}
        />
      ),
    },
    {
      label: "Pricing",
      labelNo: 3,
      content: (
        <PricingTabContent
          spacePrice={spacePrice}
          setSpacePrice={setSpacePrice}
          advanceReservationTime={advanceReservationTime}
          setAdvanceReservationTime={setAdvanceReservationTime}
          minimumStayRequirements={minimumStayRequirements}
          setMinimumStayRequirements={setMinimumStayRequirements}
          handleSaveChanges={() => {}}
          errors={errors}
        />
      ),
    },
    {
      label: "Attributes",
      labelNo: 4,
      content: (
        <AttributesTabContent
          selectedPropertyTypes={selectedPropertyTypes}
          selectedFacilities={selectedFacilities}
          selectedServices={selectedServices}
          onCheckboxChange={handleCheckboxChange}
        />
      ),
    },
  ];

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      {loading && (
        <div className="tw-z-[2000] tw-fixed tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50">
          <div className="tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-lg tw-text-center">
            <div className="tw-animate-spin tw-rounded-full tw-h-16 tw-w-16 tw-border-t-4 tw-border-b-4 tw-border-blue-500 tw-mx-auto tw-mb-4"></div>
            <p className="tw-text-xl tw-font-semibold tw-text-gray-700">
              Adding Property...
            </p>
          </div>
        </div>
      )}

      {/* Display errors outside the Tabs */}
      {errors.length > 0 && (
        <div className="tw-mb-6">
          {Object.values(errors).map((error, index) => (
            <p key={index} className="text-danger tw-font-bold">
              {error}
            </p>
          ))}
        </div>
      )}
      <Tabs
        className="tabs -underline-2 js-tabs"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20">
          {tabs.map((tab, index) => (
            <Tab key={index} className="col-auto">
              <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
                {tab.labelNo}. {tab.label}
              </button>
            </Tab>
          ))}
        </TabList>

        <div className="tabs__content pt-30 js-tabs-content">
          {tabs.map((tab, index) => (
            <TabPanel
              key={index}
              className={`-tab-item-${index + 1} ${
                tabIndex === index ? "is-tab-el-active" : ""
              }`}
            >
              {tab.content}
            </TabPanel>
          ))}
        </div>
      </Tabs>

      {/* Navigation and Submit buttons */}
      <div className="pt-30">
        {tabIndex < tabs.length - 1 && (
          <button
            type="button"
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
            onClick={() => setTabIndex(tabIndex + 1)}
          >
            Next
          </button>
        )}

        {tabIndex === tabs.length - 1 && (
          <button
            type="button"
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
            onClick={handleSubmit}
          >
            {loading ? "Adding Property" : " Add Property"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Index;
