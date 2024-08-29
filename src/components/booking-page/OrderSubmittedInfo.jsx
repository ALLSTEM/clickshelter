import React from "react";
import dayjs from "dayjs"; // Assuming you're using dayjs for date formatting

const OrderSubmittedInfo = ({ isLoggedIn, userInfo, reservationDetails }) => {
  console.log(userInfo, reservationDetails);

  return (
    <>
      <div className="">
        <div className="order-completed-wrapper">
          <div className="border-light rounded-8 px-50 py-40 mt-40">
            {!isLoggedIn && (
              <>
                <h4 className="text-20 fw-500 mb-30">Your Information</h4>
                <div className="row y-gap-10">
                  <div className="col-12">
                    <div className="d-flex justify-between ">
                      <div className="text-15 lh-16">First name</div>
                      <div className="text-15 lh-16 fw-500 text-blue-1">
                        {userInfo.firstName}
                      </div>
                    </div>
                  </div>
                  {/* End .col */}
                  <div className="col-12">
                    <div className="d-flex justify-between border-top-light pt-10">
                      <div className="text-15 lh-16">Last name</div>
                      <div className="text-15 lh-16 fw-500 text-blue-1">
                        {userInfo.lastName}
                      </div>
                    </div>
                  </div>
                  {/* End .col */}
                  {userInfo.email && (
                    <div className="col-12">
                      <div className="d-flex justify-between border-top-light pt-10">
                        <div className="text-15 lh-16">Email</div>
                        <div className="text-15 lh-16 fw-500 text-blue-1">
                          {userInfo.email}
                        </div>
                      </div>
                    </div>
                  )}
                  {/* End .col */}
                  <div className="col-12">
                    <div className="d-flex justify-between border-top-light pt-10">
                      <div className="text-15 lh-16">Phone</div>
                      <div className="text-15 lh-16 fw-500 text-blue-1">
                        {userInfo.phoneNumber}
                      </div>
                    </div>
                  </div>
                  {/* End .col */}
                  <div className="col-12">
                    <div className="d-flex justify-between border-top-light pt-10">
                      <div className="text-15 lh-16">Address line 1</div>
                      <div className="text-15 lh-16 fw-500 text-blue-1">
                        {userInfo.addressLine1}
                      </div>
                    </div>
                  </div>
                  {/* End .col */}
                  {userInfo.addressLine2 && (
                    <div className="col-12">
                      <div className="d-flex justify-between border-top-light pt-10">
                        <div className="text-15 lh-16">Address line 2</div>
                        <div className="text-15 lh-16 fw-500 text-blue-1">
                          {userInfo.addressLine2}
                        </div>
                      </div>
                    </div>
                  )}
                  {/* End .col */}
                  <div className="col-12">
                    <div className="d-flex justify-between border-top-light pt-10">
                      <div className="text-15 lh-16">State/Province/Region</div>
                      <div className="text-15 lh-16 fw-500 text-blue-1">
                        {userInfo.state}
                      </div>
                    </div>
                  </div>
                  {/* End .col */}
                  <div className="col-12">
                    <div className="d-flex justify-between border-top-light pt-10">
                      <div className="text-15 lh-16">ZIP code/Postal code</div>
                      <div className="text-15 lh-16 fw-500 text-blue-1">
                        {userInfo.zipCode}
                      </div>
                    </div>
                  </div>
                  {/* End .col */}
                  {userInfo.specialRequests && (
                    <div className="col-12">
                      <div className="d-flex justify-between border-top-light pt-10">
                        <div className="text-15 lh-16">
                          Special Requirements
                        </div>
                        <div className="text-15 tw-border tw-mt-3 tw-p-4 lh-16 fw-500 text-blue-1">
                          {userInfo.specialRequests}
                        </div>
                      </div>
                    </div>
                  )}
                  {/* End .col */}
                </div>
                {/* End .row */}
              </>
            )}

            <h4 className="text-20 fw-500 mb-30 mt-40">Request Details</h4>

            <div className="row y-gap-10">
              <div className="col-12">
                <div className="d-flex justify-between ">
                  <div className="text-15 lh-16">Dates</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {reservationDetails.dates
                      .map((date) => dayjs(date).format("MMMM DD"))
                      .join(" - ")}
                  </div>
                </div>
              </div>
              {/* End .col */}
              <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">Adults</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {reservationDetails.guestCounts.Adults}
                  </div>
                </div>
              </div>
              {/* End .col */}
              <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">Children</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {reservationDetails.guestCounts.Children}
                  </div>
                </div>
              </div>
              {/* End .col */}
              <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">Property Type</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {reservationDetails.propertyType}
                  </div>
                </div>
              </div>
              {/* End .col */}
              <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">Location</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {reservationDetails.location}
                  </div>
                </div>
              </div>
              {/* End .col */}
              <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">Specific Location</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {reservationDetails.specificLocation}
                  </div>
                </div>
              </div>
              {/* End .col */}
              <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">Duration of Stay</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {reservationDetails.durationOfStay}
                  </div>
                </div>
              </div>
              {/* End .col */}
              <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">Move-In Date</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {dayjs(reservationDetails.moveInDate).format(
                      "MMMM DD, YYYY"
                    )}
                  </div>
                </div>
              </div>
              {/* End .col */}
              <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">Pet Preference</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {reservationDetails.petPreference}
                  </div>
                </div>
              </div>
              {/* End .col */}
              <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">Occupation</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {reservationDetails.occupation}
                  </div>
                </div>
              </div>
              {/* End .col */}
              <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">Budget Range</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {reservationDetails.budgetMin} -{" "}
                    {reservationDetails.budgetMax}
                  </div>
                </div>
              </div>
              {/* End .col */}
              <div className="col-12">
                <div className="d-flex justify-between border-top-light pt-10">
                  <div className="text-15 lh-16">Additional Info</div>
                  <div className="text-15 lh-16 fw-500 text-blue-1">
                    {reservationDetails.additionalInfo}
                  </div>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
          </div>
          {/* End order information */}
        </div>
      </div>
    </>
  );
};

export default OrderSubmittedInfo;
