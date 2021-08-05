const LinkTreeButton = ({ title, href, icon }) => {
  return (
    <a href={href} className="linktree_button">
      <img src={icon} alt={icon} />
      {title}
    </a>
  );
};

export default LinkTreeButton;
