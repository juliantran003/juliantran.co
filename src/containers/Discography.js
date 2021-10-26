// img
import misery from "../assets/img/background2.jpg";

const Discography = () => {
  return (
    <div className="container">
      <div className="discography">
        <div className="discography__misery">
          {/* <h1>Misery</h1> */}
          <div>
            <div className="discography__hover">
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
