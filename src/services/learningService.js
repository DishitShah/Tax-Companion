import axios from './api';

export const fetchLearningResources = async () => {
  const response = await axios.get('/learning-resources');
  return response.data;
};