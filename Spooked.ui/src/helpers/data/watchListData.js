import axios from 'axios';
import { localDbConfig } from '../config';

const dbUrl = localDbConfig.localDB;

const getWatchListMovies = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/watchlist`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch((error) => reject(error));
});

const AddMovieToWatchList = (watchListmovie) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/watchlist`, watchListmovie)
    .then(() => getWatchListMovies(resolve))
    .catch((error) => reject(error));
});

export { AddMovieToWatchList, getWatchListMovies };
