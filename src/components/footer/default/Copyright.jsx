import Social from "../../common/social/Social";

const Copyright = () => {
  return (
    <div className="row justify-between items-center y-gap-10">
      <div className="col-auto">
        <div className="row x-gap-30 y-gap-10">
          <div className="col-auto">
            <div className="d-flex items-center">
              © {new Date().getFullYear()} by
              <a
                href="https://themeforest.net/user/ib-themes"
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                ClickShelter
              </a>
              All rights reserved.
            </div>
          </div>
          {/* End .col */}

          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col */}

      <div className="col-auto">
        <div className="row y-gap-10 items-center">
          <div className="col-auto">
            <div className="d-flex x-gap-20 items-center">
              <Social />
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default Copyright;
