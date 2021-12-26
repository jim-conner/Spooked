import React, { useState } from 'react';
import {
  Badge,
  Button,
  ButtonGroup,
  Card, CardBody, CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addMovieToWatchList, removeMovieFromWatchList } from '../../helpers/data/watchListData';

function WatchListCard({
  user, movieObj, setWatchlist
}) {
  const [watchListObj, setWatchListObj] = useState({
    id: movieObj?.id,
    userId: user?.id,
    movieId: movieObj?.id
  });

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
    {/* {
      movieObj.watched === true
        ? <div className='favBtn'>
            <i className='fas fa-heart fa-2x' style={{ color: 'orangered' }}></i>
          </div>
        : ''
    } */}

    <CardImg
      alt="Movie Poster"
      src={movieObj.movie.poster}
    />
    <CardBody>
            <div>
              <Badge
                color="warning"
                pill
              >
                Trigger1
              </Badge>
              <Badge
                color="danger"
                pill
              >
                Trigger2
              </Badge>
              <Badge
                color="success"
                pill
              >
                Example3
              </Badge>
            </div>
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
    </CardBody>
  </Card>
</div>
  );
}

WatchListCard.propTypes = {
  user: PropTypes.any,
  movieObj: PropTypes.object,
  setWatchlist: PropTypes.func,
};

export default WatchListCard;
