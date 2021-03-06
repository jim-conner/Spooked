import React, { useState } from 'react';
import {
  Button, Card, CardImg, Tooltip
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addMovieToWatchList } from '../../helpers/data/watchListData';
import { updateWatchedStatus } from '../../helpers/data/movieData';
import MovieDetailModal from './MovieDetailModal';

function MovieCard({
  user, movieObj, watchListMovieObj
}) {
  const [tooltipOpen, setToolTipOpen] = useState(false);
  const [updatedMovieObj, setUpdatedMovieObj] = useState({
    id: movieObj?.id,
    imdbId: movieObj?.imdbId,
    poster: movieObj?.poster,
    subGenreId: movieObj?.subGenreId,
    title: movieObj?.title,
    watched: movieObj?.watched
  });
  const [watchListObj, setWatchListObj] = useState({
    id: watchListMovieObj?.id,
    userId: user?.id,
    movieId: movieObj?.id
  });

  const toggle = () => setToolTipOpen(!tooltipOpen);

  const handleWatchedBool = (e) => {
    e.preventDefault();
    updateWatchedStatus(movieObj.id).then((resp) => setUpdatedMovieObj(resp));
  };

  const handleWatchListAdd = (e) => {
    e.preventDefault();
    addMovieToWatchList(watchListObj)
      .then(() => setWatchListObj(watchListObj));
  };

  return (
    <>
  <Card color='dark' className='movieCard'>
    {
        <Button className='favBtn' id='watchedToolTip'
          onClick={(e) => { handleWatchedBool(e); }}>
            {
              updatedMovieObj.watched === true
                ? <i className='fas fa-check' style={{ color: 'orangered' }}></i>
                : <i className='fas fa-plus' style={{ color: 'orangered' }}></i>
              }
      <div>

            <Tooltip
              target="watchedToolTip"
              placement='top'
              toggle={toggle}
              isOpen={tooltipOpen}
              // delay={{ show: '200', hide: '0' }}
              // style={{ tranisitionDelay: '0s' }}
            >
              {updatedMovieObj.watched === true ? '' : 'Mark as watched'}
            </Tooltip>
      </div>
          </Button>
    }
      <MovieDetailModal
        user={user}
        movieObj={movieObj}
      />
    <CardImg
      alt="Movie Poster"
      src={movieObj.poster}
      style={{ maxHeight: '400px' }}
    />
    {
      user
        ? <Button
            className='addToWatchListButton'
            onClick={(e) => (handleWatchListAdd(e))}
            size='lg'
          >
            Add to Watchlist
          </Button>
        : ''
    }
  </Card>
</>
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
