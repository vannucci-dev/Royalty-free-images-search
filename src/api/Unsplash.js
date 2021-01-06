import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 
            'Client-ID bcAzlvJqAx0uq3Z2uS2GX0b5s6GBCFL2EwXkWYcOd9o'
    }
});