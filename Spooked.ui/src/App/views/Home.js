import React from 'react';
// import PropTypes from 'prop-types';
import { Container, CardGroup } from 'reactstrap';
import MovieCard from '../components/MovieCard';
import '../App.scss';

function Home() {
  return (
    <Container>
      <div className='homeHeader'>
        Home.js
      </div>
      <div className='homeContainer'>
        <CardGroup>
          <MovieCard
            key='imdbId'
          />
        </CardGroup>

      </div>

    </Container>
  );
}

Home.propTypes = {

};

export default Home;
