// Packages
import { useState, useEffect, useRef } from "react";
import axios from "axios";

// Components
import AlbumModal from "../../components/Artist/AlbumModal";
import Loader from "../../components/Artist/Loader";

const Discography = () => {
  // States
  const [modal, setModal] = useState();
  // States
  const [isLoading, setIsLoading] = useState(true);
  const [albumData, setAlbumData] = useState();
  // Get Albums Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://juliantran-backend.herokuapp.com/albums`
        );
        console.log(response.data);
        setAlbumData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {modal && <AlbumModal setModal={setModal} id={modal} />}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="discography">
          {albumData.map((album, index) => {
            return (
              <div className="discography__album" id={index}>
                <div>
                  <div
                    className="discography__hover"
                    onClick={() => setModal(album._id)}
                  >
                    <h1>Click for more info</h1>
                  </div>
                  <img src={album.cover.front} alt={album.cover.front} />
                </div>
                <div className="discography__album__date">
                  {album.releaseDate}
                </div>
                <h1>{album.title}</h1>
                <button
                  className="btn-classic"
                  onClick={() => setModal(album._id)}
                >
                  more info
                </button>
                {/* {index + 1 < albumData.length && (
                  <i
                    class="fas fa-caret-down discography__previous"
                    onClick={() =>
                      document
                        .getElementById(index + 1)
                        .scrollIntoView({ behavior: "smooth" })
                    }
                  ></i>
                )} */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Discography;
