// IMPORTS
import Image from "next/image";
import Information from "./information";
import { useRouter } from "next/router";
import useSound from "use-sound";
import { useEffect, useState } from "react";
import MobileInformation from "./mobileInformation";
import Head from "next/head";

// IMG
import logo from "../public/img/logo.png";
import volumeOn from "../public/img/volume_on.png";
import volumeOnWhite from "../public/img/volume_onWhite.png";
import soundcloud from "../public/img/soundcloud.png";
import bandcamp from "../public/img/bandcamp.png";
import youtube from "../public/img/youtube.png";
import applemusic from "../public/img/applemusic.png";
import spotify from "../public/img/spotify.png";
import playblack from "../public/img/play-black.png";
import playwhite from "../public/img/play-white.png";
import pauseblack from "../public/img/pause-black.png";
import pausewhite from "../public/img/pause-white.png";

// Audio
import backgroundMusic from "/public/audio/parallel.mp3";

export default function Header() {
  const [info, setInfo] = useState(false);
  const router = useRouter();
  const [sound, setSound] = useState(false);
  const soundSwitch = () => {
    if (sound === true) {
      setSound(false);
      stop();
    } else {
      setSound(true);
      play();
    }
  };
  const logoClick = () => {
    router.push("/");
    setInfo(false);
  };

  const [play, { stop }] = useSound("/audio/ecfc.mp3", {
    soundEnabled: true,
    volume: 0.2,
  });

  return (
    <div className="header_container">
      <Head>
        <link rel="preload" href="/img/logo.png" as="image" />
      </Head>
      {router.pathname === "/" ||
      router.pathname === "/fantasy" ||
      router.pathname === "/anotherday" ||
      router.pathname === "/misery" ||
      info === true ? (
        <header className="header">
          <a onClick={() => setInfo(!info)} className="mobile_header_button">
            INFO
          </a>
          <Information />
          {info === true && <MobileInformation />}
          <div className="header_logo" onClick={() => logoClick()}>
            <Image src={logo} fill alt="logo" />
          </div>
          <div className="header_spacer"></div>
          {/* <div className="header_socials">
            <div>
              <Image src={bandcamp} fill alt="bandcamp" />
            </div>

            <div>
              <Image src={spotify} fill alt="spotify" />
            </div>
            <div>
              <Image src={applemusic} fill alt="applemusic" />
            </div>
            <div>
              <Image src={soundcloud} fill alt="soundcloud" />
            </div>
            <div>
              <Image src={youtube} fill alt="youtube" />
            </div>
          </div> */}
          <div className="header_player_container">
            <p className="header_player_text">
              <span>NOW playing : Score from Everything Comes Full Circle</span>
              ✹
              <span>NOW playing : Score from Everything Comes Full Circle</span>
              ✹
              <span>NOW playing : Score from Everything Comes Full Circle</span>
              ✹
            </p>
          </div>

          {sound === true ? (
            <div className="header_controls" onClick={() => soundSwitch()}>
              <Image src={pauseblack} fill alt="Pause" />
            </div>
          ) : (
            <div className="header_controls" onClick={() => soundSwitch()}>
              <Image src={playblack} fill alt="Play" />
            </div>
          )}

          <a href="mailto:julian@juliantran.co" className="header_button">
            CONTACT
          </a>
        </header>
      ) : (
        <header className="headerWhite">
          <Information />
          {info === true ? <MobileInformation /> : <></>}
          <a
            onClick={() => setInfo(!info)}
            className="mobile_headerWhite_button"
          >
            INFO
          </a>
          <div className="headerWhite_logo" onClick={() => logoClick()}>
            <Image src={logo} fill alt="logo" />
          </div>
          <div className="headerWhite_spacer"></div>
          <div className="headerWhite_player_container">
            <p className="headerWhite_player_text">
              <span>NOW playing : Score from Everything Comes Full Circle</span>
              ✹
              <span>NOW playing : Score from Everything Comes Full Circle</span>
              ✹
              <span>NOW playing : Score from Everything Comes Full Circle</span>
              ✹
            </p>
          </div>
          {sound === true ? (
            <div className="headerWhite_controls" onClick={() => soundSwitch()}>
              <Image src={pausewhite} fill alt="Pause" />
            </div>
          ) : (
            <div className="headerWhite_controls" onClick={() => soundSwitch()}>
              <Image src={playwhite} fill alt="Play" />
            </div>
          )}
          <a className="headerWhite_button">CONTACT</a>
        </header>
      )}
    </div>
  );
}
