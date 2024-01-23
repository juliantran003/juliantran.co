// IMPORTS
import { useRouter } from "next/router";
export default function Information() {
  const router = useRouter();
  return router.pathname === "/" ? (
    <div className="information">
      <p>
        MY NAME IS Julian Tran. I’M A 24 year-old artist AND composer based in
        London, UK. <br />
        <br />
        MY WORK EXPLORES THE RELATIONSHIP BETWEEN SONGWRITING, SOUNDSCAPES AND
        MIXED MEDIA SCORES. <br />
        <br />
        Most of it is written using a mixture of physical and digital
        instruments. <br />
        <br />
        <br />
        <br />
        i’m interested in finding the combinations of textures and harmonies
        that can bring about meaningful experiences.
        <br />
        <br /> I love working with filmmakers.
      </p>
      <p className="sun">✹</p>
    </div>
  ) : (
    <></>
  );
}
