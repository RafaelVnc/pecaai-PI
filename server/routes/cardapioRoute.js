import express from "express";
import { adicionarItem, deleteItem, getAllItens, updateItem } from "../controller/cardapioController.js";

const route = express.Router();
route.post("/cardapio/item", adicionarItem);
route.get("/cardapio", getAllItens);
route.put("/cardapio/item/:id", updateItem);
route.delete("/cardapio/item/:id", deleteItem);

export default route;
