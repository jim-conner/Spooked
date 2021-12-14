import axios from 'axios';
import { localDbConfig } from '../config';

const dbUrl = localDbConfig.localDB;

const getAllMovies = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/movies`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch((error) => reject(error));
});

const getSingleMovie = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/movies/movieId/${id}`)
    .then((resp) => resolve(resp.data))
    .catch((error) => reject(error));
});

// OmdbAPI Movies
const getOmdbByImdbId = (imdbId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/omdbmovies/${imdbId}`)
    .then((resp) => resolve(resp.data))
    .catch((error) => reject(error));
});

const returnLocalOmdb = (id, imdbId) => new Promise((resolve, reject) => {
  const getLocalArray = getSingleMovie(id);
  const getOmdbyArray = getOmdbByImdbId(imdbId);
  Promise.all([getLocalArray, getOmdbyArray])
    .then((resp) => resolve(({ ...resp[0], ...resp[1] })))
    .catch((error) => reject(error));
});

export {
  getAllMovies, getSingleMovie, getOmdbByImdbId, returnLocalOmdb
};
