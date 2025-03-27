import axios from './api';
import AuthService from './authService';

class DocumentService {
  constructor() {
    this.token = AuthService.getToken();
  }

  getHeaders() {
    return {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'multipart/form-data'
    };
  }

  async uploadDocument(file, metadata) {
    const formData = new FormData();
    formData.append('file', file);
    Object.keys(metadata).forEach(key => {
      formData.append(key, metadata[key]);
    });

    try {
      const response = await axios.post('/documents/upload', formData, { headers: this.getHeaders() });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async getDocuments(filters = {}) {
    try {
      const response = await axios.get('/documents', { headers: this.getHeaders(), params: filters });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async getDocumentDetails(documentId) {
    try {
      const response = await axios.get(`/documents/${documentId}`, { headers: this.getHeaders() });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteDocument(documentId) {
    try {
      const response = await axios.delete(`/documents/${documentId}`, { headers: this.getHeaders() });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async extractDocumentData(documentId) {
    try {
      const response = await axios.post(`/documents/${documentId}/extract`, {}, { headers: this.getHeaders() });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    console.error('Document Service Error:', error.response?.data || error.message);
    throw error;
  }
}

const instance = new DocumentService();
export default instance;