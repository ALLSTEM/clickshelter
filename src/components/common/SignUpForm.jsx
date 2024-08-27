import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { requests } from "@/utils/http";
import { handleChange } from "@/utils/input";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const initialUserInfo = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    addressLine1: "",
    addressLine2: "",
    state: "",
    country: "",
  };
  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    console.log("asnsjknjwe");
    e.preventDefault();
    setError(undefined);

    try {
      setLoading(true);
      const response = await requests.post(`/auth/register`, {
        first_name: userInfo.firstName,
        last_name: userInfo.lastName,
        email: userInfo.email,
        password: userInfo.password,
        password_confirmation: userInfo.confirmPassword,
        address_line_one: userInfo.addressLine1,
        address_line_two: userInfo.addressLine2,
        state: userInfo.state,
        country: userInfo.country,
      });

      console.log("Registration successful:", response.data);

      toast(response.message);
      setUserInfo(initialUserInfo);

      navigate("/confirm-account", {
        state: {
          email: userInfo.email,
          tokenID: response.data.token_id,
        },
      });
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
    <form className="row y-gap-20" onSubmit={handleRegister}>
      <div className="col-12">
        <h1 className="text-22 fw-500">Sign Up</h1>
        <p className="mt-10">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-1">
            Log in
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

      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            required
            name="firstName"
            value={userInfo.firstName}
            onChange={(e) => handleChange(e, setUserInfo)}
          />
          <label className="lh-1 text-14 text-light-1">First Name</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            required
            name="lastName"
            value={userInfo.lastName}
            onChange={(e) => handleChange(e, setUserInfo)}
          />
          <label className="lh-1 text-14 text-light-1">Last Name</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input
            type="email"
            required
            name="email"
            value={userInfo.email}
            onChange={(e) => handleChange(e, setUserInfo)}
          />
          <label className="lh-1 text-14 text-light-1">Email</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input
            type="password"
            required
            name="password"
            value={userInfo.password}
            onChange={(e) => handleChange(e, setUserInfo)}
          />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input
            type="password"
            required
            name="confirmPassword"
            value={userInfo.confirmPassword}
            onChange={(e) => handleChange(e, setUserInfo)}
          />
          <label className="lh-1 text-14 text-light-1">Confirm Password</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            name="addressLine1"
            value={userInfo.addressLine1}
            onChange={(e) => handleChange(e, setUserInfo)}
          />
          <label className="lh-1 text-14 text-light-1">Address Line 1</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            name="addressLine2"
            value={userInfo.addressLine2}
            onChange={(e) => handleChange(e, setUserInfo)}
          />
          <label className="lh-1 text-14 text-light-1">Address Line 2</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            name="state"
            value={userInfo.state}
            onChange={(e) => handleChange(e, setUserInfo)}
          />
          <label className="lh-1 text-14 text-light-1">State</label>
        </div>
      </div>

      <div className="col-12">
        <div className="form-input">
          <input
            type="text"
            name="country"
            value={userInfo.country}
            onChange={(e) => handleChange(e, setUserInfo)}
          />
          <label className="lh-1 text-14 text-light-1">Country</label>
        </div>
      </div>

      <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
          disabled={loading}
        >
          Sign Up <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
