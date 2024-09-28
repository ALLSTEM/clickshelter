import { authRequests } from "@/utils/http";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SingleRequest = () => {
  const [requestData, setRequestData] = useState(null);
  const [loading, setLoading] = useState(false);

  let params = useParams();
  const id = params.id;

  const nav = useNavigate();

  const closeModal = () => {
    var closeButton = document.querySelector(
      '#assignModal [data-bs-dismiss="modal"]'
    );
    if (closeButton) {
      closeButton.click();
    }
  };

  useEffect(() => {
    async function getRequest() {
      try {
        const response = await authRequests.get(`/admin/requests/${id}`);
        console.log(response.data);

        setRequestData(response.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }

    getRequest();
  }, [id]);

  async function assignRequest() {
    try {
      setLoading(true);
      const response = await authRequests.post(
        `/admin/requests/${id}/assign`,
        {}
      );

      closeModal();

      toast.success(response.message);

      const responseTwo = await authRequests.get(`/admin/requests/${id}`);

      setRequestData(responseTwo.data);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  if (!requestData) {
    return <div>Loading...</div>;
  }

  const { user, space, administrator } = requestData;

  return (
    <div className="tw-bg-white tw-rounded-lg tw-p-4">
      <div
        class="modal fade"
        id="assignModal"
        tabindex="-1"
        aria-labelledby="assignModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="assignModal">
                Assign Request To Yourself
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Are you sure you want to assign this request to yourself? The
              requester will be notified of your interest in their request
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => assignRequest()}
                type="button"
                class="btn btn-primary"
              >
                {loading ? "Assigning..." : " Assign to Me"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <h4 className="text-20 fw-500 mb-30">User Information</h4>
      {user ? (
        <div className="row y-gap-10">
          <div className="col-12">
            <div className="d-flex justify-between">
              <div className="text-15 lh-16">First name</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {user.first_name || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Last name</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {user.last_name || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Email</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {user.email || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Status</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {user.status || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Address Line One</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {user.address_line_one || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Address Line Two</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {user.address_line_two || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Country</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {user.country || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Date of Birth</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {user.date_of_birth || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Occupation</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {user.occupation || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Phone</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {user.phone || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Phone Code</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {user.phone_code || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">State</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {user.state || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Post Code</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {user.zip_code || "Info not available"}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>User not found</p>
      )}

      <h4 className="text-20 fw-500 mb-30 tw-mt-7">Reservation Details</h4>

      {requestData ? (
        <div className="row y-gap-10">
          <div className="col-12">
            <div className="d-flex justify-between">
              <div className="text-15 lh-16">Guest Adults</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {requestData.guest_adults || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Guest Children</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {requestData.guest_children || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Payment Status</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {requestData.payment_status || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Move-In Date</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {requestData.move_in_date || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Move-Out Date</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {requestData.move_out_date || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Property Type</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {requestData.property_type || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Duration of Stay</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {requestData.duration_of_stay || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Pet Preference</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {requestData.pet_preference || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Budget Min</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {requestData.budget_min
                  ? requestData.budget_min
                  : "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Budget Max</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {requestData.budget_max
                  ? requestData.budget_max
                  : "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Additional Info</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {requestData.additional_info || "Info not available"}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Request data not found</p>
      )}

      <h4 className="text-20 fw-500 mb-30 tw-mt-7">Space Information</h4>
      {space ? (
        <div className="row y-gap-10">
          <div className="col-12">
            <div className="d-flex justify-between">
              <div className="text-15 lh-16">Space Name</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {space.space_name || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Overview</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {space.overview || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Address</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {space.address || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Country</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {space.country || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">State</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {space.state || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Latitude</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {space.latitude || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Longitude</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {space.longitude || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Space Price</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {space.space_price
                  ? `₦${parseFloat(space.space_price).toLocaleString()}`
                  : "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Advance Reservation Time</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {space.advance_reservation_time || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Minimum Stay Requirements</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {space.minimum_stay_requirements || "Info not available"}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-between border-top-light pt-10">
              <div className="text-15 lh-16">Status</div>
              <div className="text-15 lh-16 fw-500 text-blue-1">
                {space.status || "Info not available"}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No Space Selected</p>
      )}

      {administrator ? (
        <div>
          <h4 className="text-20 fw-500 mb-30 tw-mt-5">
            Assigned Administrator
          </h4>
          <div className="row y-gap-10">
            <div className="col-12">
              <div className="d-flex justify-between">
                <div className="text-15 lh-16">First name</div>
                <div className="text-15 lh-16 fw-500 text-blue-1">
                  {user.first_name || "Info not available"}
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex justify-between border-top-light pt-10">
                <div className="text-15 lh-16">Last name</div>
                <div className="text-15 lh-16 fw-500 text-blue-1">
                  {user.last_name || "Info not available"}
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex justify-between border-top-light pt-10">
                <div className="text-15 lh-16">Email</div>
                <div className="text-15 lh-16 fw-500 text-blue-1">
                  {user.email || "Info not available"}
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="d-flex justify-between border-top-light pt-10">
                <div className="text-15 lh-16">Phone</div>
                <div className="text-15 lh-16 fw-500 text-blue-1">
                  {user.phone || "Info not available"}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="btn btn-primary mt-20 tw-w-full tw-py-3"
          data-bs-toggle="modal"
          data-bs-target="#assignModal"
          disabled={loading}
        >
          {loading ? "Assigning..." : " Assign to Me"}
        </button>
      )}
    </div>
  );
};

export default SingleRequest;
