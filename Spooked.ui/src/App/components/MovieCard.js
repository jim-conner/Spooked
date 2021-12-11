import React from 'react';
import {
  Card, CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';

function MovieCard({ movieObj }) {
  return (
    <div>
  <Card>
    <CardImg
      alt="Movie Poster"
      // src="https://picsum.photos/318/180"
      src={movieObj.poster}
      // top
    />
    {/* <CardBody> */}
      {/* <CardTitle tag="h5">
        {movieObj.title}
      </CardTitle> */}
      {/* <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {movieObj.year}
      </CardSubtitle> */}
      {/* <CardFooter className="text-muted">
        <small className="text-muted">
        </small>
      </CardFooter> */}
    {/* </CardBody> */}
  </Card>
</div>
  );
}

MovieCard.propTypes = {
  movieObj: PropTypes.object
};

export default MovieCard;
