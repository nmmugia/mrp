import axios from 'axios';
import { url } from '../constants';

const instance = axios.create({
  baseURL: `${url}/api/v1`,
});

export default instance;
