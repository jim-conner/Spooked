import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader, CardImg, CardImgOverlay, CardText, CardTitle, CardBody, ModalBody,
} from 'reactstrap';

function MovieDetailModal({ movieObj }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <CardImgOverlay
      style={{ cursor: 'pointer' }}
      onClick={toggle}
    >
      <Modal
      isOpen={modal}
      toggle={toggle}
      centered
      >
        <ModalHeader toggle={toggle} >
          {movieObj.title}
        </ModalHeader>
        {/* <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          {movieObj.year}
        </CardSubtitle> */}
  <ModalBody>
    <CardImg
      alt="Movie Details"
      src="https://picsum.photos/318/180"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
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
