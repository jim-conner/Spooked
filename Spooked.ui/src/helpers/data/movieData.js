import axios from 'axios';
import { localDbConfig } from '../config';

const dbUrl = localDbConfig.localDB;

const getAllMovies = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/movies`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch((error) => reject(error));
});

const getSingleMovie = (imdbId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/movies/movie/${imdbId}`)
    .then((resp) => resolve(console.warn(resp.data)))
    .catch((error) => reject(error));
});

export { getAllMovies, getSingleMovie };
