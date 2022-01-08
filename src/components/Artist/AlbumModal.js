// Packages
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Loader from "./Loader";

// img
import misery from "../../assets/img/misery_front.jpg";
import miseryBack from "../../assets/img/misery_back.PNG";

const AlbumModal = ({ setModal, id }) => {
  // States
  const [isLoading, setIsLoading] = useState(true);
  const [albumData, setAlbumData] = useState();
  // Get Albums Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://juliantran-backend.herokuapp.com/album/${id}`
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
  return isLoading ? (
    <Loader />
  ) : (
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
            <img
              src={albumData.cover.front}
              alt={`${albumData.title} front cover`}
            />
            <img
              src={albumData.cover.back}
              alt={`${albumData.title} back cover`}
            />
          </div>
          {/* <div>
            {albumData.credits.map((credit) => {
              return <p>{credit}</p>;
            })}
          </div> */}
        </div>
        <div>
          <div>
            <h1>{albumData.title}</h1>
            <h2>{albumData.releaseDate}</h2>
            <div>
              <a href={albumData.links.spotify} target="_blank">
                <i class="fab fa-spotify"></i>
              </a>
              <a href={albumData.links.apple} target="_blank">
                <i class="fab fa-apple"></i>
              </a>
              <a href={albumData.links.bandcamp} target="_blank">
                <i class="fab fa-bandcamp"></i>
              </a>
            </div>
          </div>
          {/* <iframe
            title={albumData.title}
            src={albumData.spotifyEmbed}
            frameBorder="0"
            allowfullscreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};
export default AlbumModal;
