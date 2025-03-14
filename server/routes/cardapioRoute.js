import express from "express";
import { adicionarItem, deleteItem, getAllItens, updateItem } from "../controller/cardapioController.js";
import upload from "../config/multerConfig.js";

const routeCardapio = express.Router();
routeCardapio.post("/item", upload.single("fotoURL") , adicionarItem);
routeCardapio.get("/", getAllItens);
routeCardapio.put("/item/:id", upload.single("fotoURL"), updateItem);
routeCardapio.delete("/item/:id", deleteItem);

export default routeCardapio;
