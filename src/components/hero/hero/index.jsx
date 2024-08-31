import { useNavigate } from "react-router-dom";
import MainFilterSearchBox from "./MainFilterSearchBox";

const index = () => {
  const navigate = useNavigate();
  return (
    <section className="masthead -type-1 z-5">
      <div className="masthead__bg">
        <img alt="image" src="/img/masthead/1/bg-3.jpg" className="js-lazy" />
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-auto">
            <div className="text-center">
              <h1
                className="text-60 lg:text-40 md:text-30 text-white"
                data-aos="fade-up"
              >
                Looking for accommodation?
              </h1>
              <p
                className="text-white mt-6 md:mt-10"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                We are happy to help you solve your housing need
              </p>
            </div>
            {/* End hero title */}

            <div
              className="tabs -underline mt-60 js-tabs"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <button
                className="mainSearch__submit button -dark-1 h-60 px-35 col-12 rounded-100 bg-blue-1 text-white"
                // onClick={() => navigate(`/listing?query=${searchValue}`)}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Let’s get you started
              </button>
              {/* <MainFilterSearchBox /> */}
            </div>
            {/* End tab-filter */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
