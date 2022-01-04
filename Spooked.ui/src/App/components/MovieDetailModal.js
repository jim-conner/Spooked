import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, CardImg, CardText, ModalBody, CardFooter, Badge, Button
} from 'reactstrap';
import { returnLocalOmdb } from '../../helpers/data/movieData';
import { getTotalTriggersValue } from '../../helpers/data/triggerData';
import SpookMeter from './SpookMeter';

function MovieDetailModal({ movieObj }) {
  const [modal, setModal] = useState(false);
  const [fullMovieObj, setFullMovieObj] = useState({});
  const [triggerBarValue, setTriggerBarValue] = useState(0);

  const toggle = () => setModal(!modal);

  const handleClick = (movieId, imdbId, e) => {
    e.preventDefault();
    toggle();
    returnLocalOmdb(movieId, imdbId)
      .then((resp) => setFullMovieObj(resp));
    getTotalTriggersValue(movieId).then((resp) => setTriggerBarValue(resp));
  };

  return (
    <div>
    <Button
      size='lg'
      className='modalBtn'
      onClick={(e) => handleClick(movieObj.id, movieObj.imdbId, e)}
    >
      View Detail
      </Button>
      <Modal
      className='cardModal'
      isOpen={modal}
      toggle={toggle}
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
           <CardText>
              {fullMovieObj.Plot}
            </CardText>
          <CardFooter>
          <SpookMeter
          triggerBarValue={triggerBarValue}
        />
          </CardFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

MovieDetailModal.propTypes = {
  movieObj: PropTypes.object,
  user: PropTypes.any
};

export default MovieDetailModal;
