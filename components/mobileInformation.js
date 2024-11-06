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
        Julian Tran is a 24 year-old artist and composer based in London, UK.
        <br></br>
        <br></br>
        His work explores the relationships between songwriting, soundscapes and
        film. <br></br>
        <br></br> It is made using a mixture of physical and digital instruments
        in an effort to create sonic landscapes.
        {/* <div className="mobile_portrait">
          <Image src={portrait} fill quality={70} priority={true} />
        </div> */}
      </p>
    </div>
  );
}
