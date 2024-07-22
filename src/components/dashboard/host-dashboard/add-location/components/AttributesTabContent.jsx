import React from "react";

const AttributesTabContent = ({
  selectedPropertyTypes,
  selectedFacilities,
  selectedServices,
  onCheckboxChange,
}) => {
  const facilitiesList = [
    { name: "Wi-Fi", value: "wifi" },
    { name: "Swimming Pool", value: "pool" },
    { name: "Gym", value: "gym" },
    { name: "Parking", value: "parking" },
    { name: "Spa", value: "spa" },
    { name: "Restaurant", value: "restaurant" },
    { name: "Bar", value: "bar" },
    { name: "Air Conditioning", value: "airConditioning" },
    { name: "Pet Friendly", value: "petFriendly" },
    { name: "Garden", value: "garden" },
    { name: "BBQ Facilities", value: "bbq" },
    { name: "Conference Room", value: "conferenceRoom" },
    { name: "Library", value: "library" },
    { name: "Game Room", value: "gameRoom" },
    { name: "Fireplace", value: "fireplace" },
    { name: "Sauna", value: "sauna" },
  ];

  const propertyTypesList = [
    { name: "Apartment", value: "apartment" },
    { name: "House", value: "house" },
    { name: "Villa", value: "villa" },
    { name: "Cottage", value: "cottage" },
    { name: "Townhouse", value: "townhouse" },
    { name: "Bungalow", value: "bungalow" },
    { name: "Loft", value: "loft" },
    { name: "Studio", value: "studio" },
    { name: "Guesthouse", value: "guesthouse" },
    { name: "Resort", value: "resort" },
    { name: "Lodge", value: "lodge" },
    { name: "Houseboat", value: "houseboat" },
  ];

  const spaceServicesList = [
    { name: "Room Service", value: "roomService" },
    { name: "Concierge", value: "concierge" },
    { name: "Laundry", value: "laundry" },
    { name: "Shuttle Service", value: "shuttleService" },
    { name: "Childcare", value: "childcare" },
    { name: "Business Center", value: "businessCenter" },
    { name: "Valet Parking", value: "valetParking" },
    { name: "Currency Exchange", value: "currencyExchange" },
  ];

  return (
    <div className="col-xl-9 col-lg-11">
      {/* Property Types Section */}
      <div className="row x-gap-100 y-gap-15">
        <div className="col-12">
          <div className="text-18 fw-500">Property Type</div>
        </div>
        {propertyTypesList.map((propertyType) => (
          <div className="col-lg-3 col-sm-6" key={propertyType.value}>
            <div className="row y-gap-15">
              <div className="col-12">
                <div className="d-flex items-center form-checkbox">
                  <input
                    type="checkbox"
                    name="propertyType"
                    value={propertyType.value}
                    checked={selectedPropertyTypes.includes(propertyType.value)}
                    onChange={(e) =>
                      onCheckboxChange(
                        "propertyType",
                        propertyType.value,
                        e.target.checked
                      )
                    }
                  />
                  <div className="form-checkbox__mark">
                    <div className="form-checkbox__icon icon-check" />
                  </div>
                  <div className="text-15 lh-11 ml-10">{propertyType.name}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Facilities Section */}
      <div className="row x-gap-100 y-gap-15 pt-30">
        <div className="col-12">
          <div className="text-18 fw-500">Facilities</div>
        </div>
        {facilitiesList.map((facility) => (
          <div className="col-lg-3 col-sm-6" key={facility.value}>
            <div className="row y-gap-15">
              <div className="col-12">
                <div className="d-flex items-center form-checkbox">
                  <input
                    type="checkbox"
                    name="facilities"
                    value={facility.value}
                    checked={selectedFacilities.includes(facility.value)}
                    onChange={(e) =>
                      onCheckboxChange(
                        "facilities",
                        facility.value,
                        e.target.checked
                      )
                    }
                  />
                  <div className="form-checkbox__mark">
                    <div className="form-checkbox__icon icon-check" />
                  </div>
                  <div className="text-15 lh-11 ml-10">{facility.name}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Space Services Section */}
      <div className="row x-gap-100 y-gap-15 pt-30">
        <div className="col-12">
          <div className="text-18 fw-500">Space Services</div>
        </div>
        {spaceServicesList.map((service) => (
          <div className="col-lg-3 col-sm-6" key={service.value}>
            <div className="row y-gap-15">
              <div className="col-12">
                <div className="d-flex items-center form-checkbox">
                  <input
                    type="checkbox"
                    name="services"
                    value={service.value}
                    checked={selectedServices.includes(service.value)}
                    onChange={(e) =>
                      onCheckboxChange(
                        "services",
                        service.value,
                        e.target.checked
                      )
                    }
                  />
                  <div className="form-checkbox__mark">
                    <div className="form-checkbox__icon icon-check" />
                  </div>
                  <div className="text-15 lh-11 ml-10">{service.name}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttributesTabContent;
