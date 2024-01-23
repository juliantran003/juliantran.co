// Imports
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Metadata from "../components/metadata.js";

// IMG
import fu1 from "../public/img/fu1.png";
import fu2 from "../public/img/fu2.png";
import fu3 from "../public/img/fu3.png";
import fu4 from "../public/img/fu4.png";

export default function Fantasy() {
  const router = useRouter();
  const [selected, setSelected] = useState("one");
  const options = [
    {
      title: "I",
      send: "one",
      img: fu1,
      link: "https://open.spotify.com/album/1TqjKZbiToKtoTTQWpUEMN?si=JRIM9AJ4TxS4OWR9PmbdaQ",
      tracklist: [
        {
          title: "Entry Into Valley",
          time: "02 : 24",
        },
        {
          title: "Parallel Sublime",
          time: "03 : 56",
        },
      ],
    },
    {
      title: "II",
      send: "two",
      img: fu2,
      link: "https://open.spotify.com/album/7L8FMOjqoOElyU7JwaaJtm?si=n_ONeN7yTvWOg3Q6_VaoMg",
      tracklist: [
        {
          title: "It's Held Within",
          time: "03 : 50",
        },
        {
          title: "Dunes",
          time: "02 : 54",
        },
      ],
    },
    {
      title: "III",
      send: "three",
      img: fu3,
      link: "https://open.spotify.com/album/3e1BirpAinw2Ar4VK35UMJ?si=j3Apme-AS3iSRvCv6ozN1g",
      tracklist: [
        {
          title: "Darkness in the Valley",
          time: "05 : 26",
        },
        {
          title: "Ice Cream Kneecaps",
          time: "04 : 30",
        },
      ],
    },
    {
      title: "IV",
      send: "four",
      img: fu4,
      link: "https://open.spotify.com/album/5dsYrfIjJGQoegSfiHf5tt?si=lHmonSCgRJOHFPnSr4TJEw",
      tracklist: [
        {
          title: "Strange Times",
          time: "03 : 00",
        },
        {
          title: "Here They Come",
          time: "06 : 24",
        },
      ],
    },
  ];
  return (
    <>
      <Metadata
        title="Julian Tran - Fantasy Unlimited : Part I - IV"
        img="/img/fu4.png"
        description={`Fantasy Unlimited : Part I - IV || Album written, performed and produced by Julian Tran`}
        tags="Julian, Tran, music, Fantasy, Unlimited, album, producer, songwriting, artist"
      />
      <div className="musicPage_background"></div>
      <div className="musicPage">
        <style jsx global>
          {`
            body {
              background-color: #d9d9d9;
            }
          `}
        </style>
        <h2>2023</h2>

        <h1>FANTASY UNLIMITED : PART I - IV</h1>

        {options.map((option) => {
          return option.send === selected ? (
            <div className="musicPage_info">
              <div className="musicPage_cover">
                <Image src={option.img} fill quality={70} />
              </div>
              <div className="musicPage_info_tracks">
                {option.tracklist.map((track) => {
                  return (
                    <p key={track.title}>
                      {track.title} <span>({track.time})</span>
                    </p>
                  );
                })}
                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="musicPage_button"
                >
                  LISTEN
                </a>
              </div>
            </div>
          ) : (
            <div></div>
          );
        })}
        <div className="musicPage_menu">
          {options.map((option) => {
            return (
              <div
                key={option.send}
                onClick={() => setSelected(option.send)}
                className={
                  selected === option.send
                    ? "musicPage_menu_button_selected"
                    : "musicPage_menu_button"
                }
              >
                {option.title}
              </div>
            );
          })}
        </div>
        <p className="musicPage_credits">
          WRITTEN, PERFORMED AND PRODUCED BY JULIAN TRAN<br></br>
          ARTWORKS DESIGNED BY THOMAS BRETT
        </p>
        <div
          className="musicPage_arrow_right"
          onClick={() => router.push("/anotherday")}
        >
          {/* <Image src={arrowRight} fill /> */}
          Next
        </div>
        <div className="musicPage_backtomenu" onClick={() => router.push("/")}>
          {/* <Image src={arrowRight} fill /> */}
          Menu
        </div>
        <div
          className="musicPage_arrow_left"
          onClick={() => router.push("/ecfc")}
        >
          {/* <Image src={arrowLeft} fill /> */}
          Previous
        </div>
      </div>
    </>
  );
}
