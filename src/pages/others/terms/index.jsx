import CallToActions from "@/components/common/CallToActions";
import TermsConent from "@/components/common/TermsConent";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Terms & Conditions || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const Terms = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin-blue"></div>
      {/* header top margin */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="tabs js-tabs">
            <TermsConent />
          </div>
        </div>
      </section>
      {/* End terms section */}

      <CallToActions />
      {/* End Call To Actions Section */}
    </>
  );
};

export default Terms;
