// // Packages
import axios from "axios";
import { useState, useEffect } from "react";

// Components
import Loader from "../../components/Artist/Loader";

const Media = () => {
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Youtube Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLL_dRZEFBsdxsIwVX7ndMKvGoB7f6n_3e&key=AIzaSyB0DNiAQBcaTJf1PTVX-1p9XMdL7KPapro`
        );
        setData(response.data);
        setIsLoading(false);

        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="media">
          {data.items.map((video) => {
            return (
              <div className="media__container">
                <iframe
                  src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <h1>{video.snippet.title}</h1>

                <h2>
                  {video.snippet.publishedAt
                    .replace("-", ".")
                    .replace("-", ".")
                    .substring(0, video.snippet.publishedAt.indexOf("T"))}
                </h2>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Media;
