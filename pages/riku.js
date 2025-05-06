// IMPORTS
import FilmPage from "@/components/filmPage";

// IMG
import background from "../public/img/riku.gif";

export default function Riku() {
  return (
    <FilmPage
      img={background}
      title="Riku's Valley"
      year="2022"
      type="Score for Short Film"
      director="Thomas Brett"
      next="/misery"
      previous="/anotherday"
      link="https://thomas-brett.itch.io/rikusvalley"
      imgLink="/img/riku.gif"
      tags="Thomas,Brett, Riku's, Riku, Valley shortfilm, film, score, music, soundtrack, Julian, Tran, composer, director, cinema, artist, portfolio"
    />
  );
}
