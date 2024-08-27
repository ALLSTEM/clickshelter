const Block1 = () => {
  return (
    <>
      <div className="col-lg-5">
        <h2 className="text-30 fw-600">ClickShelter App</h2>
        <p className="mt-5">
          ClickShelter App is powered by Micheast Limited, registered in the
          United Kingdom (Company No: 15344064). Registered address: 359 Bolton
          Road, Radcliffe, Manchester, England, M26 3QQ. ClickShelter is
          dedicated to helping you find a comfortable place to stay both for
          short and long-term stays, without the hassle of complicated rental
          demands or contracts.
        </p>
        <h3 className="mt-60 lg:mt-40 md:mt-20">About Us</h3>
        <p className="text-dark-1 mt-20">
          <strong>Our Mission:</strong> To provide accessible housing solutions
          primarily for African students, workers, and families.
          <br />
          <br />
          <strong>Our Distinction:</strong> We simplify the housing process by
          eliminating the need for guarantors and upfront payments of six
          months’ rent.
          <br />
          <br />
          <strong>Our Understanding:</strong> We recognise the challenges of
          settling into a new country or city. Our goal is to facilitate a
          smooth transition for you.
          <br />
          <br />
          <strong>Our Services:</strong> We offer a variety of living spaces
          including unfurnished, furnished, and semi-furnished apartments.
          Additionally, we provide mortgage guidance and assist with property
          viewings.
          <br />
          <br />
          <strong>Our Contracts:</strong> Flexible rental agreements starting
          from three months are available. We require only one month’s notice
          prior to contract termination.
          <br />
          <br />
          <strong>Our Acquisition Method:</strong> We collaborate with local
          landlords to secure properties, ensuring consistent rental income for
          them, regardless of occupancy.
          <br />
          <br />
          <strong>From Unfurnished to Furnished:</strong> We enhance unfurnished
          properties with quality second-hand electronics and essential items to
          attract tenants.
        </p>
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <img
          src="/img/pages/about/2.png"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      {/* End .col */}
    </>
  );
};

export default Block1;
