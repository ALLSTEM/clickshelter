import { Link, useNavigate } from "react-router-dom";
import { isActiveLink } from "@/utils/linkActiveChecker";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.auth); // Merged user data call

  const nav = useNavigate();

  if (!user) {
    return nav("/login");
  }

  let sideBarCont;

  if (user.type === "user") {
    sideBarCont = [
      {
        id: 1,
        icon: "/img/dashboard/sidebar/compass.svg",
        name: "Dashboard",
        routePath: "/dashboard/user",
      },
      {
        id: 2,
        icon: "/img/dashboard/sidebar/house.svg",
        name: "Requests",
        routePath: "/dashboard/user/requests",
      },
      {
        id: 3,
        icon: "/img/featureIcons/1/3.svg",
        name: "Reports",
        routePath: "/dashboard/user/reports",
      },
      {
        id: 7,
        icon: "/img/dashboard/sidebar/bookmark.svg",
        name: "Wishlist",
        routePath: "/dashboard/user/wishlist",
      },
      {
        id: 8,
        icon: "/img/dashboard/sidebar/gear.svg",
        name: "Settings",
        routePath: "/dashboard/user/settings",
      },
      // {
      //   id: 5,
      //   icon: "/img/dashboard/sidebar/log-out.svg",
      //   name: "Logout",
      //   routePath: "/login",
      // },
    ];
  } else if (user.type === "host") {
    sideBarCont = [
      {
        id: 1,
        icon: "/img/dashboard/sidebar/compass.svg",
        name: "Dashboard",
        routePath: "/dashboard/host",
      },
      {
        id: 3,
        icon: "/img/dashboard/sidebar/map.svg",
        name: "Spaces",
        routePath: "/dashboard/user/spaces",
      },
      {
        id: 6,
        icon: "/img/dashboard/sidebar/booking.svg",
        name: "Tenants",
        routePath: "/dashboard/user/tenants",
      },
      {
        id: 6,
        icon: "/img/dashboard/icons/2.svg",
        name: "Payout",
        routePath: "/dashboard/user/payouts",
      },
      {
        id: 2,
        icon: "/img/dashboard/sidebar/house.svg",
        name: "Requests",
        routePath: "/dashboard/user/requests",
      },
      {
        id: 3,
        icon: "/img/featureIcons/1/3.svg",
        name: "Reports",
        routePath: "/dashboard/user/reports",
      },
      {
        id: 7,
        icon: "/img/dashboard/sidebar/bookmark.svg",
        name: "Wishlist",
        routePath: "/dashboard/user/wishlist",
      },
      {
        id: 8,
        icon: "/img/dashboard/sidebar/gear.svg",
        name: "Settings",
        routePath: "/dashboard/user/settings",
      },
      // {
      //   id: 5,
      //   icon: "/img/dashboard/sidebar/log-out.svg",
      //   name: "Logout",
      //   routePath: "/login",
      // },
    ];
  } else {
    sideBarCont = [
      {
        id: 1,
        icon: "/img/dashboard/sidebar/compass.svg",
        name: "Dashboard",
        routePath: "/dashboard/admin",
      },
      {
        id: 2,
        icon: "/img/dashboard/sidebar/taxi.svg",
        name: "Users",
        routePath: "/dashboard/admin/users",
      },
      {
        id: 3,
        icon: "/img/dashboard/sidebar/hotel.svg",
        name: "Hosts",
        routePath: "/dashboard/admin/hosts",
      },
      {
        id: 4,
        icon: "/img/featureIcons/1/1.svg",
        name: "Admins",
        routePath: "/dashboard/admin/admins",
        roles: ["admin", "super"],
      },
      {
        id: 5,
        icon: "/img/dashboard/sidebar/map.svg",
        name: "Spaces",
        routePath: "/dashboard/admin/spaces",
      },
      {
        id: 6,
        icon: "/img/dashboard/icons/2.svg",
        name: "Payouts",
        routePath: "/dashboard/admin/payouts",
        roles: ["admin", "super"],
      },
      {
        id: 7,
        icon: "/img/featureIcons/1/3.svg",
        name: "Reports",
        routePath: "/dashboard/admin/reports",
      },
      {
        id: 8,
        icon: "/img/dashboard/sidebar/house.svg",
        name: "Requests",
        routePath: "/dashboard/admin/requests",
      },
      {
        id: 9,
        icon: "/img/dashboard/sidebar/gear.svg",
        name: "Settings",
        routePath: "/dashboard/user/settings",
      },
      // {
      //   id: 10,
      //   icon: "/img/dashboard/sidebar/log-out.svg",
      //   name: "Logout",
      //   routePath: "/login",
      // },
    ];
  }

  return (
    <div className="sidebar -dashboard">
      {sideBarCont.map((item) => {
        // Check if 'roles' exists, if not, render for all users
        if (!item.roles || item.roles.includes(user.role)) {
          return (
            <div className="sidebar__item" key={item.id}>
              <div
                className={`${
                  isActiveLink(item.routePath, pathname) ? "-is-active" : ""
                } sidebar__button`}
              >
                <Link
                  to={item.routePath}
                  className="d-flex items-center text-15 lh-1 fw-500"
                >
                  <img
                    height={26}
                    width={26}
                    src={item.icon}
                    alt="icon"
                    className="mr-15"
                  />
                  {item.name}
                </Link>
              </div>
            </div>
          );
        }
        return null; // Do not render the item if user.role is not allowed
      })}
      <div
        className="sidebar__item tw-cursor-pointer"
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
      >
        <div className={`sidebar__button`}>
          <div className="d-flex items-center text-15 lh-1 fw-500">
            <img
              height={26}
              width={26}
              src={"/img/dashboard/sidebar/log-out.svg"}
              alt="icon"
              className="mr-15"
            />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
