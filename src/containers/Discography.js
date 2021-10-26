// Packages
import { useState } from "react";

// Components
import MiseryModal from "../components/Album Modals/MiseryModal";

// img
import misery from "../assets/img/background2.jpg";

const Discography = () => {
  // States
  const [modal, setModal] = useState("");
  return (
    <div className="container">
      {modal === "misery" && <MiseryModal setModal={setModal} />}
      <div className="discography">
        <div className="discography__misery">
          {/* <h1>Misery</h1> */}
          <div>
            <div
              className="discography__hover"
              onClick={() => setModal("misery")}
            >
              <h1>Misery</h1>
            </div>
            <img src={misery} alt={misery} />
          </div>

          <button className="btn-classic">more info</button>
        </div>
      </div>
    </div>
  );
};

export default Discography;
