import CallToActions from "@/components/common/CallToActions";
import WhyChoose from "@/components/block/BlockGuide";
import Block1 from "@/components/about/Block1";

import Counter from "@/components/counter/Counter";
import Team1 from "@/components/team/Team1";
import Testimonial from "@/components/testimonial/Testimonial";
import Counter2 from "@/components/counter/Counter2";
import Brand from "@/components/brand/Brand";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "About || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

const About = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin-blue"></div>
      {/* header top margin */}

      <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item col-12">
          <img src="/img/pages/about/1.png" alt="image" />
        </div>
        {/* End section-bg__item */}

        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="text-40 md:text-25 fw-600 text-white">
                Looking for joy?
              </h1>
              <div className="text-white mt-15">
                Your trusted trip companion
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End About Banner Section */}

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
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Choose Us section */}

      <section className="layout-pt-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <Block1 />
          </div>
        </div>
      </section>
      {/* End about block section */}

      <section className="pt-60">
        <div className="container">
          <div className="border-bottom-light pb-40">
            <div className="row y-gap-30 justify-center text-center">
              <Counter />
            </div>
          </div>
        </div>
      </section>
      {/* End counter Section */}
      <CallToActions />
      {/* End Call To Actions Section */}
    </>
  );
};

export default About;
