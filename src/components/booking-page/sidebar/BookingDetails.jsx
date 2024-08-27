const BookingDetails = ({ space }) => {
  console.log("BookingDetails", space);
  return (
    <div className="px-30 py-30 border-light rounded-4">
      <div className="text-20 fw-500 mb-30">Selected Space</div>
      <div className="row x-gap-15 y-gap-20">
        <div className="col-auto">
          <img
            src={space?.image}
            alt="image"
            className="size-140 rounded-4 object-cover"
          />
        </div>
        {/* End .col */}
        <div className="col">
          {/* End ratings */}
          <div className="lh-17 fw-500">{space?.space_name}</div>
          <div className="text-14 lh-15 mt-5">{space.address}</div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </div>
    // End px-30
  );
};

export default BookingDetails;
