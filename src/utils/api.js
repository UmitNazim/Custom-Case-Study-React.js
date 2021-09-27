import Axios from 'axios';

const axios = Axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: process.env.REACT_APP_TIMEOUT,
  responseType: 'json',
});

axios.defaults.headers.common['Accept-Language'] = process.env.REACT_APP_DEFAULT_LOCALE;

export default axios;
