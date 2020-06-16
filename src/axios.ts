import axios from 'axios';

//FIXME: Supprimer si finalement pas utilisé.

const instance = axios.create({
    baseURL: 'https://fir-project-65e65.firebaseio.com/'
});

export default instance;