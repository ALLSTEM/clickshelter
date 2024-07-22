import Education from "./location/Education";
import Health from "./location/Health";
import Location from "./location/Location";
import Sorroundings from "./location/Sorroundings";
import Transportation from "./location/Transportation";

const LocationTabContent = ({
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
    <div className="col-xl-10">
      <div className="text-18 fw-500 mb-10">Location</div>
      <Location
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
      />
    </div>
  );
};

export default LocationTabContent;
