import Hero from "@/components/hero/hero";
import BlockGuide from "@/components/block/BlockGuide";
import CallToActions from "@/components/common/CallToActions";

import MetaComponent from "@/components/common/MetaComponent";
import FilterHousesContainer from "@/components/houses/FilterHousesContainer";
import Counter from "@/components/counter/Counter";
import ParallaxBanner from "@/components/banner/ParallaxBanner";
import StepperBooking from "@/components/booking-page/stepper-booking";

const metadata = {
  title: "Accommodate Me home",
  description: "Accommodate Me home",
};

const HomePage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <Hero />
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
          </div>

          <div className="row y-gap-40 justify-between pt-50">
            <BlockGuide />
          </div>
        </div>
      </section>
      <ParallaxBanner />

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Request
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <StepperBooking />
          </div>
        </div>
      </div>

      {/* <section className="layout-pt-md layout-pb-lg">
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

          <FilterHousesContainer />
        </div>
      </section> */}

      <CallToActions />
    </>
  );
};

export default HomePage;
