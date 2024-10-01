import { loginUser } from "@/features/auth/authSlice";
import { requests } from "@/utils/http";
import { handleChange } from "@/utils/input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [error, setError] = useState();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(undefined);
    try {
      setLoading(true);
      const response = await requests.post(`/auth/login`, {
        email: userInfo.email,
        password: userInfo.password,
      });

      Cookies.set("authToken", response.data.token);

      toast("Login successful");

      dispatch(loginUser(response.data));
      console.log(response.data.user.type);
      switch (response.data.user.type) {
        case "user":
          navigate("/dashboard/user");
          break;
        case "admin":
          navigate("/dashboard/admin");
          break;
        case "host":
          navigate("/dashboard/host");
          break;
        default:
          break;
      }

      console.log(response.data);
    } catch (error) {
      console.log(error);

      setError(error.response.data.message);

      if (error.response.data?.data?.token_id) {
        navigate("/confirm-account", {
          state: {
            email: userInfo.email,
            tokenID: error.response.data?.data?.token_id,
          },
        });
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="row y-gap-20" onSubmit={handleLogin}>
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Don&apos;t have an account yet?{" "}
          <Link to="/signup" className="text-blue-1">
            Sign up for free
          </Link>
        </p>
        <p className="tw-text-red-700">{error}</p>
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
        <div className="form-input ">
          <input
            type="password"
            required
            value={userInfo.name}
            onChange={(e) => handleChange(e, setUserInfo)}
            name="password"
          />
          <label className="lh-1 text-14 text-light-1">Password</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <a
          href="/forget-password"
          className="text-14 fw-500 text-blue-1 underline"
        >
          Forgot your password?
        </a>
      </div>
      {/* End .col */}

      <div className="col-12">
        <button
          type="submit"
          href="#"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign In <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default LoginForm;
