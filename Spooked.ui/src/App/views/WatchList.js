import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form } from 'reactstrap';
import { getWatchListMovies } from '../../helpers/data/watchListData';
import SearchBar from '../components/SearchBar';
import WatchListCard from '../components/WatchListCard';
// import SubGenreSelect from '../components/SubGenreSelect';

function WatchList({ user }) {
  const [watchList, setWatchlist] = useState([]);
  const [watchListMovieObj, setWatchListMovieObj] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    getWatchListMovies().then((resp) => {
      // setWatchListMovieArray(resp);
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
          filteredMoviesByTitle.length === 0
            ? <div className='homeHeader' style={{ color: 'orangered', justifyContent: 'center' }}>
              {<div></div>}
              {<div><h5> <i className="fas fa-ghost fa-2x"></i> Oops, no movies on your watchlist... Get back to browsing</h5></div>}
            </div>
            : filteredMoviesByTitle?.map((movieObj) => (
            <WatchListCard
              user={user}
              key={movieObj.id}
              movieObj={movieObj}
              watchListMovieObj={watchListMovieObj}
              setWatchListMovieObj={setWatchListMovieObj}
              setWatchlist={setWatchlist}
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
