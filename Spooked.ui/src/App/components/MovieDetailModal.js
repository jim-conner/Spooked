import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, CardImg, CardImgOverlay, CardText, CardBody, ModalBody, CardTitle, CardSubtitle, CardFooter, Badge, ButtonGroup, Button,
} from 'reactstrap';
import { returnLocalOmdb } from '../../helpers/data/movieData';
// import { getUserByFirebaseId } from '../../helpers/data/userData';
import { AddMovieToWatchList } from '../../helpers/data/watchListData';

function MovieDetailModal({ user, movieObj }) {
  const [modal, setModal] = useState(false);
  const [fullMovieObj, setFullMovieObj] = useState({});
  const [watchListObj, setWatchListObj] = useState({
    userId: user.id,
    movieId: movieObj.id
  });

  const toggle = () => setModal(!modal);

  const handleClick = (movieId, imdbId, e) => {
    e.preventDefault();
    toggle();
    returnLocalOmdb(movieId, imdbId)
      .then((resp) => setFullMovieObj(resp));
  };

  const handleWatchList = (e) => {
    e.preventDefault();
    AddMovieToWatchList(watchListObj).then(setWatchListObj);
  };

  return (
    <CardImgOverlay
      style={{ cursor: 'pointer' }}
      onClick={(e) => handleClick(movieObj.id, movieObj.imdbId, e)}
    >
      <Modal
      className='cardModal'
      isOpen={modal}
      toggle={toggle}
      centered
      >
        <ModalBody>
          <CardImg
            alt="Movie Detail"
            src={fullMovieObj.Poster}
          />
          <CardBody>
            <CardTitle tag="h5">
            {fullMovieObj.title}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {fullMovieObj.Year} {' | '} {fullMovieObj.Rated}
            </CardSubtitle>
            <CardText>
            <i className="fab fa-imdb fa-2x"></i> {fullMovieObj.imdbRating}{' | '}
             {fullMovieObj.watched === false ? 'unwatched' : 'watched'}{' | '}
                <Badge
                  color="primary"
                  pill
                >
                  SubGenre: {fullMovieObj.subGenreId}
                </Badge>
              <small className="text-muted">
                Subgenre should go here
              </small>
            </CardText>
            <CardText>
              {fullMovieObj.Plot}
            </CardText>
          </CardBody>
          <CardFooter>
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
          </CardFooter>
          <ButtonGroup>
            <Button
            onClick={(e) => (handleWatchList(e))}
            // onClick={console.warn(movieObj.id)}
            color='primary'>
              +
            </Button>
            <Button color= 'warning'>
              -
            </Button>
          </ButtonGroup>
        </ModalBody>
      </Modal>
    </CardImgOverlay>
  );
}

MovieDetailModal.propTypes = {
  movieObj: PropTypes.object,
  user: PropTypes.any
};

export default MovieDetailModal;
