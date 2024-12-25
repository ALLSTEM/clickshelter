// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import BookingDetails from "./sidebar/BookingDetails";
// import { useSelector } from "react-redux";

// const CustomerInfo = ({ space, userInfo, setUserInfo, formRef, nextStep }) => {
//   const { user } = useSelector((state) => state.auth);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserInfo((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const isFieldDisabled = (fieldName) => {
//     return user && user[fieldName] && user[fieldName].trim() !== "";
//   };

//   useEffect(() => {
//     if (user) {
//       setUserInfo({
//         firstName: user?.first_name || "",
//         lastName: user?.last_name || "",
//         email: user?.email || "",
//         phoneNumber: user?.phone || "",
//         addressLine1: user?.address_line_one || "",
//         addressLine2: user?.active || "",
//         state: user?.state || "",
//         zipCode: user?.zip_code || "",
//       });
//     }
//   }, [user]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     nextStep();
//     // Add your form validation logic here

//     console.log("Form submitted", userInfo);
//     // If validation passes, you can call a function to move to the next step
//   };

//   return (
//     <form ref={formRef} onSubmit={handleSubmit}>
//       <div className="mt-30">
//         {!user && (
//           <div className="py-15 px-20 rounded-4 text-15 bg-blue-1-05">
//             Sign in to book with your saved details or{" "}
//             <Link to="/signup" className="text-blue-1 fw-500">
//               register
//             </Link>{" "}
//             to manage your bookings on the go!
//           </div>
//         )}

//         {/* End register notify */}

//         <h2 className="text-22 fw-500 mt-40 md:mt-24">
//           Let us know who you are
//         </h2>

//         <div className="row x-gap-20 y-gap-20 pt-20">
//           <div className="col-6">
//             <div className="form-input">
//               <input
//                 type="text"
//                 name="firstName"
//                 value={user?.first_name || userInfo.firstName || ""}
//                 onChange={handleChange}
//                 required
//                 disabled={isFieldDisabled("first_name")}
//               />
//               <label className="lh-1 text-16 text-light-1">First Name</label>
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="form-input">
//               <input
//                 type="text"
//                 name="lastName"
//                 value={userInfo.lastName}
//                 onChange={handleChange}
//                 required
//                 disabled={isFieldDisabled("last_name")}
//               />
//               <label className="lh-1 text-16 text-light-1">Last Name</label>
//             </div>
//           </div>
//           {/* End col-12 */}

//           <div className="col-md-6">
//             <div className="form-input">
//               <input
//                 type="email"
//                 name="email"
//                 value={userInfo.email}
//                 onChange={handleChange}
//                 required
//                 disabled={isFieldDisabled("email")}
//               />
//               <label className="lh-1 text-16 text-light-1">Email</label>
//             </div>
//           </div>
//           {/* End col-12 */}

//           <div className="col-md-6">
//             <div className="form-input">
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 value={userInfo.phoneNumber}
//                 onChange={handleChange}
//                 required
//                 disabled={isFieldDisabled("phone")}
//               />
//               <label className="lh-1 text-16 text-light-1">Phone Number</label>
//             </div>
//           </div>
//           {/* End col-12 */}

//           <div className="col-12">
//             <div className="form-input">
//               <input
//                 type="text"
//                 name="addressLine1"
//                 value={userInfo.addressLine1}
//                 onChange={handleChange}
//                 required
//                 disabled={isFieldDisabled("address_line_one")}
//               />
//               <label className="lh-1 text-16 text-light-1">
//                 Address line 1
//               </label>
//             </div>
//           </div>
//           {/* End col-12 */}

//           <div className="col-12">
//             <div className="form-input">
//               <input
//                 type="text"
//                 name="addressLine2"
//                 value={userInfo.addressLine2}
//                 onChange={handleChange}
//                 disabled={isFieldDisabled("address_line_two")}
//               />
//               <label className="lh-1 text-16 text-light-1">
//                 Address line 2
//               </label>
//             </div>
//           </div>
//           {/* End col-12 */}

