import React from "react";

const HotelContent = ({ spaceName, setSpaceName, overview, setOverview }) => {
  const handleSpaceNameChange = (event) => {
    setSpaceName(event.target.value);
  };

  const handleOverviewChange = (event) => {
    setOverview(event.target.value);
  };

  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            required
            value={spaceName}
            onChange={handleSpaceNameChange}
          />
          <label className="lh-1 text-16 text-light-1">Space Name</label>
        </div>
      </div>
      {/* End Name */}

      <div className="col-12">
        <div className="form-input">
          <textarea
            required
            rows={5}
            value={overview}
            onChange={handleOverviewChange}
          />
          <label className="lh-1 text-16 text-light-1">Overview</label>
        </div>
      </div>
      {/* End Content */}
    </div>
  );
};

export default HotelContent;
