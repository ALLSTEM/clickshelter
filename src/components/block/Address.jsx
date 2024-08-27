const Address = () => {
  const addressContent = [
    {
      id: 1,
      colClass: "col-lg-3",
      title: "Address",
      content: <>359 Bolton Road, Radcliffe, Manchester, England</>,
    },
    {
      id: 2,
      colClass: "col-auto",
      title: "Available on WhatsApp",
      content: (
        <>
          <a href="tel:+447392539244 ">+447392539244 </a>
        </>
      ),
    },
    {
      id: 3,
      colClass: "col-auto",
      title: "Need live support?",
      content: (
        <>
          {" "}
          <a href="mailto:hello@clickshelter.com">hello@clickshelter.com</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div className={`${item.colClass}`} key={item.id}>
          <div className="text-14 text-light-1">{item.title}</div>
          <div className="text-18 fw-500 mt-10">{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default Address;
