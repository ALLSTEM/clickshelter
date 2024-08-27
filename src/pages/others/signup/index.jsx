import CallToActions from "@/components/common/CallToActions";
import LoginWithSocial from "@/components/common/LoginWithSocial";
import SignUpForm from "@/components/common/SignUpForm";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Sign Up || Accommodate me",
  description: "Sign Up || Accommodate me",
};

const SignUp = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* End Page Title */}

      <div className="header-margin-blue"></div>
      {/* header top margin */}

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                <SignUpForm />
                {/* End SignUP */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End login section */}

      <CallToActions />
      {/* End Call To Actions Section */}
    </>
  );
};

export default SignUp;
