import { Link } from "react-router-dom";

import { isActiveLink } from "@/utils/linkActiveChecker";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const hostSidebarContent = [
    {
      id: 1,
      icon: "/img/dashboard/sidebar/compass.svg",
      name: "Dashboard",
      routePath: "/dashboard/host",
    },

    {
      id: 2,
      icon: "/img/dashboard/sidebar/house.svg",
      name: "Requests",
      routePath: "/dashboard/host/requests",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.svg",
      name: "Reports",
      routePath: "/dashboard/host/reports",
    },
    {
      id: 3,
      icon: "/img/dashboard/sidebar/map.svg",
      name: "Spaces",
      routePath: "/dashboard/host/spaces",
    },
    {
      id: 4,
      icon: "/img/dashboard/icons/4.svg",
      name: "Messages",
      routePath: "/dashboard/host/messages",
    },
    {
      id: 6,
      icon: "/img/dashboard/sidebar/booking.svg",
      name: "Tenants",
      routePath: "/dashboard/host/tenants",
    },
    {
      id: 6,
      icon: "/img/dashboard/icons/2.svg",
      name: "Payout",
      routePath: "/dashboard/host/payouts",
    },
    {
      id: 8,
      icon: "/img/dashboard/sidebar/gear.svg",
      name: " Settings",
      routePath: "/dashboard/host/settings",
    },
    {
      id: 5,
      icon: "/img/dashboard/sidebar/log-out.svg",
      name: " Logout",
      routePath: "/login",
    },
  ];

  const userSidebarContent = [
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
      id: 4,
      icon: "/img/dashboard/icons/4.svg",
      name: "Messages",
      routePath: "/dashboard/user/messages",
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
      name: " Settings",
      routePath: "/dashboard/user/settings",
    },
    {
      id: 5,
      icon: "/img/dashboard/sidebar/log-out.svg",
      name: " Logout",
      routePath: "/login",
    },
  ];

  const adminSidebarContent = [
    {
      id: 1,
      icon: "/img/dashboard/sidebar/compass.svg",
      name: "Dashboard",
      routePath: "/dashboard/admin",
    },
    {
      id: 1,
      icon: "/img/dashboard/sidebar/taxi.svg",
      name: "Users",
      routePath: "/dashboard/admin/users",
    },
    {
      id: 1,
      icon: "/img/dashboard/sidebar/hotel.svg",
      name: "Hosts",
      routePath: "/dashboard/admin/hosts",
    },
    {
      id: 1,
      icon: "/img/featureIcons/1/1.svg",
      name: "Admins",
      routePath: "/dashboard/admin/admins",
    },
    {
      id: 1,
      icon: "/img/dashboard/sidebar/map.svg",
      name: "Spaces",
      routePath: "/dashboard/admin/spaces",
    },
    {
      id: 1,
      icon: "/img/dashboard/icons/2.svg",
      name: "Payouts",
      routePath: "/dashboard/admin/payouts",
    },
    {
      id: 3,
      icon: "/img/featureIcons/1/3.svg",
      name: "Reports",
      routePath: "/dashboard/admin/reports",
    },
    {
      id: 2,
      icon: "/img/dashboard/sidebar/house.svg",
      name: "Requests",
      routePath: "/dashboard/admin/requests",
    },
    {
      id: 8,
      icon: "/img/dashboard/sidebar/gear.svg",
      name: "Settings",
      routePath: "/dashboard/admin/settings",
    },
    {
      id: 5,
      icon: "/img/dashboard/sidebar/log-out.svg",
      name: " Logout",
      routePath: "/login",
    },
  ];
  return (
    <div className="sidebar -dashboard">
      {adminSidebarContent.map((item) => (
        <div className="sidebar__item" key={item.id}>
          <div
            className={`${
              isActiveLink(item.routePath, pathname) ? "-is-active" : ""
            } sidebar__button `}
          >
            <Link
              to={item.routePath}
              className="d-flex items-center text-15 lh-1 fw-500"
            >
              <img
                height={26}
                width={26}
                src={item.icon}
                alt="image"
                className="mr-15"
              />
              {item.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
