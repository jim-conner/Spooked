import React from 'react';
import { Container } from 'reactstrap';
import MovieCard from '../components/MovieCard';
// import PropTypes from 'prop-types';

function Home() {
  return (
    <Container>
      <h3>Home.js</h3>
      <MovieCard/>
    </Container>
  );
}

Home.propTypes = {

};

export default Home;
