import axios from "axios";

// Função para obter o token do localStorage 
const getAuthToken = () => {
    return localStorage.getItem("Authorization"); 
};

// Função assíncrona para buscar o cardápio com autenticação JWT
export const getPedidosArray = async () => {
    try {
        const token = getAuthToken();
        if (!token) {
            window.location.replace('/');
        }

        const response = await axios.get("http://localhost:8000/pedidos/pedidos", {
            headers: {
                Authorization: token, // Adiciona o token JWT no cabeçalho
            },
        });

        return response.data; // Retorna os pedidos
    } catch (error) {
        console.error("Erro ao buscar pedidos:", error.response?.data || error.message);
        return [];
    }
};