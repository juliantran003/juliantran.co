import profilePic from "../assets/img/profile-pic.JPG";
import youtube from "../assets/img/youtube.png";
import spotify from "../assets/img/spotify.png";
import appleMusic from "../assets/img/appleMusic.png";
import bandcamp from "../assets/img/bandcamp.png";
import soundcloud from "../assets/img/soundcloud.png";

const Linktree = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div id="title">
          <img id="profilePic" src={profilePic} alt="" />
        </div>
        <div id="links">
          <button>
            <img src={youtube} alt="" /> Youtube
            <div></div>
          </button>
          <button>
            <img src={spotify} alt="" />
            Spotify <div></div>
          </button>
          <button>
            <img src={appleMusic} alt="" />
            Apple Music <div></div>
          </button>
          <button>
            <img src={bandcamp} alt="" />
            Bandcamp <div></div>
          </button>
          <button>
            <img src={soundcloud} alt="" />
            Soundcloud
            <div></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Linktree;
