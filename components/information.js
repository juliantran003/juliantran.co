// IMPORTS
import { useRouter } from "next/router";
export default function Information() {
  const router = useRouter();
  return router.pathname === "/" ? (
    <div className="information">
      <p>
        Julian Tran is a 24 year-old artist and composer based in London, UK.
        <br></br>
        <br></br>
        His work explores the relationships between songwriting, soundscapes and
        film. <br></br>
        <br></br> It is made using a mixture of physical and digital instruments
        in an effort to create sonic landscapes.
      </p>
      <p className="sun">✹</p>
    </div>
  ) : (
    <></>
  );
}
