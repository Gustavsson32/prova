import axios from 'axios';
const api = axios.create({
//Informe a porta do serviço de autenticação
baseURL: 'https://localhost:3333',
});
export default api;