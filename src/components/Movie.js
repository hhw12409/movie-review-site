import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, mediumCoverImage, title, rating, summary, genres }) => {
  return (
    <div>
      <img src={mediumCoverImage} alt={"Movie"} />
      <Link to={`/movie/${id}`}>
        <h1> Title: {title}</h1>
      </Link>
      <h3>{rating}</h3>
      <p>{summary || "no summary"}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

Movie.propTypes = {
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
