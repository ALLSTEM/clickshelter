import React, { useState } from "react";
import { useSelector } from "react-redux";
import AvatarUploader from "./AvatarUploader";
import { authRequests } from "@/utils/http";
import { toast } from "react-toastify";

const PersonalInfo = () => {
  const phoneCodes = [
    { code: "+1", country: "US/CA" },
    { code: "+44", country: "UK" },
    { code: "+234", country: "Nigeria" },
    { code: "+91", country: "India" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
    { code: "+82", country: "South Korea" },
    { code: "+61", country: "Australia" },
    { code: "+64", country: "New Zealand" },
    { code: "+27", country: "South Africa" },
    { code: "+55", country: "Brazil" },
    { code: "+52", country: "Mexico" },
    { code: "+33", country: "France" },
    { code: "+49", country: "Germany" },
    { code: "+39", country: "Italy" },
    { code: "+34", country: "Spain" },
    { code: "+7", country: "Russia" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+971", country: "UAE" },
    { code: "+65", country: "Singapore" },
    { code: "+60", country: "Malaysia" },
    { code: "+62", country: "Indonesia" },
    { code: "+20", country: "Egypt" },
    { code: "+254", country: "Kenya" },
  ];

  const { user } = useSelector((state) => state.auth);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    phone_code: user?.phone_code || "",
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

            {/* <div className="col-md-6">
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
            </div> */}
            <div className="col-md-6">
              <div className="form-input flex">
                <select
                  name="phone_code"
                  value={formData.phone_code || "+1"}
                  onChange={handleInputChange}
                  className="w-10 border-r mr-2 tw-w-2/5 tw-p-0"
                >
                  {phoneCodes.map((pc) => (
                    <option key={pc.code} value={pc.code}>
                      {pc.code}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="flex-1 tw-w-1/3"
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
