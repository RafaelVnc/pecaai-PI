import axios from "axios";

export const getNomeEstabelecimento = async () => {
  try {
    const token = localStorage.getItem("Authorization");

    const response = await axios.get("http://localhost:8000/estabelecimento/", {
      headers: {
        Authorization: token,
      },
    });
    
    return response.data.estabelecimento.nomeEstabelecimento;
  } catch (error) {
    console.error("Erro ao buscar nome estabelecimento:", error.response?.data || error.message);
    return ""; // Retorna string vazia em caso de erro
  }
};

export const getEstabelecimento = async () => {
  try {
    const token = localStorage.getItem("Authorization");

    const response = await axios.get("http://localhost:8000/estabelecimento/", {
      headers: {
        Authorization: token,
      },
    });
    
    return response.data.estabelecimento;
  } catch (error) {
    console.error("Erro ao buscar nome estabelecimento:", error.response?.data || error.message);
    return ""; // Retorna string vazia em caso de erro
  }
};
