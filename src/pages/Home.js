import { useState, useEffect } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const URL = "https://yts.mx/api/v2/list_movies.json";
    const response = await fetch(URL);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => {
            return (
              <Movie
                id={movie.id}
                mediumCoverImage={movie.medium_cover_image}
                title={movie.title}
                rating={movie.rating}
                summary={movie.summary}
                genres={movie.genres}
                key={movie.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
