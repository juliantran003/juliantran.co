// Imports
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Metadata from "../components/metadata.js";

// IMG
import cover from "../public/img/chapeldrive.JPG";

export default function ChapelDrive() {
  const router = useRouter();

  return (
    <div className="musicPage">
      <Metadata
        title="Julian Tran - Chapel Drive"
        img="/img/chapeldrive.JPG"
        description={`Chapel Drive || Single written, performed and produced by Julian Tran`}
        tags="Julian, Tran, music, Chapel Drive, album, producer, songwriting, artist"
      />

      <style jsx global>
        {`
          body {
            background-color: #d9d9d9;
          }
        `}
      </style>
      <h2>2024</h2>

      <h1>CHAPEL DRIVE</h1>

      <div className="musicPage_info">
        <div className="musicPage_cover">
          <Image src={cover} fill quality={70} priority={true} />
        </div>
        <div className="musicPage_info_tracks">
          <p>
            Chapel Drive <span> (03 : 19)</span>
          </p>

          <a
            href="https://open.spotify.com/track/4wHyOmGZenzwltLC2UB9EG?si=f3e90fd9171a4c12"
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
        ARTWORK BY MADELINE WOODS
      </p>
      <div
        className="musicPage_arrow_right"
        onClick={() => router.push("/coast")}
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
        onClick={() => router.push("/everything")}
      >
        {/* <Image src={arrowLeft} fill /> */}
        Previous
      </div>
    </div>
  );
}
