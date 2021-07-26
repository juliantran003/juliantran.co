const LinkTreeButton = ({ title, href, icon }) => {
  return (
    <a href={href} className="linktree_button">
      {title}
    </a>
  );
};

export default LinkTreeButton;
