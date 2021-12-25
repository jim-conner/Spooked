import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form } from 'reactstrap';
import { getWatchListMovies } from '../../helpers/data/watchListData';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
// import SubGenreSelect from '../components/SubGenreSelect';

function WatchList({ user }) {
  const [watchList, setWatchlist] = useState([]);
  // const [watchListMovie, setWatchListMovie] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    getWatchListMovies().then((resp) => {
      const movies = resp.map((movie) => movie);
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
                user={user}
                key={movieObj.id}
                movieObj={movieObj}
                setWatchlist={setWatchlist}
                // watchListMovie={watchListMovie}
                // setWatchListMovie={setWatchListMovie}
              />
            ))
          }
      </div>
    </Container>
  );
}

WatchList.propTypes = {
  user: PropTypes.any
};

export default WatchList;
