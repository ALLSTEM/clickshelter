import "photoswipe/dist/photoswipe.css";
import { hotelsData } from "@/data/hotels";
import Overview from "@/components/house-single/Overview";
import PopularFacilities from "@/components/house-single/PopularFacilities";
import PropertyHighlights from "@/components/house-single/PropertyHighlights";
import StickyHeader from "@/components/house-single/StickyHeader";
import TopBreadCrumb from "@/components/house-single/TopBreadCrumb";
import SidebarRight from "@/components/house-single/SidebarRight";

import CallToActions from "@/components/common/CallToActions";
import GalleryOne from "@/components/house-single/GalleryOne";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";
import { useEffect, useState } from "react";
import { requests } from "@/utils/http";

const HouseSingleDynamic = () => {
  let params = useParams();
  const id = params.id;
  const hotel = hotelsData.find((item) => item.id == id) || hotelsData[0];
  const [loading, setLoading] = useState(false);

  const [space, setSpace] = useState();

  useEffect(() => {
    const fetchSpace = async () => {
      try {
        setLoading(true);
        const response = await requests.get(`/spaces/${id}`);

        setSpace(response.data);

        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpace();
  }, [id]);

  const metadata = {
    title: space?.space_name,
    description: "Space Single || ClickShelter",
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin-blue"></div>
      {/* header top margin */}

      <TopBreadCrumb />
      {/* End top breadcrumb */}

      <StickyHeader space={space} />
      {/* sticky single header for hotel single */}

      <GalleryOne space={space} />

      {/* End gallery grid wrapper */}

      <section className="pt-30">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-8">
              <div className="row y-gap-40">
                <div id="overview" className="col-12">
                  <Overview overview={space?.overview} />
                </div>
                {/* End .col-12  Overview */}
                <div id="facilities" className="col-12 mb-30">
                  <h3 className="text-22 fw-500 pt-40 border-top-light">
                    Most Popular Facilities
                  </h3>
                  <div className="row y-gap-10 pt-20">
                    {space && <PopularFacilities space={space.facilities} />}
                  </div>
                </div>
                <div id="rules" className="col-12 mb-30">
                  <h3 className="text-22 fw-500 pt-40 border-top-light">
                    Property Services
                  </h3>
                  <div className="row y-gap-10 pt-20">
                    {space && <PopularFacilities space={space.services} />}
                  </div>
                </div>
                {/* End .col-12 Most Popular Facilities */}
              </div>
              {/* End .row */}
            </div>
            {/* End .col-xl-8 */}

            <div className="col-xl-4">
              <SidebarRight hotel={space} />
            </div>
            {/* End .col-xl-4 */}
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End single page content */}

      <CallToActions />
      {/* End Call To Actions Section */}
    </>
  );
};

export default HouseSingleDynamic;
