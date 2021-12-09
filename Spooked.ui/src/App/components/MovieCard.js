import React from 'react';
import {
  Card, CardBody, CardImg, CardText, CardTitle
} from 'reactstrap';
// import PropTypes from 'prop-types';

function MovieCard() {
  return (
    <div>
  <Card>
    <CardImg
      alt="Card image cap"
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
  </Card>
  <Card>
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
    <CardImg
      alt="Card image cap"
      bottom
      src="https://picsum.photos/318/180"
      width="100%"
    />
  </Card>
</div>
  );
}

MovieCard.propTypes = {

};

export default MovieCard;
