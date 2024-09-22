import React, { useState } from "react";
import { useSelector } from "react-redux";
import AvatarUploader from "./AvatarUploader";
import { authRequests } from "@/utils/http";
import { toast } from "react-toastify";

const PersonalInfo = () => {
  const { user } = useSelector((state) => state.auth);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    about: user?.about || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    try {
      await authRequests.put(`/user/profile`, formData);
      toast.success("Profile updated successfully!");
    } catch (error) {
      if (error.response.data.errors) {
        const errorMessages = [];
        for (const key in error.response.data.errors) {
          if (error.response.data.errors.hasOwnProperty(key)) {
            errorMessages.push(...error.response.data.errors[key]);
          }
        }
        setErrors(errorMessages);
      } else {
        setErrors([error.response.data.message]);
      }

      toast.error("Failed to update profile.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {errors.length > 0 && (
          <ul className="tw-text-red-700">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        <div className="col-xl-9">
          <div className="row x-gap-20 y-gap-20">
            <div className="col-md-6">
              <div className="form-input ">
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  required
                />
                <label className="lh-1 text-16 text-light-1">First Name</label>
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  required
                />
                <label className="lh-1 text-16 text-light-1">Last Name</label>
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <label className="lh-1 text-16 text-light-1">Email</label>
              </div>
            </div>
            {/* End col-6 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <label className="lh-1 text-16 text-light-1">
                  Phone Number
                </label>
              </div>
            </div>
            {/* End col-6 */}
          </div>
        </div>
        {/* End col-xl-9 */}

        <div className="d-inline-block pt-30">
          <button
            type="submit"
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          >
            Save Changes <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
