// Packages
import { useHistory } from "react-router-dom";

const Home = () => {
  // Setup
  const history = useHistory();
  return (
    <div className="container">
      <div className="home">
        <h1>
          <span>MISERY </span> now available
        </h1>
        <img
          className="home__image"
          src="https://res.cloudinary.com/juliantran-co/image/upload/v1641658987/artist/albums/background_xnllpk.jpg"
          alt="Misery Artwork"
          onClick={() => history.push("/discography")}
        />
        <button
          className="btn-classic"
          onClick={() => history.push("/discography")}
        >
          listen
        </button>
        {/* <img className="home__background" src={background} alt={background} /> */}
      </div>
    </div>
  );
};

export default Home;
