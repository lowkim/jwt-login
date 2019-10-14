import axios from 'axios';

export default () => axios.create({
    baseURL: process.env.API_ENDPOINT,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });