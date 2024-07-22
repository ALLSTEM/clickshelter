import React from "react";

const PricingTabContent = ({
  spacePrice,
  setSpacePrice,
  advanceReservationTime,
  setAdvanceReservationTime,
  minimumStayRequirements,
  setMinimumStayRequirements,
  handleSaveChanges,
}) => {
  return (
    <div className="col-xl-9 col-lg-11">
      <div className="row x-gap-20 y-gap-20">
        <div className="col-12">
          <div className="text-18 fw-500 mb-10">Pricing</div>
          <div className="form-input">
            <input
              type="number"
              required
              value={spacePrice}
              onChange={(e) => setSpacePrice(e.target.value)}
            />
            <label className="lh-1 text-16 text-light-1">Space Price</label>
          </div>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End .row */}

      <div className="text-18 fw-500 mb-10 pt-30">Booking Requirements</div>

      <div className="row x-gap-20 y-gap-20">
        <div className="col-md-6">
          <div className="form-input">
            <input
              type="text"
              required
              value={advanceReservationTime}
              onChange={(e) => setAdvanceReservationTime(e.target.value)}
            />
            <label className="lh-1 text-16 text-light-1">
              Minimum advance reservations time
            </label>
          </div>
        </div>
        {/* End col-6 */}
        <div className="col-md-6">
          <div className="form-input">
            <input
              type="text"
              required
              value={minimumStayRequirements}
              onChange={(e) => setMinimumStayRequirements(e.target.value)}
            />
            <label className="lh-1 text-16 text-light-1">
              Minimum months stay requirements
            </label>
          </div>
        </div>
        {/* End col-6 */}
      </div>
      {/* End row */}
    </div>
  );
};

export default PricingTabContent;
