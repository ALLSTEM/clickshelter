// import React, { useState } from "react";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import ContentTabContent from "./ContentTabContent";
// import LocationTabContent from "./LocationTabContent";
// import PricingTabContent from "./PricingTabContent";
// import AttributesTabContent from "./AttributesTabContent";

// const Index = () => {
//   const [items, setItems] = useState([{ title: "", content: "" }]);
//   const [spaceName, setSpaceName] = useState("");
//   const [overview, setOverview] = useState("");
//   const [image, setImage] = useState(null);
//   const [images, setImages] = useState([]);
//   const [address, setAddress] = useState("");
//   const [country, setCountry] = useState("");
//   const [state, setState] = useState("");
//   const [latitude, setLatitude] = useState("");
//   const [longitude, setLongitude] = useState("");
//   const [spacePrice, setSpacePrice] = useState("");
//   const [advanceReservationTime, setAdvanceReservationTime] = useState("");
//   const [minimumStayRequirements, setMinimumStayRequirements] = useState("");
//   const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
//   const [selectedFacilities, setSelectedFacilities] = useState([]);
//   const [selectedServices, setSelectedServices] = useState([]);

//   const handleSaveChanges = () => {
//     // Handle save changes logic if any
//   };

//   const handleCheckboxChange = (category, value, isChecked) => {
//     switch (category) {
//       case "propertyType":
//         setSelectedPropertyTypes((prev) =>
//           isChecked ? [...prev, value] : prev.filter((item) => item !== value)
//         );
//         break;
//       case "facilities":
//         setSelectedFacilities((prev) =>
//           isChecked ? [...prev, value] : prev.filter((item) => item !== value)
//         );
//         break;
//       case "services":
//         setSelectedServices((prev) =>
//           isChecked ? [...prev, value] : prev.filter((item) => item !== value)
//         );
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = async () => {
//     const formData = {
//       items,
//       spaceName,
//       overview,
//       image,
//       images,
//       address,
//       country,
//       state,
//       latitude,
//       longitude,
//       spacePrice,
//       advanceReservationTime,
//       minimumStayRequirements,
//       selectedPropertyTypes,
//       selectedFacilities,
//       selectedServices,
//     };

//     try {
//       const response = await fetch("/your-api-endpoint", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const result = await response.json();
//       console.log("Success:", result);
//       // Handle success (e.g., show a success message, clear form, etc.)
//     } catch (error) {
//       console.error("Error:", error);
//       // Handle error (e.g., show an error message)
//     }
//   };

//   const tabs = [
//     {
//       label: "Content",
//       labelNo: 1,
//       content: (
//         <ContentTabContent
//           items={items}
//           setItems={setItems}
//           spaceName={spaceName}
//           setSpaceName={setSpaceName}
//           overview={overview}
//           setOverview={setOverview}
//           image={image}
//           setImage={setImage}
//           images={images}
//           setImages={setImages}
//         />
//       ),
//     },
//     {
//       label: "Location",
//       labelNo: 2,
//       content: (
//         <LocationTabContent
//           address={address}
//           setAddress={setAddress}
//           country={country}
//           setCountry={setCountry}
//           state={state}
//           setState={setState}
//           latitude={latitude}
//           setLatitude={setLatitude}
//           longitude={longitude}
//           setLongitude={setLongitude}
//         />
//       ),
//     },
//     {
//       label: "Pricing",
//       labelNo: 3,
//       content: (
//         <PricingTabContent
//           spacePrice={spacePrice}
//           setSpacePrice={setSpacePrice}
//           advanceReservationTime={advanceReservationTime}
//           setAdvanceReservationTime={setAdvanceReservationTime}
//           minimumStayRequirements={minimumStayRequirements}
//           setMinimumStayRequirements={setMinimumStayRequirements}
//           handleSaveChanges={handleSaveChanges}
//         />
//       ),
//     },
//     {
//       label: "Attributes",
//       labelNo: 4,
//       content: (
//         <AttributesTabContent
//           selectedPropertyTypes={selectedPropertyTypes}
//           selectedFacilities={selectedFacilities}
//           selectedServices={selectedServices}
//           onCheckboxChange={handleCheckboxChange}
//         />
//       ),
//     },
//   ];

//   const [tabIndex, setTabIndex] = useState(0);

//   return (
//     <div>
//       <Tabs
//         className="tabs -underline-2 js-tabs"
//         selectedIndex={tabIndex}
//         onSelect={(index) => setTabIndex(index)}
//       >
//         <TabList className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20">
//           {tabs.map((tab, index) => (
//             <Tab key={index} className="col-auto">
//               <button className="tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
//                 {tab.labelNo}. {tab.label}
//               </button>
//             </Tab>
//           ))}
//         </TabList>

//         <div className="tabs__content pt-30 js-tabs-content">
//           {tabs.map((tab, index) => (
//             <TabPanel
//               key={index}
//               className={`-tab-item-${index + 1} ${
//                 tabIndex === index ? "is-tab-el-active" : ""
//               }`}
//             >
//               {tab.content}
//             </TabPanel>
//           ))}
//         </div>
//       </Tabs>

//       {/* Navigation and Submit buttons */}
//       <div className="pt-30">
//         {tabIndex < tabs.length - 1 && (
//           <button
//             type="button"
//             className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
//             onClick={() => setTabIndex(tabIndex + 1)}
//           >
//             Next
//           </button>
//         )}

//         {tabIndex === tabs.length - 1 && (
//           <button
//             type="button"
//             className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
//             onClick={handleSubmit}
//           >
//             Add Property
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Index;

import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ContentTabContent from "./ContentTabContent";
import LocationTabContent from "./LocationTabContent";
import PricingTabContent from "./PricingTabContent";
import AttributesTabContent from "./AttributesTabContent";

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

  const [errors, setErrors] = useState({});

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
    const newErrors = {};

    // Example validation checks
    if (!spaceName) newErrors.spaceName = "Space Name is required";
    if (!address) newErrors.address = "Address is required";
    if (!spacePrice) newErrors.spacePrice = "Space Price is required";
    // Add more validation checks as needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const formData = {
      items,
      spaceName,
      overview,
      image,
      images,
      address,
      country,
      state,
      latitude,
      longitude,
      spacePrice,
      advanceReservationTime,
      minimumStayRequirements,
      selectedPropertyTypes,
      selectedFacilities,
      selectedServices,
    };

    console.log(formData);

    try {
      const response = await fetch("/your-api-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      // Handle success (e.g., show a success message, clear form, etc.)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show an error message)
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
      {/* Display errors outside the Tabs */}
      {Object.keys(errors).length > 0 && (
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
            Add Property
          </button>
        )}
      </div>
    </div>
  );
};

export default Index;
