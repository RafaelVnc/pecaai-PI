import axios from "axios";


const getAuthToken = () => {
    return localStorage.getItem("Authorization"); 
};

export const getEstabelecimentoArray = async () => {
    try {
      const response = await axios.get("http://localhost:8000/estabelecimento/estabelecimentos");
      return response.data;
    } catch (error){
      console.error("Erro ao buscar estabelecimentos:", error.response?.data || error.message);
      return [];
    }
};

export const getEstabelecimentoById = async () => {
    try {
        const token = getAuthToken();
        if (!token) {
            window.location.replace('/login');
        }
        
        const response = await axios.get(`http://localhost:8000/estabelecimento/`, {
            headers: {
                Authorization: token, // Adiciona o token JWT no cabeçalho
            },
        });

        return response.data;
    } catch (error) {
        console.error("Erro ao buscar cardápio:", error.response?.data || error.message);
        return [];
    }
};