import axios from "axios";

// Função para obter o token do localStorage 
const getAuthToken = () => {
    return localStorage.getItem("Authorization"); 
};

// Função assíncrona para buscar o cardápio com autenticação JWT
export const getCardapioArray = async () => {
    try {
        const token = getAuthToken();
        if (!token) {
            throw new Error("Token expirado, redirecionar página login");
        }

        const response = await axios.get("http://localhost:8000/cardapio", {
            headers: {
                Authorization: token, // Adiciona o token JWT no cabeçalho
            },
        });

        return response.data; // Retorna os itens do cardápio
    } catch (error) {
        console.error("Erro ao buscar cardápio:", error.response?.data || error.message);
        return [];
    }
};