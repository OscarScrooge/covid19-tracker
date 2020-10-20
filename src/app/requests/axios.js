import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://covid19-api.org/api',
});
export default instance;
