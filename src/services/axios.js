import axios from 'axios';

const url = 'http://192.168.100.26:8069/api/v1';

const instance = axios.create({
  baseURL: url,
});

export default instance;
