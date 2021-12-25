import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Card, CardFooter, CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addMovieToWatchList, removeMovieFromWatchList } from '../../helpers/data/watchListData';
import MovieDetailModal from './MovieDetailModal';

function MovieCard({ user, movieObj }) {
  const [watchListObj, setWatchListObj] = useState({
    id: movieObj?.id,
    // movie: movieObj,
    userId: user?.id,
    movieId: movieObj?.movieId
  });

  const handleWatchListAdd = (e) => {
    e.preventDefault();
    addMovieToWatchList(watchListObj);
  };

  const handleWatchListRemove = (e) => {
    e.preventDefault();
    removeMovieFromWatchList(watchListObj.id).then(setWatchListObj);
    // .then((resp) => console.warn(resp));
  };

  return (
    <div>
  <Card color='dark' className='movieCard'>
    {/* {
      movieObj.watched === true
        ? <div className='favBtn'>
            <i className='fas fa-heart fa-2x' style={{ color: 'orangered' }}></i>
          </div>
        : ''
    } */}

    <CardImg
      alt="Movie Poster"
      src={movieObj.poster}
    />
    <MovieDetailModal
      user={user}
      movieObj={movieObj}
    />
    <CardFooter>
    <ButtonGroup>
            <Button
            onClick={(e) => (handleWatchListAdd(e))}
            color='primary'>
              +
            </Button>
            <Button
            onClick={(e) => (handleWatchListRemove(e))}
            color= 'warning'>
              -
            </Button>
          </ButtonGroup>
    </CardFooter>
  </Card>
</div>
  );
}

MovieCard.propTypes = {
  user: PropTypes.any,
  movieObj: PropTypes.object,
  watchListMovie: PropTypes.object,
};

export default MovieCard;
