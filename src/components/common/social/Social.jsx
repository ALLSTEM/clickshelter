const Social = () => {
  const socialContent = [
    {
      id: 1,
      icon: "icon-facebook",
      link: "https://www.facebook.com/profile.php?id=61564853611393",
    },
    { id: 2, icon: "icon-twitter", link: "https://twitter.com/Clickshelter" },
    { id: 3, icon: "icon-instagram", link: "https://instagram.com/" },
    { id: 4, icon: "icon-linkedin", link: "https://linkedin.com/" },
  ];
  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <i className={`${item.icon} text-14`} />
        </a>
      ))}
    </>
  );
};

export default Social;
