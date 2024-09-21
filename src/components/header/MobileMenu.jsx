import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";
import { useNavigate } from "react-router-dom";
import { headerRouteList } from "@/utils/menu-list";
import { useSelector } from "react-redux";

const MobileMenu = () => {
  const { pathname } = useLocation();

  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link to="/">
          <img src="/img/general/logo-2.png" alt="brand" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <Sidebar width="400" backgroundColor="#fff">
        <Menu>
          {headerRouteList.map((link) => {
            return (
              <MenuItem
                id={link.name}
                onClick={() => navigate(link.link)}
                className={pathname === link.link ? "menu-active-link" : ""}
              >
                {link.name}
              </MenuItem>
            );
          })}

          {/* End Contact  Menu */}
        </Menu>
      </Sidebar>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
        <div className="mt-20">
          {user ? (
            <Link
              to={
                user.type == "user"
                  ? "/dashboard/user"
                  : user.type == "admin"
                  ? "dashboard/admin"
                  : "dashboard/host"
              }
              className="button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              className=" button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
