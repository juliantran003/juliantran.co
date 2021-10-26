// img
import misery from "../../assets/img/background2.jpg";
import miseryBack from "../../assets/img/misery_back.PNG";

const MiseryModal = ({ setModal }) => {
  return (
    <div className="album__modal">
      <div
        className="album__x"
        onClick={() => {
          setModal();
        }}
      >
        x
      </div>
      <div className="album__container">
        <div>
          <div>
            <img src={misery} alt={misery} />
            <img src={miseryBack} alt={miseryBack} />
          </div>
          <div>
            <p>
              Written, performed & produced by <span>Julian Tran</span>
            </p>
            <p>
              Violin arrangements performed by{" "}
              <span>Clara Barry "Venus Smith"</span> & written with{" "}
              <span>Julian Tran</span>
            </p>
            <p>
              Mixed and mastered by <span>Sefi Carmel </span> &
              <span>Julian Tran</span>
            </p>
            <p>
              Artwork designed by <span>Somnath Bhatt</span>
            </p>
          </div>
        </div>
        <div>
          <div>
            <h1>Misery</h1>
            <h2>released January 2021</h2>
            <div>
              <i class="fab fa-spotify"></i>
              <i class="fab fa-apple"></i>
              <i class="fab fa-bandcamp"></i>
            </div>
          </div>
          <iframe
            title="misery"
            src="https://open.spotify.com/embed/album/0dExIIFelvhtT35JHpGoNj?theme=0"
            width="90%"
            height="70%"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default MiseryModal;
