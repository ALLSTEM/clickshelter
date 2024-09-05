import CallToActions from "@/components/common/CallToActions";
import NotFound from "@/components/common/NotFound";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "ClickShelter - 404",
  description: "ClickShelter - 404",
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
