// Imports
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Metadata from "../components/metadata.js";

// IMG
import cover from "../public/img/misery.png";

export default function Anotherday() {
  const router = useRouter();
  const tracklist = [
    {
      title: "Carefree",
      time: "04 : 36",
    },
    {
      title: "Anti",
      time: "05 : 38",
    },
    {
      title: "Misery",
      time: "05 : 24",
    },
    {
      title: "Interlude For A Vagabond",
      time: "02 : 21",
    },
    {
      title: "Trust",
      time: "03 : 22",
    },
    {
      title: "Coordinates",
      time: "03 : 04",
    },
    {
      title: "Better On My Own",
      time: "03 : 47",
    },
    {
      title: "Ensemble",
      time: "03 : 01",
    },
  ];

  return (
    <div className="musicPage">
      <Metadata
        title="Julian Tran - Misery"
        img="/img/misery.png"
        description={`Misery || Album written, performed and produced by Julian Tran`}
        tags="Julian, Tran, music, Misery, album, producer, songwriting, artist"
      />
      <style jsx global>
        {`
          body {
            background-color: #d9d9d9;
          }
        `}
      </style>
      <h2>2021</h2>

      <h1>MISERY</h1>

      <div className="musicPage_info">
        <div className="musicPage_cover">
          <Image src={cover} fill quality={70} />
        </div>
        <div className="musicPage_info_tracks">
          {tracklist.map((track) => {
            return (
              <p key={track.title}>
                {track.title} <span> ({track.time})</span>
              </p>
            );
          })}

          <a
            href="https://open.spotify.com/album/0dExIIFelvhtT35JHpGoNj?si=y0NWlHH7RAm4TIGNJo__3A"
            target="_blank"
            rel="noopener noreferrer"
            className="musicPage_button"
          >
            LISTEN
          </a>
        </div>
      </div>

      <p className="musicPage_credits">
        WRITTEN, PERFORMED AND PRODUCED BY JULIAN TRAN<br></br>
        ARTWORK DESIGNED BY SOMNATH BHATT
      </p>

      <div
        className="musicPage_arrow_left"
        onClick={() => router.push("/riku")}
      >
        {/* <Image src={arrowLeft} fill /> */}
        Previous
      </div>
      <div className="musicPage_backtomenu" onClick={() => router.push("/")}>
        {/* <Image src={arrowRight} fill /> */}
        Menu
      </div>
    </div>
  );
}
