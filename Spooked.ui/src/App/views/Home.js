import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import '../App.scss';
import {
  getAllMovies, getMoviesBySingleTrigger, getMoviesBySubGenre, getMoviesByTriggerAndSubGenre
} from '../../helpers/data/movieData';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import SubGenreSelect from '../components/SubGenreSelect';
import TriggerSelect from '../components/TriggerSelect';

function Home({ user }) {
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState(0);
  const [selectTrigger, setSelectTrigger] = useState('');

  const handleResetAll = () => {
    setSearch('');
    setSelect(0);
    setSelectTrigger('');
  };

  const handleBrowseAll = () => {
    console.warn('browse all');
  };

  useEffect(() => {
    if (select !== 0 && selectTrigger !== '') {
      getMoviesByTriggerAndSubGenre(selectTrigger, selectTrigger).then(setMovies);
    } else if (select) {
      getMoviesBySubGenre(select).then(setMovies);
    } else if (selectTrigger) {
      getMoviesBySingleTrigger(selectTrigger).then(setMovies);
    } else {
      getAllMovies().then(setMovies);
    }
  }, [select, selectTrigger]);

  const filteredMoviesByTitle = search.length === 0
    ? movies
    : movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className='homeHeader'>
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
      </div>
      <div className='homeHeader'>
        <Button
          onClick={(handleBrowseAll)}
          style={{ color: 'orangered', marginRight: '10px' }}
          outline
        >
          Browse All
        </Button>
        <Button
          onClick={(handleResetAll)}
          style={{ color: 'orangered' }}
          outline
        >
          Reset All
        </Button>
      </div>
      {
        <div className='homeContainer'>
          {
            filteredMoviesByTitle && filteredMoviesByTitle.length === 0
              ? <div className='homeHeader' style={{ color: 'orangered', justifyContent: 'center' }}>
                {<div></div>}
                {<div><h5> <i className="fas fa-ghost fa-2x"></i> Oh dear, you scared off all the movies.  Keep Browsing....</h5></div>}
              </div>
              : filteredMoviesByTitle?.map((movieObj) => (
                <MovieCard
                  user={user}
                  key={movieObj.id}
                  movieObj={movieObj}
                  setMovies={setMovies}
                />
              ))
          }
        </div>
      }
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};

export default Home;