//           <div className="col-12">
//             <div className="form-input">
//               <input
//                 type="text"
//                 name="state"
//                 value={userInfo.state}
//                 onChange={handleChange}
//                 disabled={isFieldDisabled("state")}
//               />
//               <label className="lh-1 text-16 text-light-1">
//                 State/Province/Region
//               </label>
//             </div>
//           </div>

//           {/* End col-12 */}

//           <div className="col-12">
//             <div className="form-input">
//               <textarea
//                 name="specialRequests"
//                 value={userInfo.specialRequests}
//                 onChange={handleChange}
//                 rows={6}
//               />
//               <label className="lh-1 text-16 text-light-1">
//                 Special Requests
//               </label>
//             </div>
//           </div>
//           {/* End col-12 */}

//           <div className="col-12">
//             <div className="row y-gap-20 items-center justify-between">
//               <div className="col-auto">
//                 <div className="text-14 text-light-1">
//                   By proceeding with this booking, I agree to ClickShelter Terms
//                   of Use and Privacy Policy.
//                 </div>
//               </div>
//               {/* End col-12 */}
//             </div>
//           </div>
//           {/* End col-12 */}
//         </div>
//         {/* End .row */}
//       </div>
//       {/* End .col-xl-7 */}

//       <div className="col-xl-5 col-lg-4 mt-30">
//         <div className="booking-sidebar">
//           {space && <BookingDetails space={space} />}
//         </div>
//       </div>
//       <button type="submit" style={{ display: "none" }}>
//         Submit
//       </button>
//       {/*  */}
//     </form>
//   );
// };

// export default CustomerInfo;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BookingDetails from "./sidebar/BookingDetails";
import { useSelector } from "react-redux";

const CustomerInfo = ({ space, userInfo, setUserInfo, formRef, nextStep }) => {
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
        phoneCode: user?.phone_code || "+1",
        phoneNumber: user?.phone || "",
        addressLine1: user?.address_line_one || "",
        addressLine2: user?.active || "",
        state: user?.state || "",
        zipCode: user?.zip_code || "",
      });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
    console.log("Form submitted", userInfo);
  };

  // Common country codes
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

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
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

          <div className="col-md-6">
            <div className="form-input">
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                required
                disabled={isFieldDisabled("email")}
              />
              <label className="lh-1 text-16 text-light-1">Email</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-input flex">
              <select
                name="phoneCode"
                value={userInfo.phoneCode || "+1"}
                onChange={handleChange}
                className="w-10 border-r mr-2 tw-w-2/5 tw-p-0"
                disabled={isFieldDisabled("phone")}
              >
                {phoneCodes.map((pc) => (
                  <option key={pc.code} value={pc.code}>
                    {pc.code}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="phoneNumber"
                value={userInfo.phoneNumber}
                onChange={handleChange}
                required
                disabled={isFieldDisabled("phone")}
                className="flex-1 tw-w-1/3"
              />
              <label className="lh-1 text-16 text-light-1">Phone Number</label>
            </div>
          </div>

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

          <div className="col-12">
            <div className="form-input">
              <input
                type="text"
                name="addressLine2"
                value={userInfo.addressLine2}
                onChange={handleChange}
                disabled={isFieldDisabled("address_line_two")}
              />
              <label className="lh-1 text-16 text-light-1">
                Address line 2
              </label>
            </div>
          </div>

          <div className="col-12">
            <div className="form-input">
              <input
                type="text"
                name="state"
                value={userInfo.state}
                onChange={handleChange}
                disabled={isFieldDisabled("state")}
              />
              <label className="lh-1 text-16 text-light-1">
                State/Province/Region
              </label>
            </div>
          </div>

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

          <div className="col-12">
            <div className="row y-gap-20 items-center justify-between">
              <div className="col-auto">
                <div className="text-14 text-light-1">
                  By proceeding with this booking, I agree to ClickShelter Terms
                  of Use and Privacy Policy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-5 col-lg-4 mt-30">
        <div className="booking-sidebar">
          {space && <BookingDetails space={space} />}
        </div>
      </div>
      <button type="submit" style={{ display: "none" }}>
        Submit
      </button>
    </form>
  );
};

export default CustomerInfo;
