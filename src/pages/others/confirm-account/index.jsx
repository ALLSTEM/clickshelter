import React, { useState } from "react";
import PinInput from "react-pin-input";
import { useLocation, useNavigate } from "react-router-dom";
import { requests } from "@/utils/http";
import { toast } from "react-toastify"; // Ensure you have react-toastify installed
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Confirm Account || ClickShelter",
  description: "Confirm Account || ClickShelter",
};

const ConfirmAccount = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, tokenID } = location.state || {};
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [errors, setErrors] = useState([]);

  const handleConfirm = async (e) => {
    e.preventDefault();
    setError(undefined);

    try {
      setLoading(true);
      const response = await requests.post(`/auth/register/confirm`, {
        email,
        token: pin,
        token_id: tokenID,
      });

      console.log("Account confirmed:", response.data);
      toast("Account confirmed successfully! Please login to continue");

      navigate("/login"); // Redirect to login page after confirmation
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
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin-blue"></div>

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                {errors.length > 0 && (
                  <ul className="tw-text-red-700">
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                )}
                <form className="row y-gap-20" onSubmit={handleConfirm}>
                  <h1 className="text-22 fw-500">Confirm Your Account</h1>
                  {email ? (
                    <p>
                      A confirmation email has been sent to{" "}
                      <strong>{email}</strong>. Please check your email and
                      follow the instructions to confirm your account.
                    </p>
                  ) : (
                    <p>
                      A confirmation email has been sent. Please check your
                      email and follow the instructions to confirm your account.
                    </p>
                  )}
                  <p className="tw-text-red-700">{error}</p>

                  <div className="col-12 tw-flex tw-justify-center">
                    <PinInput
                      length={4}
                      secretDelay={100}
                      onChange={(value) => setPin(value)}
                      type="numeric"
                      inputMode="number"
                      style={{ padding: "10px" }}
                      inputStyle={{ borderColor: "red" }}
                      inputFocusStyle={{ borderColor: "blue" }}
                      onComplete={(value) => setPin(value)}
                      autoSelect={true}
                      regexCriteria={/^[0-9]*$/}
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="button py-20 -dark-1 bg-blue-1 text-white w-100"
                      disabled={loading}
                    >
                      Confirm Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmAccount;
