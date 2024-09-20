import React from "react";
import DatePicker from "react-multi-date-picker";
import GuestSearch from "../house-list/common/GuestSearch";
import { useEffect } from "react";

const ReservationDetail = ({
  reservationDetails,
  setReservationDetails,
  formRef,
  nextStep,
}) => {
  useEffect(() => {
    // This effect runs whenever the guestCounts value changes
    console.log("guestCounts updated: ", reservationDetails.guestCounts);
  }, [reservationDetails.guestCounts]);

  const handleDateChange = (dates) => {
    setReservationDetails((prevState) => ({
      ...prevState,
      dates,
    }));
  };

  const handleGuestChange = (guestCounts) => {
    setReservationDetails((prevState) => ({
      ...prevState,
      guestCounts,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    nextStep();
    // Add your form validation logic here

    console.log("Form submitted", reservationDetails);
    // If validation passes, you can call a function to move to the next step
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="tw-container tw-m-auto flex tw-flex-col tw-p-10"
    >
      <div className="tw-mb-4">
        <div className="form-input">
          <select
            name="propertyType"
            className="!tw-w-full "
            value={reservationDetails.propertyType || ""}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Type
            </option>
            <option value="share apartment - 1 room">
              Shared apartment (1 room)
            </option>
            <option value="1 bedroom flat/house">1 bedroom flat/house</option>
            <option value="2 bedroom flat/house">2 bedroom flat/house</option>
            <option value="3 bedroom flat/house">3 bedroom flat/house</option>
            <option value="4 bedroom flat/house">4 bedroom flat/house</option>
          </select>
          {/* <label className="lh-1 text-16 text-light-1">Select Type</label> */}
        </div>
      </div>

      <div className="tw-mb-4">
        <div className="form-input">
          <select
            name="location"
            className="tw-w-full"
            value={reservationDetails.location || ""}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Location
            </option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
          </select>
          {/* <label className="lh-1 text-16 text-light-1">Select Location</label> */}
        </div>
      </div>

      <div className="tw-mb-4">
        <div className="form-input">
          <input
            type="text"
            name="specificLocation"
            className="tw-w-full tw-bg-gray-100 tw-border tw-rounded-lg tw-p-3"
            value={reservationDetails.specificLocation || ""}
            onChange={handleChange}
            placeholder="Enter specific location"
            required
          />
          <label className="lh-1 text-16 text-light-1">Specify Location</label>
        </div>
      </div>

      <div className="tw-mb-4">
        <div className="form-input">
          <input
            type="text"
            name="zipCode"
            value={reservationDetails.zipCode}
            onChange={handleChange}
            required
          />
          <label className="lh-1 text-16 text-light-1">Post code</label>
        </div>
      </div>

      <div className="tw-mb-4">
        <div className="form-input">
          <input
            type="text"
            name="durationOfStay"
            className="tw-w-full tw-bg-gray-100 tw-border tw-rounded-lg tw-p-3"
            value={reservationDetails.durationOfStay || ""}
            onChange={handleChange}
            placeholder="Enter duration of stay in months"
            required
          />
          <label className="lh-1 text-16 text-light-1">Duration Of Stay</label>
        </div>
      </div>

      <div className="tw-mb-4">
        <div className="form-input">
          <DatePicker
            inputClass="custom_input-picker"
            containerClassName="custom_container-picker !tw-w-full"
            value={reservationDetails.moveInDate}
            onChange={(date) =>
              setReservationDetails((prevState) => ({
                ...prevState,
                moveInDate: date,
              }))
            }
            offsetY={10}
            format="MMMM DD, YYYY"
            required
          />
          <label className="lh-1 text-16 text-light-1">
            Expected Move-in Date
          </label>
        </div>
      </div>

      <div className="tw-mb-4">
        <div className="form-input">
          <select
            name="petPreference"
            className="tw-w-full "
            value={reservationDetails.petPreference || ""}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Pet Preference
            </option>
            <option value="no_pet">No Pet</option>
            <option value="with_pet">With Pet</option>
          </select>
          {/* <label className="lh-1 text-16 text-light-1">Pet or No Pet?</label> */}
        </div>
      </div>

      <div className="tw-mb-4">
        <div className="form-input">
          <input
            type="text"
            name="occupation"
            className="tw-w-full tw-bg-gray-100 tw-border tw-rounded-lg tw-p-3"
            value={reservationDetails.occupation || ""}
            onChange={handleChange}
            placeholder="Enter your occupation"
          />
          <label className="lh-1 text-16 text-light-1">Occupation</label>
        </div>
      </div>

      <div className="tw-mb-4">
        <div className="tw-flex tw-space-x-3">
          <div className="form-input !tw-w-full">
            <input
              type="text"
              name="budgetMin"
              className="tw-w-full tw-bg-gray-100 tw-border tw-rounded-lg tw-p-3"
              value={reservationDetails.budgetMin || ""}
              onChange={handleChange}
              placeholder="Min Budget"
            />
            <label className="lh-1 text-16 text-light-1">Min Budget</label>
          </div>
          <div className="form-input !tw-w-full">
            <input
              type="text"
              name="budgetMax"
              className="tw-w-full tw-bg-gray-100 tw-border tw-rounded-lg tw-p-3"
              value={reservationDetails.budgetMax || ""}
              onChange={handleChange}
              placeholder="Max Budget"
            />
            <label className="lh-1 text-16 text-light-1">Max Budget</label>
          </div>
        </div>
      </div>

      <div className="tw-mb-4">
        <div className="form-input">
          <textarea
            name="additionalInfo"
            className="tw-w-full"
            value={reservationDetails.additionalInfo || ""}
            onChange={handleChange}
            placeholder="Enter any additional information"
          />
        </div>
      </div>

      <div className="tw-mb-4">
        <p className="lh-1 text-16 text-light-1">Select Guest Number</p>
        <GuestSearch
          guestCounts={reservationDetails.guestCounts}
          onGuestChange={handleGuestChange}
        />
      </div>
      <button type="submit" style={{ display: "none" }}>
        Submit
      </button>
    </form>
  );
};

export default ReservationDetail;
