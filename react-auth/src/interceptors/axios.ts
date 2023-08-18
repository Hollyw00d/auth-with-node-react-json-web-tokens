import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 || error.response.status === 400) {
      const response = await axios.post('refresh', {});

      if (response.status === 200) {
        return axios(error.config);
      }
    }

    return error;
  }
);
