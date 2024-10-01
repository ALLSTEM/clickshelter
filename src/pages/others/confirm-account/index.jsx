import React, { useState, useEffect } from "react";
import PinInput from "react-pin-input";
import { useLocation, useNavigate } from "react-router-dom";
import { requests } from "@/utils/http";
import { toast } from "react-toastify";
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
  const [countdown, setCountdown] = useState(12); // 2 minutes in seconds
  const [canResend, setCanResend] = useState(false);

  const [localTokenId, setLocalTokenId] = useState();

  useEffect(() => {
    setLocalTokenId(tokenID);
  }, [tokenID]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          setCanResend(true);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleConfirm = async (e) => {
    e.preventDefault();
    setError(undefined);
    setErrors([]);

    try {
      setLoading(true);
      const response = await requests.post(`/auth/register/confirm`, {
        email,
        token: pin,
        token_id: localTokenId,
      });

      console.log("Account confirmed:", response.data);
      toast.success("Account confirmed successfully! Please login to continue");

      navigate("/login");
    } catch (error) {
      if (error.response?.data?.errors) {
        const errorMessages = Object.values(error.response.data.errors).flat();
        setErrors(errorMessages);
      } else {
        setErrors([error.response?.data?.message || "An error occurred"]);
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      setLoading(true);
      const response = await requests.post(`/auth/register/token/resent`, {
        token_id: localTokenId,
      });

      console.log(response);

      setLocalTokenId(response.data.token_id);

      toast.success("OTP resent successfully");
      setCountdown(120);
      setCanResend(false);
      setErrors([]);
    } catch (error) {
      if (error.response?.data?.errors) {
        const errorMessages = Object.values(error.response.data.errors).flat();
        setErrors(errorMessages);
      } else {
        toast.error(error.response?.data?.message);
        setErrors([error.response?.data?.message || "An error occurred"]);
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MetaComponent meta={metadata} />
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
                      enter the OTP below to confirm your account.
                    </p>
                  ) : (
                    <p>
                      A confirmation email has been sent. Please check your
                      email and enter the OTP below to confirm your account.
                    </p>
                  )}

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

                  <div className="col-12 tw-text-center">
                    <p>
                      <button
                        type="button"
                        onClick={handleResendOTP}
                        className="tw-text-blue-500 tw-underline"
                        disabled={loading}
                      >
                        Resend OTP
                      </button>
                    </p>
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
