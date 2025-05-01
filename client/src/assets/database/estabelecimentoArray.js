import axios from "axios";


export const getEstabelecimentoArray = async () => {
    try {
      const response = await axios.get("http://localhost:8000/estabelecimento/estabelecimentos");
      return response.data;
    } catch (error){
      console.error("Erro ao buscar estabelecimentos:", error.response?.data || error.message);
      return [];
    }
};