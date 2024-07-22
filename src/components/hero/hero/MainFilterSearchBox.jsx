import { useSelector, useDispatch } from "react-redux";
import { addCurrentTab } from "../../../features/hero/findPlaceSlice";
import DateSearch from "../DateSearch";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";
import { useNavigate } from "react-router-dom";

const MainFilterSearchBox = () => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className="position-relative mt-30 md:mt-20 js-tabs-content">
        <div className="mainSearch -w-900 bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100">
          <div className="button-grid items-center">
            <LocationSearch />
            {/* End Location */}
            <GuestSearch />
            {/* End guest */}

            <div className="button-item">
              <button
                className="mainSearch__submit button -dark-1 h-60 px-35 col-12 rounded-100 bg-blue-1 text-white"
                onClick={() => navigate("/accommodations")}
              >
                <i className="icon-search text-20 mr-10" />
                Search
              </button>
            </div>
            {/* End search button_item */}
          </div>
        </div>
        {/* End .mainSearch */}
      </div>
      {/* End serarchbox tab-content */}
    </>
  );
};

export default MainFilterSearchBox;
