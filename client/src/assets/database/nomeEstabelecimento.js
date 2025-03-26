import axios from "axios";

export const getNomeEstabelecimento = async () => {
  try {
    const token = localStorage.getItem("Authorization");

    const response = await axios.get("http://localhost:8000/usuario/", {
      headers: {
        Authorization: token,
      },
    });
    
    return response.data.usuario.nomeEstabelecimento;
  } catch (error) {
    console.error("Erro ao buscar nome estabelecimento:", error.response?.data || error.message);
    return ""; // Retorna string vazia em caso de erro
  }
};

export const getUsuario = async () => {
  try {
    const token = localStorage.getItem("Authorization");

    const response = await axios.get("http://localhost:8000/usuario/", {
      headers: {
        Authorization: token,
      },
    });
    
    return response.data.usuario;
  } catch (error) {
    console.error("Erro ao buscar nome estabelecimento:", error.response?.data || error.message);
    return ""; // Retorna string vazia em caso de erro
  }
};
