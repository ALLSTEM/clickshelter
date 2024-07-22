import CallToActions from "@/components/common/CallToActions";
import NotFound from "@/components/common/NotFound";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "404 || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const NotFoundPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <NotFound />
      {/* End 404 section */}

      <CallToActions />
      {/* End Call To Actions Section */}
    </>
  );
};

export default NotFoundPage;
