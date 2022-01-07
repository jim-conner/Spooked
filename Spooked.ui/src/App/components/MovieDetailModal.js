import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, CardText, ModalBody, Badge, Button, CardImg, ModalHeader
} from 'reactstrap';
import { returnLocalOmdb } from '../../helpers/data/movieData';
import { getMovieTriggers, getTotalTriggersValue } from '../../helpers/data/triggerData';
import SpookMeter from './SpookMeter';
import blood from '../assets/Blood-Falling-PNG-File.png';

function MovieDetailModal({ movieObj }) {
  const [modal, setModal] = useState(false);
  const [fullMovieObj, setFullMovieObj] = useState({});
  const [triggerBarValue, setTriggerBarValue] = useState(0);
  const [movieTriggers, setMovieTriggers] = useState([]);

  const toggle = () => setModal(!modal);

  const handleClick = (movieId, imdbId, e) => {
    e.preventDefault();
    toggle();
    returnLocalOmdb(movieId, imdbId)
      .then((resp) => setFullMovieObj(resp));
    getTotalTriggersValue(imdbId).then((resp) => setTriggerBarValue(resp));
    getMovieTriggers(imdbId).then((resp) => setMovieTriggers(resp));
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
      centered
      >
        <ModalBody>
          <ModalHeader toggle={toggle}>
            {fullMovieObj.title}
          </ModalHeader>
          <div>
            <Badge color="primary">{fullMovieObj.Year}</Badge>
            <Badge color="primary">{fullMovieObj.Rated}</Badge>
            <Badge color="primary"><i className="fab fa-imdb"></i> {fullMovieObj.imdbRating}</Badge>
            <Badge
              color="primary"
            >
              SubGenre: {movieObj.subGenreId}
            </Badge>
          </div>
          <div>
          {
            movieTriggers.map((movieTrigger) => (
              <Badge
                color="warning"
                pill
                key={movieTrigger.id}
              >
                {movieTrigger.name}
              </Badge>
            ))
          }
            </div>
           <CardText>
              {fullMovieObj.Plot}
            </CardText>
            <ModalHeader>
              Spook-O-Meter
            </ModalHeader>
            <div>
              <SpookMeter
                triggerBarValue={triggerBarValue}
              />
              <CardImg
                alt="Movie Detail Poster"
                src={blood}
              />
            </div>
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
