import express from "express";
import { adicionarItem, deleteItem, getAllItens, updateItem } from "../controller/cardapioController.js";
import upload from "../config/multerConfig.js";

const route = express.Router();
route.post("/cardapio/item", upload.single("fotoURL") , adicionarItem);
route.get("/cardapio", getAllItens);
route.put("/cardapio/item/:id", upload.single("fotoURL"), updateItem);
route.delete("/cardapio/item/:id", deleteItem);

export default route;
