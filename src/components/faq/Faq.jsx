const Faq = () => {
  const faqContent = [
    {
      id: 1,
      collapseTarget: "One",
      title: "What services do you offer?",
      content: `We make it easy for people, especially newcomers to the UK and Canada, to get accommodation by taking on the hassle of rigorous documentation while ensuring a win-win deal for landlords and tenants.`,
    },
    {
      id: 2,
      collapseTarget: "Two",
      title: "How do you screen potential tenants?",
      content: `Our tenant screening process includes thorough background checks, credit assessments, employment verification, and references from previous landlords and co-signers. We aim to find reliable tenants to ensure peace of mind for landlords.`,
    },
    {
      id: 3,
      collapseTarget: "Three",
      title: "What fees do you charge?",
      content: `Our fees vary depending on the services required. We typically charge a percentage of the monthly rent for property management services.`,
    },
    {
      id: 4,
      collapseTarget: "Four",
      title: "How do I list my property with your agency?",
      content: `Listing your property is easy. Go to the “Register” icon to fill out the information, upload pictures of your space/property, and submit it. It will go live within 24 hours after we verify it.`,
    },
    {
      id: 5,
      collapseTarget: "Five",
      title: "Do you only accept houses/apartments?",
      content: `No! We are particularly interested in people who have a spare room in their house they would like to rent out. Go to the “Register” icon to fill out the information, upload pictures of your space/property, and submit it. It will go live within 24 hours after we verify it.`,
    },
    {
      id: 6,
      collapseTarget: "Six",
      title: "What is included in your services?",
      content: `Our services cover everything from finding and vetting tenants, collecting rent, reporting maintenance issues to landlords, and managing tenancy renewals. We ensure your property is well cared for and compliant with all regulations.`,
    },
    {
      id: 7,
      collapseTarget: "Seven",
      title: "How is rent collected and paid to landlords?",
      content: `Rent is collected monthly from tenants and is transferred to landlords after deducting any agreed fees. We provide detailed monthly statements and handle any late payments or arrears.`,
    },
    {
      id: 8,
      collapseTarget: "Eight",
      title: "Can I terminate my tenancy early?",
      content: `Tenancy termination terms are outlined in your tenancy agreement. Early termination is possible under certain conditions, but it may involve fees. Please contact us to discuss your options.`,
    },
    {
      id: 9,
      collapseTarget: "Nine",
      title: "What happens at the end of the tenancy?",
      content: `At the end of the tenancy, we ask the landlord to do a final inspection to assess the property’s condition, preferably in the presence of the tenant. Any deposit deductions will be discussed with both parties, and we will manage the return of the deposit in line with the tenancy agreement.`,
    },
    {
      id: 10,
      collapseTarget: "Ten",
      title: "How do I renew my tenancy?",
      content: `We will contact you before your tenancy ends to discuss renewal options. If you wish to renew, we’ll arrange for a new agreement to be signed.`,
    },
    {
      id: 11,
      collapseTarget: "Eleven",
      title: "What insurance do I need as a landlord or tenant?",
      content: `Landlords should have buildings insurance and consider landlord liability insurance. Tenants are encouraged to have contents insurance to protect their belongings. We can provide recommendations for insurance providers.`,
    },
    {
      id: 12,
      collapseTarget: "Twelve",
      title:
        "Can I choose to manage the property myself after you’ve found a tenant?",
      content: `Yes, we offer a tenant-find-only service. Once a tenant is secured, you can take over the management of the property. We’ll provide you with all necessary documentation and support.`,
    },
  ];

  return (
    <>
      {faqContent.map((item) => (
        <div className="col-12" key={item.id}>
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.collapseTarget}`}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className="icon-plus" />
                <i className="icon-minus" />
              </div>
              <div className="button text-dark-1 text-start">{item.title}</div>
            </div>
            {/* End accordion button */}

            <div
              className="accordion-collapse collapse"
              id={item.collapseTarget}
              data-bs-parent="#Faq1"
            >
              <div className="pt-15 pl-60">
                <p className="text-15">{item.content}</p>
              </div>
            </div>
            {/* End accordion content */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
