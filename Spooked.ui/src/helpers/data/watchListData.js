import axios from 'axios';
import { localDbConfig } from '../config';

const dbUrl = localDbConfig.localDB;

const getWatchListMovies = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/watchlist`)
    .then((resp) => resolve(console.warn(Object.values(resp.data))))
    .catch((error) => reject(error));
});

export default getWatchListMovies;
