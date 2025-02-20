import axios from "axios";

const responseCardapio = await axios.get(`http://localhost:8000/api/cardapio`);

export const cardapioArray = responseCardapio.data;
