// Imports
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Metadata from "../components/metadata.js";

// IMG
import cover from "../public/img/everything.png";

export default function ChapelDrive() {
  const router = useRouter();

  return (
    <div className="musicPage">
      <Metadata
        title="Julian Tran - Everything About You"
        img="/img/everything.png"
        description={`Everything About You || Single written, performed and produced by Julian Tran`}
        tags="Julian, Tran, music, Everything About You, album, producer, songwriting, artist"
      />

      <style jsx global>
        {`
          body {
            background-color: #d9d9d9;
          }
        `}
      </style>
      <h2>2025</h2>

      <h1>Everything About You</h1>

      <div className="musicPage_info">
        <div className="musicPage_cover">
          <Image src={cover} fill quality={70} priority={true} />
        </div>
        <div className="musicPage_info_tracks">
          <p>
            Everything About You <span> (03 : 01)</span>
          </p>

          <a
            href="https://open.spotify.com/track/3ZrOOXfgAxuPdpoA04u6ML?si=342da0d35d4f43cd"
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
        ARTWORK BY THOMAS BRETT
      </p>
      <div
        className="musicPage_arrow_right"
        onClick={() => router.push("/softreset")}
      >
        {/* <Image src={arrowRight} fill /> */}
        Next
      </div>
      <div className="musicPage_backtomenu" onClick={() => router.push("/")}>
        {/* <Image src={arrowRight} fill /> */}
        Menu
      </div>
      <></>
      <div
        className="musicPage_arrow_left"
        onClick={() => router.push("/underwater")}
      >
        {/* <Image src={arrowLeft} fill /> */}
        Previous
      </div>
    </div>
  );
}
