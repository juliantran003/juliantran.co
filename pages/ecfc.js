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
      type="Score for Short Film"
      director="Lilan Yang"
      next="/fantasy"
      previous="/coast"
      link="https://lilanyang.studio/ecfc.html"
    />
  );
}
