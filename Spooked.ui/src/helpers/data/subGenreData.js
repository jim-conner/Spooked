import axios from 'axios';
import { localDbConfig } from '../config';

const dbUrl = localDbConfig.localDB;

const getAllSubGenres = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/subGenres`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch((error) => reject(error));
});

export default getAllSubGenres;
