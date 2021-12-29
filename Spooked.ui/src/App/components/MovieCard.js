import React, { useEffect, useState } from 'react';
import {
  Button,
  ButtonGroup,
  Card, CardFooter, CardImg
  // Tooltip
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addMovieToWatchList, removeMovieFromWatchList } from '../../helpers/data/watchListData';
import { getSingleMovie, updateWatchedStatus } from '../../helpers/data/movieData';
// import MovieDetailModal from './MovieDetailModal';

function MovieCard({
  user, movieObj, watchListMovieObj, setWatchlist
}) {
  // const [tooltipOpen, setTooltipOpen] = useState(false);
  const [watchListObj, setWatchListObj] = useState({
    id: watchListMovieObj?.id,
    userId: user?.id,
    movieId: movieObj?.id
  });

  useEffect(() => {
    debugger;
    getSingleMovie(movieObj.id);
  }, [movieObj.watched]);

  const handleWatchedBool = (e) => {
    e.preventDefault();
    updateWatchedStatus(movieObj.watched);
  };

  const handleWatchListAdd = (e) => {
    e.preventDefault();
    addMovieToWatchList(watchListObj)
      .then(() => setWatchListObj(watchListObj));
  };

  const handleWatchListRemove = (e) => {
    e.preventDefault();
    removeMovieFromWatchList(movieObj.id)
      .then((watchListArray) => setWatchlist(watchListArray));
  };

  return (
    <div>
  <Card color='dark' className='movieCard'>
    {
      <Button className='favBtn' id='watchedToolTip' onClick={(e) => { handleWatchedBool(e); }}>
            {
              movieObj.watched === true
                ? <i className='fas fa-check' style={{ color: 'orangered' }}></i>
                : <i className='fas fa-plus' style={{ color: 'orangered' }}></i>
              }
            {/* <Tooltip
              isOpen={tooltipOpen}
              flip
              target="watchedToolTip"
              toggle={() => { setTooltipOpen(!tooltipOpen); }}
            >
              Hello world!
            </Tooltip> */}
          </Button>
    }

    <CardImg
      alt="Movie Poster"
      src={movieObj.poster}
    />
    {/* <MovieDetailModal
      user={user}
      movieObj={movieObj}
    /> */}
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
  watchListMovieObj: PropTypes.object,
  setWatchlist: PropTypes.func,
  setMovies: PropTypes.func
};

export default MovieCard;
