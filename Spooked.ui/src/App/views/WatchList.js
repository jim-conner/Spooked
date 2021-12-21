import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Container, Form } from 'reactstrap';
import getWatchListMovies from '../../helpers/data/watchListData';
import MovieCard from '../components/MovieCard';

function WatchList() {
  const [watchList, setWatchlist] = useState([]);

  useEffect(() => {
    getWatchListMovies().then(setWatchlist);
  }, []);

  return (
    <Container>
      <div className='homeHeader'>
        <Form inline>
          {/* <SearchBar
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
          <Button
            onClick={((handleResetAll))}
            style={{ backgroundColor: 'orangered' }}
          >
            Reset All
          </Button> */}
        </Form>
      </div>
      <div className='homeContainer'>
          {
            watchList?.map((movieObj) => (
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

WatchList.propTypes = {

};

export default WatchList;
