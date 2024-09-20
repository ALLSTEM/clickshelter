import React, { forwardRef, useEffect, useRef, useState } from "react";
import CustomerInfo from "../CustomerInfo";
import PaymentInfo from "../PaymentInfo";
import OrderSubmittedInfo from "../OrderSubmittedInfo";
import ReservationDetail from "../ReservationDetail";
import axios from "axios";
import { requests } from "@/utils/http";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState([]);
  const formRef = useRef(null);
  const navigate = useNavigate();
  const modalBodyRef = useRef(null);

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    state: "",
    specialRequests: "",
  });
  const [reservationDetails, setReservationDetails] = useState({
    guestCounts: {
      Adults: 0,
      Children: 0,
    },
    propertyType: "",
    location: "",
    specificLocation: "",
    durationOfStay: "",
    moveInDate: null,
    petPreference: "",
    occupation: "",
    budgetMin: "",
    budgetMax: "",
    additionalInfo: "",
    zipCode: "",
  });

  const [loading, setLoading] = useState(false);

  let [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("space_id");

  const [space, setSpace] = useState();

  const closeModal = () => {
    var closeButton = document.querySelector(
      '#exampleModal [data-bs-dismiss="modal"]'
    );
    if (closeButton) {
      closeButton.click();
    }
  };

  useEffect(() => {
    console.log(id);
    const fetchSpace = async () => {
      try {
        setLoading(true);
        const response = await requests.get(`/spaces/${id}`);

        setSpace(response.data);

        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpace();
  }, [id]);

  const formatDate = (timestamp) => {
    console.log(timestamp);

    const date = new Date(timestamp);
    return date.toISOString().split("T")[0]; // Convert to YYYY-MM-DD format
  };

  function formatDateToDDMMYY(timestamp) {
    const date = new Date(timestamp);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year

    return `${day}-${month}-${year}`;
  }

  const handleSubmitRequest = async () => {
    const formData = {
      space_id: id, // Assuming you have a space ID to submit
      guest_adults: reservationDetails.guestCounts.Adults,
      guest_children: reservationDetails.guestCounts.Children,
      move_in_date: formatDateToDDMMYY(reservationDetails.moveInDate), // Assuming dates[0] is the move-in date
      email: userInfo.email,
      address_line_one: userInfo.addressLine1,
      address_line_two: userInfo.addressLine2,
      state: userInfo.state,
      country: "United States", // Hardcoded for this example, replace as needed
      zip_code: reservationDetails.zipCode,
      first_name: userInfo.firstName,
      last_name: userInfo.lastName,
      property_type: reservationDetails.propertyType, // New field
      location: reservationDetails.location, // New field
      specific_location: reservationDetails.specificLocation, // New field
      duration_of_stay: reservationDetails.durationOfStay, // New field
      pet_preference: reservationDetails.petPreference, // New field
      occupation: reservationDetails.occupation, // New field
      budget_min: reservationDetails.budgetMin, // New field
      budget_max: reservationDetails.budgetMax, // New field
      additional_info: reservationDetails.additionalInfo, // New field
      special_requests: userInfo.specialRequests, // New field
    };

    console.log(formData);

    try {
      const response = await requests.post(`/requests`, formData);

      toast.success(response.message);

      setReservationDetails({
        dates: [],
        guestCounts: {
          Adults: 1,
          Children: 1,
        },
        propertyType: "",
        location: "",
        specificLocation: "",
        durationOfStay: "",
        moveInDate: null,
        petPreference: "",
        occupation: "",
        budgetMin: "",
        budgetMax: "",
        additionalInfo: "",
      });

      setUserInfo({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        addressLine1: "",
        addressLine2: "",
        state: "",
        zipCode: "",
        specialRequests: "",
      });

      setCurrentStep(0);

      closeModal();

      if (response?.data) {
        navigate("/confirm-account", {
          state: {
            email: userInfo.email,
            tokenID: response.data.token_id,
          },
        });
      } else {
        navigate("/");
      }

      console.log("Request submitted successfully:", response);
    } catch (error) {
      console.error("There was an error submitting the request:", error);

      modalBodyRef.current.scrollTo({
        top: 100, // Adjust the scroll position as needed
        behavior: "smooth", // Smooth scrolling effect
      });

      toast.error("There was an error submitting the request");

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
    }
  };

  const handleNextClick = () => {
    if (formRef.current) {
      const hiddenSubmitButton = formRef.current.querySelector(
        'button[type="submit"]'
      );
      if (hiddenSubmitButton) {
        hiddenSubmitButton.click();
      }
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    {
      title: "Personal Details",
      stepNo: "1",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: (
        <CustomerInfo
          space={space}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          formRef={formRef}
          nextStep={nextStep}
        />
      ),
    },
    {
      title: "Request Information",
      stepNo: "2",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: (
        <ReservationDetail
          reservationDetails={reservationDetails}
          setReservationDetails={setReservationDetails}
          formRef={formRef}
          nextStep={nextStep}
        />
      ),
    },
    {
      title: "Confirm information",
      stepNo: "3",
      stepBar: "",
      content: (
        <OrderSubmittedInfo
          userInfo={userInfo}
          reservationDetails={reservationDetails}
          isLoggedIn={true}
        />
      ),
    },
  ];

  const renderStep = () => {
    const { content } = steps[currentStep];
    return <>{content}</>;
  };

  return (
    <>
      <div className="modal-body tw-w-full" ref={modalBodyRef}>
        <div className="row x-gap-40 y-gap-30 items-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="col-auto">
                <div
                  className="d-flex items-center cursor-pointer transition"
                  onClick={() => setCurrentStep(index)}
                >
                  <div
                    className={
                      currentStep === index
                        ? "active size-40 rounded-full flex-center bg-blue-1"
                        : "size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500"
                    }
                  >
                    {currentStep === index ? (
                      <>
                        <i className="icon-check text-16 text-white"></i>
                      </>
                    ) : (
                      <>
                        <span>{step.stepNo}</span>
                      </>
                    )}
                  </div>

                  <div className="text-18 fw-500 ml-10"> {step.title}</div>
                </div>
              </div>
              {/* End .col */}

              {step.stepBar}
            </React.Fragment>
          ))}
        </div>
        {/* End stepper header part */}
        <div className="tw-mt-9 errors">
          {errors.length > 0 && (
            <ul className="tw-text-red-700">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="row">{renderStep()}</div>
      </div>

      {/* End main content */}

      <div className="modal-footer">
        <div className="row x-gap-20 y-gap-20 pt-20">
          <div className="col-auto">
            <button
              className="button px-24 tw-py-3 -blue-1 bg-light-2"
              disabled={currentStep === 0}
              onClick={previousStep}
            >
              Previous
            </button>
          </div>
          {/* End prvious btn */}

          <div className="col-auto">
            <button
              className="button tw-py-3 px-24 -dark-1 bg-blue-1 text-white"
              onClick={
                currentStep === steps.length - 1
                  ? handleSubmitRequest
                  : handleNextClick
              }
            >
              {currentStep === steps.length - 1 ? "Request" : "Next"}
            </button>
          </div>
          {/* End next btn */}
        </div>
      </div>

      {/* End stepper button */}
    </>
  );
};

export default Index;
