// IMPORTS
import FilmPage from "@/components/filmPage";

// IMG
import background from "../public/img/coast.gif";

export default function SoftReset() {
  return (
    <FilmPage
      img={background}
      title="Soft Reset : Baby Universe"
      year="2025"
      type="Exhibition Soundpiece"
      director="Hanne Pearer"
      next="/chapeldrive"
      previous="/everything"
      link="https://hannepeeraer.co.uk/"
      imgLink="img/soft-reset.gif"
      tags="Hanne, Pearer, Hanne Pearer, soundpiece, exhibition,music, soundtrack, Julian, Tran, composer, director, cinema, artist, portfolio"
    />
  );
}
