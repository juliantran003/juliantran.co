// Packages
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__selector">
        <Link to="/">home </Link>
        <Link to="/discography">discography </Link>
        <Link>work</Link>
        <Link>media</Link>
        <Link to="/contact">contact</Link>
      </div>

      <div className="menu__socials">
        <div>
          <i class="fab fa-spotify"></i>
          <i class="fab fa-apple"></i>
          <i class="fab fa-bandcamp"></i>
          <i class="fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Menu;
