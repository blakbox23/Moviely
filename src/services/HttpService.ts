import axios, { AxiosInstance } from 'axios';
import config from '../config'

class HttpService {
    client
    constructor(options = {}) {
      this.client = axios.create(options);
    }
}
const options = {
    baseURL: config.API_BASE_URL
  };

  const httpService = new HttpService(options);

  export default httpService;