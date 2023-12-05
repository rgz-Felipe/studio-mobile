// ApiService.js 
import axios from 'axios';

const API_URL = 'https://xllighjqy0.execute-api.us-east-1.amazonaws.com/dev/cliente'; 

class ApiService {
  static get(endpoint) {
    return axios.get(`${API_URL}/${endpoint}`);
  }

  static post(endpoint, data) {
    return axios.post(`${API_URL}/${endpoint}`, data);
  }

  //(PUT, DELETE, etc.)
}

export default ApiService;
