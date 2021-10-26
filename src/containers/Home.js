// img
import misery from "../assets/img/background.JPG";
import background from "../assets/img/selector.png";

const Home = () => {
  return (
    <div className="container">
      <div className="home">
        <h1>
          <span>MISERY </span> now available
        </h1>
        <img className="home__image" src={misery} alt={misery} />
        <button className="btn-classic">listen</button>
        {/* <img className="home__background" src={background} alt={background} /> */}
      </div>
    </div>
  );
};

export default Home;
