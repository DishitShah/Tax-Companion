import axios from './api';

class AuthService {
  async register(userData) {
    try {
      const response = await axios.post('/auth/register', userData);
      this.setToken(response.data.token);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async login(credentials) {
    try {
      const response = await axios.post('/auth/login', credentials);
      this.setToken(response.data.token);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async resetPassword(email) {
    try {
      await axios.post('/auth/reset-password', { email });
    } catch (error) {
      this.handleError(error);
    }
  }

  logout() {
    localStorage.removeItem('user_token');
    localStorage.removeItem('user_data');
  }

  setToken(token) {
    localStorage.setItem('user_token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  getToken() {
    return localStorage.getItem('user_token');
  }

  isAuthenticated() {
    const token = this.getToken();
    return !!token;
  }

  handleError(error) {
    console.error('Authentication Error:', error.response?.data || error.message);
    throw error;
  }

  async getCurrentUser() {
    try {
      const response = await axios.get('/auth/profile');
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }
}

const instance = new AuthService();
export default instance;