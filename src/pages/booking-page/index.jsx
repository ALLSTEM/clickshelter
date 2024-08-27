import StepperBooking from "@/components/booking-page/stepper-booking";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Booking Page",
  description: "Booking page",
};

const BookingPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />

      <div className="header-margin-blue"></div>
      {/* End Page Title */}
      <section className="pt-40 layout-pb-md">
        <div className="container">
          <StepperBooking />
        </div>
        {/* End container */}
      </section>
    </>
  );
};

export default BookingPage;
