import httpService from './HttpService';

class ApiService {
    apiClient
  constructor() {
    this.apiClient = httpService.client;
  }
}

export default ApiService;