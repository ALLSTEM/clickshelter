const CallToActions = () => {
  return (
    <section className="layout-pt-md layout-pb-md bg-dark-2">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-auto">
            <div className="row y-gap-20  flex-wrap items-center">
              <div className="col-auto">
                <div className="icon-newsletter text-60 sm:text-40 text-white" />
              </div>
              <div className="col-auto">
                <h4 className="text-26 text-white fw-600">ClickShelter</h4>
                <div className="text-white">
                  We are happy to help you solve your housing need
                </div>
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto"></div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default CallToActions;
