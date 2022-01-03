import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, CardImg, CardImgOverlay, CardText, ModalBody, CardFooter, Badge
} from 'reactstrap';
import { returnLocalOmdb } from '../../helpers/data/movieData';

function MovieDetailModal({ movieObj }) {
  const [modal, setModal] = useState(false);
  const [fullMovieObj, setFullMovieObj] = useState({});

  const toggle = () => setModal(!modal);

  const handleClick = (movieId, imdbId, e) => {
    e.preventDefault();
    toggle();
    returnLocalOmdb(movieId, imdbId)
      .then((resp) => setFullMovieObj(resp));
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
            alt="Movie Detail Poster"
            src={fullMovieObj.poster}
          />
          <div>
            <Badge color="primary">{fullMovieObj.Year}</Badge>
            <Badge color="primary">{fullMovieObj.Rated}</Badge>
            <Badge color="primary"><i className="fab fa-imdb"></i> {fullMovieObj.imdbRating}</Badge>
            <Badge
                  color="primary"
                  pill
                >
                  SubGenre: {movieObj.subGenreId}
            </Badge>

          </div>
           <CardText>
              {fullMovieObj.Plot}
            </CardText>
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
