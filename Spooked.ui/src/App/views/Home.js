import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form } from 'reactstrap';
import MovieCard from '../components/MovieCard';
import '../App.scss';
import { getAllMovies, getMoviesBySubGenre } from '../../helpers/data/movieData';
import SearchBar from '../components/SearchBar';
import SubGenreSelect from '../components/SubGenreSelect';
import TriggerSelect from '../components/TriggerSelect';

function Home() {
  const [movies, setMovies] = useState([]);
  // const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState(0);
  const [selectTrigger, setSelectTrigger] = useState('');

  // useEffect(() => {
  //   getAllMovies().then(setMovies);
  // }, []);

  useEffect(() => {
    if (select !== 0) {
      getMoviesBySubGenre(select).then(setMovies);
    } else if (selectTrigger !== '') {
      // getMoviesByTriggers().then(setMovies);
    } else {
      getAllMovies().then(setMovies);
    }
    // return () => {
    //   cleanup
    // }
  }, [select]);

  const filteredMoviesByTitle = search.length === 0
    ? movies
    : movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container>
      <div className='homeHeader'>
        <Form inline>
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
          <SubGenreSelect
            select={select}
            setSelect={setSelect}
          />
          <TriggerSelect
            selectTrigger={selectTrigger}
            setSelectTrigger={setSelectTrigger}
          />
        </Form>
      </div>
      <div className='homeContainer'>
          {
            filteredMoviesByTitle?.map((movieObj) => (
              <MovieCard
                key={movieObj.id}
                movieObj={movieObj}
              />
            ))
          }
      </div>
    </Container>
  );
}

Home.propTypes = {
  movies: PropTypes.array,
  movieObj: PropTypes.object,
};

export default Home;
