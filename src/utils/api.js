import axios from 'axios';

const token = localStorage.getItem('token'); // Assuming the token is stored in local storage

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

axios.get('http://localhost:5000/api/endpoint', config)
  .then(response => console.log(response.data))
  .catch(error => console.error('Error fetching data:', error));