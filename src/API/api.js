//Importando a biblioteca axios
import axios from 'axios';

//Definindo uma constante para armazenar o link da api
const BASE_URL = 'https://ecom-back-strapi.onrender.com/api/';

//Criando uma instancia axios que vai armazenar as configurações da api
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMzMDE5MzYzLCJleHAiOjE3MzU2MTEzNjN9.WMAc_OAbJh0n4ulZfOC-TZkWR-Zmq77GiuofOjhwBbw`
    }
});

//Criando e exportando uma função assincrona que vai receber o endpoint como paramentro
export const fetchData = async function(endpoint) {
    //O bloco try vai tentar salvar o conteudo da resposta do servidor na constante response
    //caso não consiga o bloco catch mais lançar o erro e exibir a mensagem de erro no console
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar dados de ${endpoint}:`, error);
        throw error;
    }
};
