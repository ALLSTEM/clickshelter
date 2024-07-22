import Sidebar from "../common/Sidebar";
import Header from "../../../header/dashboard-header";
import SettingsTabs from "./components/index";
import Footer from "../common/Footer";

const index = () => {
  return (
    <>
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-30 lh-14 fw-600">Add New Space</h1>
          <div className="text-15 text-light-1">
            Lorem ipsum dolor sit amet, consectetur.
          </div>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End .row */}

      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <SettingsTabs />
      </div>

      {/* End dashbaord content */}
    </>
  );
};

export default index;
