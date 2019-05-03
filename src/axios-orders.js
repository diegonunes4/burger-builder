import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-98f37.firebaseio.com/'
});

export default instance;