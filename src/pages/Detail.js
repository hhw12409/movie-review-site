import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const URL = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    const response = await fetch(URL);
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <img src={movie.medium_cover_image} alt={"cover_image"} />
          <div>{movie.title_long}</div>
          <div>{movie.rating}</div>
          <ul>
            {movie.genres.map((g) => {
              return <li key={g}>{g}</li>;
            })}
          </ul>
          <div>{movie.description_full || "No summary"}</div>
        </>
      )}
    </>
  );
};

export default Detail;
