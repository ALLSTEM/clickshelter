import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { authRequests, requests } from "@/utils/http";

const PasswordInfo = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState([]);

  const userId = useSelector((state) => state.auth.user.id);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match.");
      return;
    }

    try {
      const response = await authRequests.put("/user/profile/update-password", {
        current_password: currentPassword,
        new_password: newPassword,
      });

      setNewPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setErrors([]);
      toast.success(response.message);
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

      setError("An error occurred while updating the password.");
    } finally {
    }
  };

  return (
    <form className="col-xl-9" onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <ul className="tw-text-red-700">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      <div className="row x-gap-20 y-gap-20">
        <div className="col-12">
          <div className="form-input">
            <input
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <label className="lh-1 text-16 text-light-1">
              Current Password
            </label>
          </div>
        </div>

        <div className="col-12">
          <div className="form-input">
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <label className="lh-1 text-16 text-light-1">New Password</label>
          </div>
        </div>

        <div className="col-12">
          <div className="form-input">
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label className="lh-1 text-16 text-light-1">
              New Password Again
            </label>
          </div>
        </div>

        {error && (
          <div className="col-12">
            <p className="text-red-500">{error}</p>
          </div>
        )}
        {success && (
          <div className="col-12">
            <p className="text-green-500">{success}</p>
          </div>
        )}

        <div className="col-12">
          <div className="row x-gap-10 y-gap-10">
            <div className="col-auto">
              <button
                type="submit"
                className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
              >
                Save Changes <div className="icon-arrow-top-right ml-15" />
              </button>
            </div>
            <div className="col-auto">
              <button
                type="button"
                className="button h-50 px-24 -blue-1 bg-blue-1-05 text-blue-1"
                onClick={() => {
                  setCurrentPassword("");
                  setNewPassword("");
                  setConfirmPassword("");
                  setError("");
                  setSuccess("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PasswordInfo;
