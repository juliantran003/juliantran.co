// IMPORTS
import FilmPage from "@/components/filmPage";

// IMG
import background from "../public/img/ecfc-gif.gif";

export default function ECFC() {
  return (
    <FilmPage
      img={background}
      title="Everything Comes Full Circle"
      year="2023"
      type="Short Film"
      director="Lilan Yang"
      next="/fantasy"
      previous="/coast"
      link="https://lilanyang.studio/ecfc.html"
      imgLink="/img/ecfc-gif.gif"
      tags="Lilan, Yang, Everything,Comes,Full,Circle, shortfilm, film, score, music, soundtrack, Julian, Tran, composer, director, cinema, artist, portfolio"
    />
  );
}
