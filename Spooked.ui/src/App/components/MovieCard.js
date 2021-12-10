import React from 'react';
import {
  Card, CardBody, CardFooter, CardImg, CardSubtitle, CardTitle
} from 'reactstrap';
// import PropTypes from 'prop-types';

function MovieCard() {
  return (
    <div>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      // src={poster}
      top
    />
    <CardBody>
      <CardTitle tag="h5">
        {/* {title} */}Title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Year
      </CardSubtitle>
      {/* <Button>
        Button
      </Button> */}
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
