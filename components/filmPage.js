// IMPORTS
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

// IMG
import arrowLeft from "../public/img/arrow_left.png";
import arrowRight from "../public/img/arrow_right.png";

export default function FilmPage({
  img,
  title,
  year,
  type,
  director,
  next,
  previous,
  link,
  imgLink,
}) {
  const router = useRouter();

  return (
    <>
      <style jsx global>
        {`
          html {
            background-color: black;
          }
        `}
      </style>
      <div className="filmPage_background">
        <Image src={img} fill style={{ objectFit: "cover" }} />
        <div className="filmPage_info">
          {/* <h2 className="filmPage_type">{type}</h2> */}
          {previous === "none" ? (
            <></>
          ) : (
            <div
              className="filmPage_arrow_left"
              onClick={() => router.push(previous)}
            >
              {/* <Image src={arrowLeft} fill /> */}
              Previous
            </div>
          )}
          <div className="filmPage_text">
            <a
              href={link}
              className="filmPage_button"
              target="_blank"
              rel="noopener noreferrer"
            >
              watch film
            </a>
            <h3>Score by Julian Tran</h3>
            <h3>Directed by {director}</h3>

            <h1>{title}</h1>
            <h3>{year}</h3>
          </div>
          <div className="filmPage_backtomenu" onClick={() => router.push("/")}>
            {/* <Image src={arrowRight} fill /> */}
            Menu
          </div>
          {next === "none" ? (
            <></>
          ) : (
            <div
              className="filmPage_arrow_right"
              onClick={() => router.push(next)}
            >
              {/* <Image src={arrowRight} fill /> */}
              Next
            </div>
          )}
        </div>
      </div>
    </>
  );
}