// IMPORTS
import { useRouter } from "next/router";
export default function Information() {
  const router = useRouter();
  return router.pathname === "/" ? (
    <div className="information">
      <p>
        My name is Julian Tran. I am a composer and sound artist based in
        London, UK.
        <br></br>
        <br></br>
        My work explores relationships between songwriting, soundscapes and film
        using a blend of physical and digital instruments. <br></br>
        <br></br> Telling stories of love and empathy, understanding what they
        mean and why they're important.
        <br></br>
        <br></br> I take immense pleasure in working with filmmakers, animators
        and other visual creators. Please feel free to write to me .
      </p>
      <p className="sun">✹</p>
    </div>
  ) : (
    <></>
  );
}
