import profilePic from "../assets/img/profile-pic.JPG";

const Linktree = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div id="title">
          <img id="profilePic" src={profilePic} alt="" />
        </div>
        <div id="links">
          <button>
            <i id="youtube" class="fab fa-youtube"></i> <h1>Youtube</h1>{" "}
            <div></div>
          </button>
          <button>
            <i id="spotify" class="fab fa-spotify"></i>
            <h1>Spotify</h1> <div></div>
          </button>
          <button>
            <i id="appleMusic" class="fas fa-music"></i>
            <h1>Apple Music</h1> <div></div>
          </button>
          <button>
            <i id="bandcamp" class="fab fa-bandcamp"></i>
            <h1>Bandcamp</h1> <div></div>
          </button>
          <button>
            <i id="soundcloud" class="fab fa-soundcloud"></i>
            <h1>Soundcloud</h1>
            <div></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Linktree;
