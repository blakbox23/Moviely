import axios from 'axios';
import config from '../config'

class HttpService {
    client: any

    constructor(options = {}) {
      this.client = axios.create(options);
    }
}
const options = {
    baseURL: config.API_BASE_URL
  };

  const httpService = new HttpService(options);

  export default httpService;