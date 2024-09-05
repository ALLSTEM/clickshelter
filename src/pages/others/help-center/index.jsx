import CallToActions from "@/components/common/CallToActions";
import Faq from "@/components/faq/Faq";
import HelpSearchBlock from "@/components/block/HelpSearchBlock";
import HelpBlock from "@/components/block/HelpBlock";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Help Center || ClickShelter",
  description: "Help Center || ClickShelter",
};

const HelpCenter = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin-blue"></div>
      {/* header top margin */}

      {/* End search and search block section */}

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 justify-center pt-40 sm:pt-20">
            <div className="col-xl-8 col-lg-10">
              <div
                className="accordion -simple row y-gap-20 js-accordion"
                id="Faq1"
              >
                <Faq />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End faq section block */}

      <CallToActions />
      {/* End Call To Actions Section */}
    </>
  );
};

export default HelpCenter;
