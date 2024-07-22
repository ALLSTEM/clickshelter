import Hero from "@/components/hero/hero";
import BlockGuide from "@/components/block/BlockGuide";
import CallToActions from "@/components/common/CallToActions";

import MetaComponent from "@/components/common/MetaComponent";
import FilterHousesContainer from "@/components/houses/FilterHousesContainer";
import Counter from "@/components/counter/Counter";
import ParallaxBanner from "@/components/banner/ParallaxBanner";

const metadata = {
  title: "Home-1 || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const HomePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      {/* <Header /> */}
      {/* End Header 1 */}

      <Hero />
      {/* End Hero 1 */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Available Houses</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}
          <FilterHousesContainer />
        </div>
        {/* End .container */}
      </section>
      {/* End Popular Hotels Section */}

      <ParallaxBanner />
      {/* End Parallax banner Section */}

      <section className="pt-50 pb-40 border-bottom-light">
        <div className="container">
          <div className="row justify-center text-center">
            <Counter />
          </div>
        </div>
      </section>
      {/* End counter up Section */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <BlockGuide />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Block Guide Section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      {/* <DefaultFooter /> */}
      {/* End Footer Section */}
    </>
  );
};

export default HomePage;
