import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, CardGroup } from 'reactstrap';
import MovieCard from '../components/MovieCard';
import '../App.scss';
import { getAllMovies, getMoviesBySubGenre } from '../../helpers/data/movieData';
import SearchBar from '../components/SearchBar';
import SubGenreSelect from '../components/SubGenreSelect';

function Home() {
  const [movies, setMovies] = useState([]);
  // const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState(0);

  useEffect(() => {
    if (select === 0) {
      getAllMovies().then(setMovies);
    } else if (select !== 0) {
      debugger;
      getMoviesBySubGenre(select).then(setMovies);
    }
  }, []);

  // const filteredMoviesBySubGenre = () => {
  //   if (select.length === 0 || null) {
  //   }
  // };
  const filteredMoviesByTitle = search.length === 0
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
      <div className='homeHeader'>
        <SubGenreSelect
          select={select}
          setSelect={setSelect}
        />
      </div>
      <div className='homeContainer'>
        <CardGroup>
          {
            filteredMoviesByTitle?.map((movieObj) => (
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
  search: PropTypes.number
};

export default Home;
