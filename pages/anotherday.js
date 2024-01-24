// Imports
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Metadata from "../components/metadata.js";

// IMG
import cover from "../public/img/anotherday.png";

export default function Anotherday() {
  const router = useRouter();

  return (
    <div className="musicPage">
      <Metadata
        title="Julian Tran - Another Day"
        img="/img/anotherday.png"
        description={`Another Day || Single written, performed and produced by Julian Tran`}
        tags="Julian, Tran, music, Another, Day, album, producer, songwriting, artist"
      />

      <style jsx global>
        {`
          body {
            background-color: #d9d9d9;
          }
        `}
      </style>
      <h2>2023</h2>

      <h1>ANOTHER DAY</h1>

      <div className="musicPage_info">
        <div className="musicPage_cover">
          <Image src={cover} fill quality={70} priority={true} />
        </div>
        <div className="musicPage_info_tracks">
          <p>
            Another Day <span> (04 : 16)</span>
          </p>

          <a
            href="https://open.spotify.com/track/0JVGUDH3CB7sqZbQPdLLzI?si=cffa7e695eb74976"
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
        ARTWORK DESIGNED BY THOMAS BRETT
      </p>
      <div
        className="musicPage_arrow_right"
        onClick={() => router.push("/riku")}
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
        onClick={() => router.push("/fantasy")}
      >
        {/* <Image src={arrowLeft} fill /> */}
        Previous
      </div>
    </div>
  );
}
