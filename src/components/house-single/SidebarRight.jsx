import { Link } from "react-router-dom";
import FilterBox from "../../components/house-single/filter-box";

const SidebarRight = ({ hotel }) => {
  return (
    <aside className="ml-50 lg:ml-0">
      <div className="px-30 py-30 border-light rounded-4 shadow-4">
        <div className="d-flex items-center justify-between">
          <div>
            <span className="text-20 fw-500">US${hotel?.space_price}</span>
          </div>
        </div>
        {/* End d-flex */}

        <div className="row y-gap-20 ">
          <p className="text-20">{hotel?.address}</p>
          <div className="col-12">
            <div className="button-item h-full">
              <Link
                to={`/booking?space_id=${hotel?.id}`}
                className="button -dark-1 px-35 h-60 col-12 bg-blue-1 text-white"
              >
                Request Property
              </Link>
            </div>
            {/* End search button_item */}
          </div>
        </div>
      </div>
      {/* End px-30 FilterBox */}
    </aside>
  );
};

export default SidebarRight;
