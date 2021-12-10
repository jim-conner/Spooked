import React from 'react';
import {
  Button,
  Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle
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
      // width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
      <Button>
        Button
      </Button>
      <CardFooter className="text-muted">
      <small className="text-muted">
          Last updated 3 mins ago
        </small>
    </CardFooter>
    </CardBody>
  </Card>
</div>
  );
}

MovieCard.propTypes = {

};

export default MovieCard;
