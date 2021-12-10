import axios from 'axios';
import firebaseConfig from '../config';

const dbUrl = firebaseConfig.databaseURL;

const getAllMovies = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getAllMovies;
