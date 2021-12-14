import React from 'react';
import {
  Card, CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import MovieDetailModal from './MovieDetailModal';

function MovieCard({ movieObj }) {
  return (
    <div>
  <Card>
    {/* <Button
      color='transparent'
      onClick={(e) => handleClick(movieObj.id, movieObj.imdbId, e)}
    > */}
    <CardImg
      alt="Movie Poster"
      src={movieObj.poster}
      // onClick={(e) => handleClick(movieObj.Id, e)}
    />
    {/* </Button> */}
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
