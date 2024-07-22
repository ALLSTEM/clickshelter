import React, { useState } from "react";
import FilterHousesTabs from "./filter-tabs/FilterHousesTabs";
import FilterHouses from "./FilterHouses";
import { Link } from "react-router-dom";

export default function FilterHousesContainer() {
  const [filterOption, setFilterOption] = useState("canada");
  return (
    <div className="tabs -pills-2 pt-40">
      <FilterHousesTabs
        filterOption={filterOption}
        setFilterOption={setFilterOption}
      />
      <div className="tabs__content pt-40">
        <div className="row y-gap-30">
          <FilterHouses filterOption={filterOption} />
        </div>
      </div>
      {/* End .tabs__content */}

      <div className="row justify-center pt-60">
        <div className="col-auto">
          <Link
            to="/listing"
            className="button px-40 h-50 -outline-blue-1 text-blue-1"
          >
            View All <div className="icon-arrow-top-right ml-15" />
          </Link>
        </div>
      </div>
    </div>
  );
}
