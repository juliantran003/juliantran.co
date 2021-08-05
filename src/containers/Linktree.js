// Components
import LinkTreeButton from "../components/Linktree/LinkTreeButton";

// Logos
import spotify from "../assets/img/spotify.png";
import appleMusic from "../assets/img/appleMusic.png"
import bandcamp from "../assets/img/bandcamp.png"
import soundcloud from "../assets/img/soundcloud.png"
import youtube from "../assets/img/youtube.png"
import website from "../assets/img/favicon.png"

const Linktree = () => {
  return (
    <div className="container_main_black">
      {" "}
      <div className="linktree_container">
        <div className="linktree_video">
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/55Yd-bEKcjE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
          
          ></iframe>
        </div>
        <div className="linktree_container_buttons">
          <LinkTreeButton
            title=""
            href="https://open.spotify.com/album/0dExIIFelvhtT35JHpGoNj"
            icon={spotify}
          />
          <LinkTreeButton
            title=""
            href="https://music.apple.com/us/album/misery/1549330781?uo=4&app=music&at=1001lry3&ct=dashboard"
            icon={appleMusic}
          />
          <LinkTreeButton
            title=""
            href="https://juliantran.bandcamp.com/album/misery"
            icon={bandcamp}
          />
        </div>
        <div className="linktree_container_buttons">
          <LinkTreeButton
            title=""
            href="https://soundcloud.com/user-59317715/sets/misery"
            icon={soundcloud}
          />
          <LinkTreeButton
            title=""
            href="https://www.youtube.com/channel/UCdn9lqRbiQIGn2DvH9p54RQ/videos"
            icon={youtube}
          />
          <LinkTreeButton
            title=""
            href=""
            icon={website}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Linktree;
