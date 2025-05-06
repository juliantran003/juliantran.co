// IMPORTS
import { useRouter } from "next/router";
import Image from "next/image";

// IMG
import portrait from "../public/img/portrait.jpg";

export default function MobileInformation() {
  const router = useRouter();
  return (
    <div className="mobile_information">
      <p>
        My name is Julian Tran. I am a composer and sound artist based in
        London, UK.
        <br></br>
        <br></br>
        My work explores relationships between songwriting, soundscapes and film
        using a mixture of physical and digital instruments. <br></br>
        <br></br> Telling stories of love and empathy, understaning what they
        mean and why they're important.
        <br></br>
        <br></br> I take immense pleasure in working with filmmakers, animators
        and other visual creators. Please feel free to write to me .
      </p>
    </div>
  );
}
