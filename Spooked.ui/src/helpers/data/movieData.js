import axios from 'axios';
import { localDbConfig } from '../config';

const dbUrl = localDbConfig.localDB;

const getAllMovies = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/movies`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getAllMovies;
