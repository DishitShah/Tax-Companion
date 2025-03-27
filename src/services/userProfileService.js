import axios from './api';

class UserProfileService {
  async getUserProfile() {
    try {
      const response = await axios.get('/profile');
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateUserProfile(data) {
    try {
      const response = await axios.put('/profile', data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async changePassword(data) {
    try {
      await axios.post('/profile/change-password', data);
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    console.error('User Profile Service Error:', error.response?.data || error.message);
    throw error;
  }
}

export default new UserProfileService();