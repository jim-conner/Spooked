import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, CardGroup } from 'reactstrap';
import MovieCard from '../components/MovieCard';
import '../App.scss';
import getAllMovies from '../../helpers/data/movieData';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then(setMovies);
    console.warn(movies);
  }, []);
  return (
    <Container>
      <div className='homeHeader'>
        Home.js
      </div>
      <div className='homeContainer'>
        <CardGroup>
          {
            movies?.map((movieObj) => (
              <MovieCard
                key={movieObj.id}
                movieObj={movieObj}
              />
            ))
          }
        </CardGroup>
      </div>

    </Container>
  );
}

Home.propTypes = {
  movies: PropTypes.array,
  movieObj: PropTypes.object
};

export default Home;
