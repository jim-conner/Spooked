import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, CardImg, CardImgOverlay, CardText, CardBody, ModalBody, CardTitle, CardSubtitle,
} from 'reactstrap';
import { returnLocalOmdb } from '../../helpers/data/movieData';
// import { getSingleMovie } from '../../helpers/data/movieData';

function MovieDetailModal({ movieObj }) {
  // const [idToUpdate, setIdToUpdate] = useState('');
  const [modal, setModal] = useState(false);
  const [fullMovieObj, setFullMovieObj] = useState({});

  const toggle = () => setModal(!modal);

  const handleClick = (movieId, imdbId, e) => {
    e.preventDefault();
    toggle();
    // if (movieId != null) {
    // setIdToUpdate(movieId);
    console.warn(movieObj);
    returnLocalOmdb(movieId, imdbId)
      .then((resp) => console.warn(setFullMovieObj(resp)));
    // .then((resp) => setFullMovieObj(resp));
    // console.warn(fullMovieObj);
    // }
  };

  return (
    <CardImgOverlay
      style={{ cursor: 'pointer' }}
      onClick={(e) => handleClick(movieObj.id, movieObj.imdbId, e)}
    >
      <Modal
      isOpen={modal}
      toggle={toggle}
      centered
      >
        {/* <ModalHeader toggle={toggle} > */}
          {/* {fullMovieObj.title} | {fullMovieObj.Year} */}
        {/* </ModalHeader> */}
        <ModalBody>
          <CardImg
            alt="Movie Detail"
            src={fullMovieObj.Poster}
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
            {fullMovieObj.title}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {fullMovieObj.Year} | {fullMovieObj.Rated}
            </CardSubtitle>
            <CardText>
              {fullMovieObj.Plot}
            </CardText>
            <CardText>
            <i className="fab fa-imdb fa-2x"></i> {fullMovieObj.imdbRating}______
             {fullMovieObj.watched === false ? 'unwatched' : 'watched'}_____
             SubGenre: {fullMovieObj.subGenreId}
              {/* <small className="text-muted">
                Last updated 3 mins ago
              </small> */}
            </CardText>
          </CardBody>
        </ModalBody>
      </Modal>
    </CardImgOverlay>
  );
}

MovieDetailModal.propTypes = {
  movieObj: PropTypes.object
};

export default MovieDetailModal;
