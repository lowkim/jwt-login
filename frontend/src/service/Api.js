import axios from 'axios';

export default () => axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
