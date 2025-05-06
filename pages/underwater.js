// Imports
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Metadata from "../components/metadata.js";

// IMG
import cover from "../public/img/underwater.png";

export default function ChapelDrive() {
  const router = useRouter();

  return (
    <div className="musicPage">
      <Metadata
        title="Julian Tran - Your Touch Underwater"
        img="/img/underwater.png"
        description={`Your Touch Underwater || Single written, performed and produced by Julian Tran`}
        tags="Julian, Tran, music, Your Touch Underwater, album, producer, songwriting, artist"
      />

      <style jsx global>
        {`
          body {
            background-color: #d9d9d9;
          }
        `}
      </style>
      <h2>2025</h2>

      <h1>Your Touch Underwater</h1>

      <div className="musicPage_info">
        <div className="musicPage_cover">
          <Image src={cover} fill quality={70} priority={true} />
        </div>
        <div className="musicPage_info_tracks">
          <p>
            Your Touch Underwater <span> (04 : 24)</span>
          </p>

          <a
            href="https://distrokid.com/hyperfollow/juliantran/your-touch-underwater-3"
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
        onClick={() => router.push("/everything")}
      >
        {/* <Image src={arrowRight} fill /> */}
        Next
      </div>
      <div className="musicPage_backtomenu" onClick={() => router.push("/")}>
        {/* <Image src={arrowRight} fill /> */}
        Menu
      </div>
      <></>
      {/* <div
        className="musicPage_arrow_left"
        onClick={() => router.push("/everything")}
      >
        <Image src={arrowLeft} fill />
        Previous
      </div> */}
    </div>
  );
}
