import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fir-project-65e65.firebaseio.com/'
});

export default instance;