import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MainMenu from "../MainMenu";
import MobileMenu from "../MobileMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header className={`header ${navbar ? "bg-dark-1 is-sticky" : ""}`}>
        <div className="header__container px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link to="/" className="header-logo mr-20">
                  <img src="/img/general/logo-2.png" alt="logo icon" />
                  {/* <img src="/img/general/logo-2.png" alt="logo icon" /> */}
                  {/* <h1 className="h5">AccommodateMe</h1> */}
                </Link>
                {/* End logo */}

                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-white" />
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                {/* End language and currency selector */}

                {/* Start btn-group */}

                <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                  {/* {user && user.type !== "host" && (
                    <Link
                      to="/signup?type=host"
                      className="button px-30 fw-400 text-14 -white bg-white h-50 text-dark-1"
                    >
                      Become A Landlord
                    </Link>
                  )} */}

                  {!user && (
                    <Link
                      to="/signup"
                      className="button px-30 fw-400 text-14 border-white -outline-white h-50 text-white ml-20"
                    >
                      Sign In / Register
                    </Link>
                  )}
                  {user && (
                    <Link
                      to={
                        user.type == "user"
                          ? "/dashboard/user"
                          : user.type == "admin"
                          ? "dashboard/admin"
                          : "dashboard/host"
                      }
                      className="button px-30 fw-400 text-14 -white bg-white h-50 text-dark-1"
                    >
                      Dashboard
                    </Link>
                  )}
                </div>

                {/* End btn-group ***/}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-white">
                  <div>
                    {user && (user.type == "host" || user.type == "user") && (
                      <Link
                        to="/dashboard/user"
                        className="d-flex items-center icon-user text-inherit text-22"
                      />
                    )}

                    {user && user == "admin" && (
                      <Link
                        to="/dashboard/admin"
                        className="d-flex items-center icon-user text-inherit text-22"
                      />
                    )}

                    {!user && (
                      <Link
                        to="/login"
                        className="d-flex items-center icon-user text-inherit text-22"
                      />
                    )}
                  </div>
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet "
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
    </>
  );
};

export default Header;
