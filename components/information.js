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
        using a mixture of physical and digital instruments. <br></br>
        <br></br> At the core of my practice lies a deep desire to communicate
        my and others' stories through love and empathy.<br></br>
        <br></br> Helping tell these stories and understanding what they mean to
        myself and others gives me a sense of purpose.
      </p>
      <p className="sun">✹</p>
    </div>
  ) : (
    <></>
  );
}
