// IMPORTS
import FilmPage from "@/components/filmPage";

// IMG
import background from "../public/img/coast.gif";

export default function Coast() {
  return (
    <FilmPage
      img={background}
      title="Coast to Coast (Preamble)"
      year="2023"
      type="Short Film"
      director="Zeyuan Ren"
      next="/ecfc"
      previous="/chapeldrive"
      link="https://zeyuanren.com/Coast-to-Coast-Preamble"
      imgLink="img/coast.gif"
      tags="Zeyuan, Ren, Coast, shortfilm, film, score, music, soundtrack, Julian, Tran, composer, director, cinema, artist, portfolio"
    />
  );
}
