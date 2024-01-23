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
      link="https://tombrett.co/Riku-s-Valley"
      imgLink="/img/riku.gif"
    />
  );
}
