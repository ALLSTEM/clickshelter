import { useState } from "react";
import {
  countryList,
  facilitiesList,
  propertyTypesList,
  spaceServicesList,
} from "@/data/options";

const DropdownSelectBar = ({
  selectedCountries,
  setSelectedCountries,
  selectedFacilities,
  setSelectedFacilities,
  selectedPropertyTypes,
  setSelectedPropertyTypes,
  selectedSpaceServices,
  setSelectedSpaceServices,
}) => {
  const renderDropdown = (
    title,
    selectedValues,
    setSelectedValues,
    options
  ) => (
    <div className="col-auto">
      <div className="relative ">
        <button
          className="d-flex items-center px-15 py-5 lh-16 text-14 rounded-100 border-light"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
          data-bs-offset="0,10"
        >
          {selectedValues.length === 0 ? title : selectedValues.join(", ")}
          <i className="icon icon-chevron-sm-down text-7 ml-15" />
        </button>
        {/* End dropdown__button */}

        <div className="dropRating dropdown-menu">
          <div className="px-20 py-20 rounded-4 bg-white border-light">
            <h5 className="text-15 fw-500 mb-15">{title}</h5>
            <div className="sidebar-checkbox">
              {options.map((item) => (
                <div
                  key={item.value}
                  className="row y-gap-10 items-center justify-between"
                >
                  <div className="col-auto">
                    <div className="form-checkbox d-flex items-center">
                      <input
                        type="checkbox"
                        name={item.value}
                        checked={selectedValues.includes(item.value)}
                        onChange={(e) => {
                          const { checked, name } = e.target;
                          setSelectedValues((prevValues) =>
                            checked
                              ? [...prevValues, name]
                              : prevValues.filter((value) => value !== name)
                          );
                        }}
                      />
                      <div className="form-checkbox__mark">
                        <div className="form-checkbox__icon icon-check" />
                      </div>
                      <div className="text-15 ml-10">{item.name}</div>
                    </div>
                  </div>
                  {/* End .col */}
                </div>
              ))}
            </div>
            {/* End sidebar-checkbox */}
          </div>
        </div>
        {/* End dropdown-menu */}
      </div>
      {/* End relative */}
    </div>
  );

  return (
    <>
      {renderDropdown(
        "Country",
        selectedCountries,
        setSelectedCountries,
        countryList
      )}
      {renderDropdown(
        "Facilities",
        selectedFacilities,
        setSelectedFacilities,
        facilitiesList
      )}
      {renderDropdown(
        "Property Types",
        selectedPropertyTypes,
        setSelectedPropertyTypes,
        propertyTypesList
      )}
      {renderDropdown(
        "Space Services",
        selectedSpaceServices,
        setSelectedSpaceServices,
        spaceServicesList
      )}
    </>
  );
};

export default DropdownSelectBar;
