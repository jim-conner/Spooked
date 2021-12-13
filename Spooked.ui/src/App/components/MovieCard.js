import React from 'react';
import {
  Button,
  Card, CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
// import MovieDetailModal from './MovieDetailModal';
import { getSingleMovie } from '../../helpers/data/movieData';

function MovieCard({ movieObj }) {
  const handleClick = (movieId, e) => {
    e.preventDefault();
    // toggle();
    // if (movieId != null) {
    // setIdToUpdate(movieId);
    getSingleMovie(movieId);
    console.warn(movieId);
    // }
  };

  return (
    <div>
  <Card>
    <CardImg
      alt="Movie Poster"
      src={movieObj.poster}
      // onClick={(e) => handleClick(movieObj.Id, e)}
    />
    <Button
      onClick={(e) => handleClick(movieObj.imdbId, e)}
    />
      {/* <MovieDetailModal
        movieObj={movieObj}
      /> */}
  </Card>
</div>
  );
}

MovieCard.propTypes = {
  movieObj: PropTypes.object
};

export default MovieCard;
