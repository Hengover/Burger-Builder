import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-a35c4-default-rtdb.firebaseio.com/'
});

export default instance;