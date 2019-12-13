import axios from 'axios';
import { API_URL, URL_PROXY } from '../config';

const get = async (path, params) => {
  try {
    return await axios.get(`${URL_PROXY}${API_URL}${path}`, { params });
  } catch (error) {
    console.log('get request error: ', error);
  }
  return false;
};

export default { get };
