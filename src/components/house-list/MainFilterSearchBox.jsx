import DateSearch from "./common/DateSearch";
import GuestSearch from "./common/GuestSearch";
import LocationSearch from "./LocationSearch";

const MainFilterSearchBox = ({
  searchValue,
  setSearchValue,
  selectedItem,
  setSelectedItem,
}) => {
  return (
    <>
      <div className="mainSearch -col-3-big bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 mt-30">
        <div className=" tw-justify-between tw-flex items-center">
          <LocationSearch
            searchValue={searchValue}
            selectedItem={selectedItem}
            setSearchValue={setSearchValue}
            setSelectedItem={setSelectedItem}
          />
          {/* End Location */}

          <div className="button-item h-full">
            <button className="button -dark-1 py-15 px-40 h-full col-12 rounded-0 bg-blue-1 text-white">
              <i className="icon-search text-20 mr-10" />
              Search
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;
