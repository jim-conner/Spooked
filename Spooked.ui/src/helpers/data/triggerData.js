import axios from 'axios';
import { localDbConfig } from '../config';

const dbUrl = localDbConfig.localDB;

const getAllTriggers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/triggers`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch((error) => reject(error));
});

// const getMoviesByTriggers

const getTotalTriggersValue = (movieId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/triggers/ometer/${movieId}`)
    .then((resp) => resolve((resp.data)))
    .catch((error) => reject(error));
});

export { getAllTriggers, getTotalTriggersValue };
