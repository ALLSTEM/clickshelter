import { Link } from "react-router-dom";

const NotAuthorized = () => {
  const data = {
    imageSrc: "/img/general/404.svg",
    title: "Oops! It looks like you're not authorized.",
    description: "You do not have the right to access this page",
    buttonLabel: "Login again",
    buttonUrl: "/login",
  };

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-lg-6">
            <img src={data.imageSrc} alt="image" />
          </div>
          <div className="col-lg-5">
            <div className="no-page">
              <div className="no-page__title">
                40<span className="text-blue-1">1</span>
              </div>
              <h2 className="text-30 fw-600">{data.title}</h2>
              <div className="pr-30 mt-5">{data.description}</div>
              <div className="d-inline-block mt-40 md:mt-20">
                <Link
                  to={data.buttonUrl}
                  className="button -md -dark-1 bg-blue-1 text-white"
                >
                  {data.buttonLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotAuthorized;
