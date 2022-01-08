// Packages
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__selector">
        <Link to="/">home </Link>
        <Link to="/discography">discography </Link>
        <Link to="/media">media</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </div>

      <div className="menu__socials">
        <div>
          <a
            href="https://open.spotify.com/artist/56WB4onpbv1NmX2XNzPp8Q?si=9hxJ_fnwQby3P_ITmYRvSg"
            target="_blank"
          >
            <i class="fab fa-spotify"></i>
          </a>
          <a
            href="https://music.apple.com/gb/artist/julian-tran/1539405644"
            target="_blank"
          >
            <i class="fab fa-apple"></i>
          </a>

          <a href="https://juliantran.bandcamp.com/" target="_blank">
            <i class="fab fa-bandcamp"></i>
          </a>

          <a href="https://www.instagram.com/juliantran/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
