import axios from 'axios';
import { localDbConfig } from '../config';

const dbUrl = localDbConfig.localDB;

const getAllTriggers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/triggers`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch((error) => reject(error));
});

// const getMoviesByTriggers

export default getAllTriggers;
