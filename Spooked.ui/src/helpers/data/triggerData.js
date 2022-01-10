import axios from 'axios';
import { localDbConfig } from '../config';

const dbUrl = localDbConfig.localDB;

const getAllTriggers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/triggers`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch((error) => reject(error));
});

const getMovieTriggers = (imdbId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/triggers/movieTriggers/${imdbId}`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch((error) => reject(error));
});

const getTotalTriggersValue = (imdbId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/triggers/ometer/${imdbId}`)
    .then((resp) => resolve((resp.data)))
    .catch((error) => reject(error));
});

export { getAllTriggers, getMovieTriggers, getTotalTriggersValue };
