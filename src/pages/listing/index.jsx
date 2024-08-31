import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";

import MetaComponent from "@/components/common/MetaComponent";
import DropdownSelectBar from "@/components/house-list/common/DropdownSelelctBar";
import HouseProperties from "@/components/house-list/HouseProperties";
import MainFilterSearchBox from "@/components/house-list/MainFilterSearchBox";
import Pagination from "@/components/house-list/common/Pagination";
import { useEffect, useState } from "react";
import { requests } from "@/utils/http";

const metadata = {
  title: "Space list",
  description: "Space list",
};

const HouseListPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginationData, setPaginationData] = useState();
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  // filter
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedSpaceServices, setSelectedSpaceServices] = useState([]);

  useEffect(() => {
    setPage(1);
  }, [
    searchValue,
    selectedCountries,
    selectedFacilities,
    selectedPropertyTypes,
    selectedSpaceServices,
  ]);

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const params = new URLSearchParams({
          country: selectedCountries.join(","),
          facilities: selectedFacilities.join(","),
          property_types: selectedPropertyTypes.join(","),
          space_services: selectedSpaceServices.join(","),
          address: searchValue,
          page: page.toString(),
        }).toString();

        const response = await requests.get(`/spaces?${params}`);

        const { data, ...paginationDetails } = response.data;

        console.log(paginationDetails);

        // setFilteredItems(data);
        // setPaginationData(paginationDetails);
        // setPage(paginationDetails.current_page);
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSpaces();
  }, [
    searchValue,
    page,
    selectedCountries,
    selectedFacilities,
    selectedPropertyTypes,
    selectedSpaceServices,
  ]);

  return (
    <>
      <MetaComponent meta={metadata} />

      <section className="section-bg pt-40 pb-40 relative z-5">
        <div className="section-bg__item col-12">
          <img
            src="/img/masthead/1/bg-2.jpg"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* End .section-bg__item */}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-30 pt-40 fw-600 text-white">
                  Find Your Dream House
                </h1>
              </div>
              {/* End text-center */}
              <MainFilterSearchBox
                searchValue={searchValue}
                selectedItem={selectedItem}
                setSearchValue={setSearchValue}
                setSelectedItem={setSelectedItem}
              />
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>
      {/* Top SearchBanner */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="row x-gap-20 y-gap-10 items-center">
                <div className="col-auto">
                  <div className="text-18 fw-500">Filter</div>
                </div>
                {/* End .col-auto */}

                <div className="col-auto">
                  <div className="row x-gap-15 y-gap-15">
                    <DropdownSelectBar
                      selectedCountries={selectedCountries}
                      setSelectedCountries={setSelectedCountries}
                      selectedFacilities={selectedFacilities}
                      setSelectedFacilities={setSelectedFacilities}
                      selectedPropertyTypes={selectedPropertyTypes}
                      setSelectedPropertyTypes={setSelectedPropertyTypes}
                      selectedSpaceServices={selectedSpaceServices}
                      setSelectedSpaceServices={setSelectedSpaceServices}
                    />
                  </div>
                </div>
                {/* End .col-auto */}
              </div>
              {/* End .row */}
            </div>
            {/* End col-auto */}

            <div className="col-auto">
              <button className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1">
                {/* <i className="icon-up-down text-14 mr-10"></i> */}
                View Your Requests
              </button>
            </div>
            {/* End col-auto */}

            <div className="border-top-light mt-30 mb-30"></div>
            {/* End border-top */}

            <div className="row y-gap-30">
              <HouseProperties properties={filteredItems} />
            </div>
            {/* End .row */}
            {paginationData && (
              <Pagination
                page={page}
                setPage={setPage}
                paginationData={paginationData}
              />
            )}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      {/* <DefaultFooter /> */}
    </>
  );
};

export default HouseListPage;
