import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Container, Form } from 'reactstrap';
import { getWatchListMovies } from '../../helpers/data/watchListData';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
// import SubGenreSelect from '../components/SubGenreSelect';

function WatchList() {
  const [watchList, setWatchlist] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getWatchListMovies().then((resp) => {
      const movies = resp.map((movie) => movie.movie);
      setWatchlist(movies);
    });
  }, []);

  const filteredMoviesByTitle = search.length === 0
    ? watchList
    : watchList.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container>
      <div className='homeHeader'>
        <Form inline>
          <SearchBar
            search={search}
            setSearch={setSearch}
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

// WatchList.propTypes = {

// };

export default WatchList;
