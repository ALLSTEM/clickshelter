import React from "react";

const Location = ({
  address,
  setAddress,
  country,
  setCountry,
  state,
  setState,
  latitude,
  setLatitude,
  longitude,
  setLongitude,
}) => {
  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label className="lh-1 text-16 text-light-1">Address</label>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="form-input">
          <input
            type="text"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <label className="lh-1 text-16 text-light-1">Country</label>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="form-input">
          <input
            type="text"
            required
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <label className="lh-1 text-16 text-light-1">State</label>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="form-input">
          <input
            type="text"
            required
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
          <label className="lh-1 text-16 text-light-1">Map Latitude</label>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="form-input">
          <input
            type="text"
            required
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
          <label className="lh-1 text-16 text-light-1">Map Longitude</label>
        </div>
      </div>
    </div>
  );
};

export default Location;
