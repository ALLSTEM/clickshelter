import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authRequests } from "@/utils/http";
import { toast } from "react-toastify";
import { loginUser, updateUser } from "@/features/auth/authSlice";

const LocationInfo = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [locationData, setLocationData] = useState({
    address_line_one: user?.address_line_one || "",
    address_line_two: user?.address_line_two || "",
    city: user?.city || "",
    state: user?.state || "",
    country: user?.country || "",
    zip_code: user?.zip_code || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocationData({ ...locationData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authRequests.put(`/user/profile`, locationData);

      dispatch(updateUser(response.data));

      toast.success("Location updated successfully!");
    } catch (error) {
      console.log(error);

      toast.error("Failed to update location.");
    }
  };

  return (
    <form className="col-xl-9" onSubmit={handleSubmit}>
      <div className="row x-gap-20 y-gap-20">
        <div className="col-12">
          <div className="form-input ">
            <input
              type="text"
              name="address_line_one"
              value={locationData.address_line_one}
              onChange={handleInputChange}
            />
            <label className="lh-1 text-16 text-light-1">Address Line 1</label>
          </div>
        </div>
        {/* End col-12 */}

        <div className="col-12">
          <div className="form-input ">
            <input
              type="text"
              name="address_line_two"
              value={locationData.address_line_two}
              onChange={handleInputChange}
            />
            <label className="lh-1 text-16 text-light-1">Address Line 2</label>
          </div>
        </div>
        {/* End col-12 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input
              type="text"
              name="city"
              value={locationData.city}
              onChange={handleInputChange}
            />
            <label className="lh-1 text-16 text-light-1">City</label>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input
              type="text"
              name="state"
              value={locationData.state}
              onChange={handleInputChange}
            />
            <label className="lh-1 text-16 text-light-1">State</label>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input
              type="text"
              name="country"
              value={locationData.country}
              onChange={handleInputChange}
            />
            <label className="lh-1 text-16 text-light-1">Country</label>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-md-6">
          <div className="form-input ">
            <input
              type="text"
              name="zip_code"
              value={locationData.zip_code}
              onChange={handleInputChange}
            />
            <label className="lh-1 text-16 text-light-1">ZIP Code</label>
          </div>
        </div>
        {/* End col-6 */}

        <div className="col-12">
          <div className="d-inline-block">
            <button
              type="submit"
              className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
            >
              Save Changes <div className="icon-arrow-top-right ml-15" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LocationInfo;
