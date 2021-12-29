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

const getMoviesBySubGenre = (subGenreId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/movies/subGenre/${subGenreId}`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch((error) => reject(error));
});

const getMoviesBySingleTrigger = (triggerId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/movies/trigger/${triggerId}`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch((error) => reject(error));
});

const getMoviesByTriggerAndSubGenre = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/movies/filteredmovies`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch((error) => reject(error));
});

// OmdbAPI Movie
const getOmdbByImdbId = (imdbId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/omdbmovies/${imdbId}`)
    .then((resp) => resolve(resp.data))
    .catch((error) => reject(error));
});

// Combine localdb obj & OmdbAPI json obj
const returnLocalOmdb = (id, imdbId) => new Promise((resolve, reject) => {
  const getLocalArray = getSingleMovie(id);
  const getOmdbyArray = getOmdbByImdbId(imdbId);
  Promise.all([getLocalArray, getOmdbyArray])
    .then((resp) => resolve(({ ...resp[0], ...resp[1] })))
    .catch((error) => reject(error));
});

// toggle T/F movied watched status
const updateWatchedStatus = (id) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/movies/movieId/watched/${id}`)
    .then(() => getSingleMovie(id)).then(resolve)
    .catch((error) => reject(error));
  debugger;
});

export {
  getAllMovies, getSingleMovie, getOmdbByImdbId, returnLocalOmdb, getMoviesBySubGenre, getMoviesBySingleTrigger, getMoviesByTriggerAndSubGenre, updateWatchedStatus
};
