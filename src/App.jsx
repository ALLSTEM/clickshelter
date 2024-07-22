import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "./components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "react-chat-elements/dist/main.css";
import "aos/dist/aos.css";
import "./styles/index.scss";
import "./styles/index.css";

import { Provider } from "react-redux";
import { store } from "./store/store";

if (typeof window !== "undefined") {
  import("bootstrap");
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";

import Home from "./pages";
import HouseListPage from "./pages/listing";
import RootLayout from "./pages/layout";
import DashLayout from "./pages/dashboard-layout";
import HouseSingleV1Dynamic from "./pages/single-listing";
import NotFoundPage from "./pages/not-found";
import About from "./pages/others/about";
import HelpCenter from "./pages/others/help-center";
import LogIn from "./pages/others/login";
import SignUp from "./pages/others/signup";
import Terms from "./pages/others/terms";
import Contact from "./pages/others/contact";
import UserDashboard from "./pages/dashboard/user-dashboard";
import UserReports from "./pages/dashboard/user-dashboard/reports";
import UserMessages from "./pages/dashboard/user-dashboard/messages";
import UserSettings from "./pages/dashboard/user-dashboard/settings";
import UserRequests from "./pages/dashboard/user-dashboard/requests";
import UserWishlist from "./pages/dashboard/user-dashboard/wishlist";
import HostPayout from "./pages/dashboard/host-dashboard/payouts";
import HostRequests from "./pages/dashboard/host-dashboard/requests";
import HostReports from "./pages/dashboard/host-dashboard/reports";
import HostMessages from "./pages/dashboard/host-dashboard/messages";
import HostTenants from "./pages/dashboard/host-dashboard/tenants";
import HostSettings from "./pages/dashboard/host-dashboard/settings";
import HostDashboard from "./pages/dashboard/host-dashboard";
import AdminRequests from "./pages/dashboard/admin-dashboard/requests";
import AdminPayouts from "./pages/dashboard/admin-dashboard/payout";
import AdminReports from "./pages/dashboard/admin-dashboard/reports";
import AdminMessages from "./pages/dashboard/admin-dashboard/messages";
import AdminUsers from "./pages/dashboard/admin-dashboard/users";
import AdminHosts from "./pages/dashboard/admin-dashboard/host";
import AdminSpaces from "./pages/dashboard/admin-dashboard/spaces";
import AdminSettings from "./pages/dashboard/admin-dashboard/settings";
import AdminAdmin from "./pages/dashboard/admin-dashboard/admins";
import AdminDashboard from "./pages/dashboard/admin-dashboard";
import HostSpaces from "./pages/dashboard/host-dashboard/spaces";
import HostAddHouse from "./pages/dashboard/host-dashboard/add";
import SingleSpace from "./pages/dashboard/admin-dashboard/single-space";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <main>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="listing" element={<HouseListPage />} />
              <Route path="listing/:id" element={<HouseSingleV1Dynamic />} />
              <Route path="about" element={<About />} />
              <Route path="help-center" element={<HelpCenter />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<LogIn />} />
              <Route path="terms" element={<Terms />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/dashboard" element={<DashLayout />}>
              <Route path="spaces/:id" element={<SingleSpace />} />
              <Route path="user">
                <Route path="requests" element={<UserRequests />} />
                <Route path="reports" element={<UserReports />} />
                <Route path="messages" element={<UserMessages />} />
                <Route path="wishlist" element={<UserWishlist />} />
                <Route path="settings" element={<UserSettings />} />
                <Route index element={<UserDashboard />} />
              </Route>
              <Route path="host">
                <Route path="requests" element={<HostRequests />} />
                <Route path="payouts" element={<HostPayout />} />
                <Route path="reports" element={<HostReports />} />
                <Route path="messages" element={<HostMessages />} />
                <Route path="tenants" element={<HostTenants />} />
                <Route path="settings" element={<HostSettings />} />
                <Route path="spaces" element={<HostSpaces />} />
                <Route path="spaces/add" element={<HostAddHouse />} />
                <Route index element={<HostDashboard />} />
              </Route>
              <Route path="admin">
                <Route path="requests" element={<AdminRequests />} />
                <Route path="payouts" element={<AdminPayouts />} />
                <Route path="reports" element={<AdminReports />} />
                <Route path="messages" element={<AdminMessages />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="hosts" element={<AdminHosts />} />
                <Route path="spaces" element={<AdminSpaces />} />
                <Route path="settings" element={<AdminSettings />} />
                <Route path="admins" element={<AdminAdmin />} />
                <Route index element={<AdminDashboard />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ScrollTopBehaviour />
        </BrowserRouter>

        <SrollTop />
      </Provider>
    </main>
  );
}

export default App;
