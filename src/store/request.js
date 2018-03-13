import axios from 'axios'

const request = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 20000,
  crossDomain: true,
});

const api_key = 'c5e4a1733c2995102fafe209c014e4c0';

const setApiKey = (data = {}) => {
  if (!data.params) {
    data.params = {}
  }
  data.params['api_key'] = api_key
  return data
}

export default {

  del(path, config) {
    return request.delete(path, config);
  },

  get(path, data = {}, config) {
    return request.get(path, setApiKey(data), config);
  },

  patch(path, data = {}, config) {
    return request.patch(path, setApiKey(data), config);
  },

  post(path, data = {}, config) {
    return request.post(path, setApiKey(data), config);
  },

  put(path, data = {}, config) {
    return request.put(path, setApiKey(data), config);
  },

};
