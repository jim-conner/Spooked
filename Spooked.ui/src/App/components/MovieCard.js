import React from 'react';
import {
  Card, CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import MovieDetailModal from './MovieDetailModal';

function MovieCard({ movieObj }) {
  return (
    <div>
  <Card color='dark'>
    <CardImg
      alt="Movie Poster"
      src={movieObj.poster}
    />
    <MovieDetailModal
      movieObj={movieObj}
    />
  </Card>
</div>
  );
}

MovieCard.propTypes = {
  movieObj: PropTypes.object
};

export default MovieCard;
