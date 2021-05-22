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
            <img src={youtube} alt="" /> <h1>Youtube</h1>
            <div></div>
          </button>
          <button>
            <img src={spotify} alt="" />
            <h1>Spotify</h1> <div></div>
          </button>
          <button>
            <img src={appleMusic} alt="" />
            <h1>Apple Music</h1> <div></div>
          </button>
          <button>
            <img src={bandcamp} alt="" />
            <h1>Bandcamp</h1> <div></div>
          </button>
          <button>
            <img src={soundcloud} alt="" />
            <h1>Soundcloud</h1>
            <div></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Linktree;
