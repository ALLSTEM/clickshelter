const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "available On WhatsApp",
      action: "tel:+447392539244",
      text: "+447392539244",
    },
    {
      id: 2,
      title: "Need live support?",
      action: "mailto:hello@clickshelter.com",
      text: "hello@clickshelter.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className={"text-14 mt-30"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-blue-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
