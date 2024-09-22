import CallToActions from "@/components/common/CallToActions";
import LoginWithSocial from "@/components/common/LoginWithSocial";
import LoginForm from "@/components/common/LoginForm";

import MetaComponent from "@/components/common/MetaComponent";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { requests } from "@/utils/http";
import { handleChange } from "@/utils/input";
import { toast } from "react-toastify";

const metadata = {
  title: "Login || ClickShelter",
  description: "login || ClickShelter",
};

const ForgetPasswordPage = () => {
  const [errors, setErrors] = useState([]);

  const [loading, setLoading] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
  });

  const navigate = useNavigate();

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    setErrors([]);
    try {
      setLoading(true);
      const response = await requests.post(`/auth/password/forget`, {
        email: userInfo.email,
      });

      toast(response.message);

      navigate("/reset-password", {
        state: {
          email: userInfo.email,
          tokenID: response.data?.token_id,
        },
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);

      if (error?.response?.data?.errors) {
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
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin-blue"></div>
      {/* header top margin */}

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                <form className="row y-gap-20" onSubmit={handleForgetPassword}>
                  <div className="col-12">
                    <h1 className="text-22 fw-500">Request reset password</h1>
                    <p className="mt-10">
                      Don&apos;t have an account yet?{" "}
                      <Link to="/signup" className="text-blue-1">
                        Sign up for free
                      </Link>
                    </p>

                    {errors.length > 0 && (
                      <ul className="tw-text-red-700">
                        {errors.map((error, index) => (
                          <li key={index}>{error}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {/* End .col */}

                  <div className="col-12">
                    <div className="form-input ">
                      <input
                        type="email"
                        required
                        name="email"
                        value={userInfo.name}
                        onChange={(e) => handleChange(e, setUserInfo)}
                      />
                      <label className="lh-1 text-14 text-light-1">Email</label>
                    </div>
                  </div>
                  {/* End .col */}

                  <div className="col-12">
                    <a
                      href="/login"
                      className="text-14 fw-500 text-blue-1 underline"
                    >
                      Have an account?
                    </a>
                  </div>
                  {/* End .col */}

                  <div className="col-12">
                    <button
                      type="submit"
                      href="#"
                      className="button py-20 -dark-1 bg-blue-1 text-white w-100"
                      disabled={loading}
                    >
                      Request reset{" "}
                      <div className="icon-arrow-top-right ml-15" />
                    </button>
                  </div>
                  {/* End .col */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End login section */}

      <CallToActions />
      {/* End Call To Actions Section */}
    </>
  );
};

export default ForgetPasswordPage;
