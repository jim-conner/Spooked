import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, CardGroup } from 'reactstrap';
import MovieCard from '../components/MovieCard';
import '../App.scss';
import { getAllMovies } from '../../helpers/data/movieData';
import SearchBar from '../components/SearchBar';

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getAllMovies().then(setMovies);
  }, []);

  const filteredMovies = search.length === 0
    ? movies
    : movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container>
      <div className='homeHeader'>
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>
      <div className='homeContainer'>
        <CardGroup>
          {
            filteredMovies?.map((movieObj) => (
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
  movieObj: PropTypes.object,
};

export default Home;
