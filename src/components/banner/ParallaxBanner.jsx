import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const ParallaxBanner = () => {
  return (
    <Parallax
      strength={200}
      bgImage="/img/backgrounds/13.jpg"
      bgImageAlt="amazing place"
      bgClassName="object-fit-cover"
    >
      <div className="section-bg layout-pt-xl layout-pb-xl">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto" data-aos="fade">
              <h2 className="text-40 text-white tw-text-5xl tw-font-extrabold tw-mb-5">
                ClickShelter
              </h2>
              <div className="text-white mb-10 tw-text-4xl">
                Clickshelter App is powered by Micheast Limited registered in
                the United Kingdom (Company No:15344064). Registered address:
                359 Bolton Road, Radcliffe, Manchester, England, M26 3QQ.
                ClickShelter is dedicated to helping you find a comfortable
                place to stay both for short and long-term stays, without the
                hassle of complicated rental demands or contracts.{" "}
              </div>
              <div className="d-inline-block mt-30">
                <div
                  className="button -md -blue-1 bg-white text-dark-1 tw-cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Send Request
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxBanner;
