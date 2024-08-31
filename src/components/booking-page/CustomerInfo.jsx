import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BookingDetails from "./sidebar/BookingDetails";
import { useSelector } from "react-redux";

const CustomerInfo = ({ space, userInfo, setUserInfo }) => {
  const { user } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const isFieldDisabled = (fieldName) => {
    return user && user[fieldName] && user[fieldName].trim() !== "";
  };

  useEffect(() => {
    if (user) {
      setUserInfo({
        firstName: user?.first_name || "",
        lastName: user?.last_name || "",
        email: user?.email || "",
        phoneNumber: user?.phone || "",
        addressLine1: user?.address_line_one || "",
        addressLine2: user?.active || "",
        state: user?.state || "",
        zipCode: user?.zip_code || "",
      });
    }
  }, [user]);

  return (
    <>
      <div className="mt-30">
        {!user && (
          <div className="py-15 px-20 rounded-4 text-15 bg-blue-1-05">
            Sign in to book with your saved details or{" "}
            <Link to="/signup" className="text-blue-1 fw-500">
              register
            </Link>{" "}
            to manage your bookings on the go!
          </div>
        )}

        {/* End register notify */}

        <h2 className="text-22 fw-500 mt-40 md:mt-24">
          Let us know who you are
        </h2>

        <div className="row x-gap-20 y-gap-20 pt-20">
          <div className="col-6">
            <div className="form-input">
              <input
                type="text"
                name="firstName"
                value={user?.first_name || userInfo.firstName || ""}
                onChange={handleChange}
                required
                disabled={isFieldDisabled("first_name")}
              />
              <label className="lh-1 text-16 text-light-1">First Name</label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-input">
              <input
                type="text"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleChange}
                required
                disabled={isFieldDisabled("last_name")}
              />
              <label className="lh-1 text-16 text-light-1">Last Name</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input">
              <input
                type="text"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                required
                disabled={isFieldDisabled("email")}
              />
              <label className="lh-1 text-16 text-light-1">Email</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input">
              <input
                type="text"
                name="phoneNumber"
                value={userInfo.phoneNumber}
                onChange={handleChange}
                required
                disabled={isFieldDisabled("phone")}
              />
              <label className="lh-1 text-16 text-light-1">Phone Number</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input">
              <input
                type="text"
                name="addressLine1"
                value={userInfo.addressLine1}
                onChange={handleChange}
                required
                disabled={isFieldDisabled("address_line_one")}
              />
              <label className="lh-1 text-16 text-light-1">
                Address line 1
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input">
              <input
                type="text"
                name="addressLine2"
                value={userInfo.addressLine2}
                onChange={handleChange}
                required
                disabled={isFieldDisabled("address_line_two")}
              />
              <label className="lh-1 text-16 text-light-1">
                Address line 2
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input">
              <input
                type="text"
                name="state"
                value={userInfo.state}
                onChange={handleChange}
                required
                disabled={isFieldDisabled("state")}
              />
              <label className="lh-1 text-16 text-light-1">
                State/Province/Region
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input">
              <input
                type="text"
                name="zipCode"
                value={userInfo.zipCode}
                onChange={handleChange}
                required
                disabled={isFieldDisabled("zip_code")}
              />
              <label className="lh-1 text-16 text-light-1">Post code</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input">
              <textarea
                name="specialRequests"
                value={userInfo.specialRequests}
                onChange={handleChange}
                rows={6}
              />
              <label className="lh-1 text-16 text-light-1">
                Special Requests
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="row y-gap-20 items-center justify-between">
              <div className="col-auto">
                <div className="text-14 text-light-1">
                  By proceeding with this booking, I agree to ClickShelter Terms
                  of Use and Privacy Policy.
                </div>
              </div>
              {/* End col-12 */}
            </div>
          </div>
          {/* End col-12 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col-xl-7 */}

      <div className="col-xl-5 col-lg-4 mt-30">
        <div className="booking-sidebar">
          {space && <BookingDetails space={space} />}
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default CustomerInfo;
