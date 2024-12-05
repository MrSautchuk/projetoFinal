import axios from 'axios';

const BASE_URL = 'https://ecom-back-strapi.onrender.com/api/';

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMzMDE5MzYzLCJleHAiOjE3MzU2MTEzNjN9.WMAc_OAbJh0n4ulZfOC-TZkWR-Zmq77GiuofOjhwBbw`
    }
});

export const fetchData = async function(endpoint) {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar dados de ${endpoint}:`, error);
        throw error;
    }
};
