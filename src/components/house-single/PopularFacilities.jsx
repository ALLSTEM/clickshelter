const PopularFacilities = ({ space }) => {
  return (
    <>
      {space.map((fa) => (
        <div className="col-md-5">
          <div className="d-flex x-gap-15 y-gap-15 items-center">
            <i className="icon-living-room"></i>
            <div className="text-15">{fa}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PopularFacilities;
