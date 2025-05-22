import express from "express";
import { adicionarItem, deleteItem, getItensByUserId, getItensByIdEstabelecimento,updateItem } from "../controller/cardapioController.js";
import upload from "../config/multerConfig.js";
import authMiddleware from "../config/authMiddleware.js"

const routeCardapio = express.Router();
routeCardapio.post("/item", authMiddleware, upload.single("fotoURL") , adicionarItem);
routeCardapio.get("/", authMiddleware, getItensByUserId);
routeCardapio.get("/estabelecimento/", authMiddleware, getItensByIdEstabelecimento);
routeCardapio.put("/item/:id", upload.single("fotoURL"), updateItem);
routeCardapio.delete("/item/:id", deleteItem);

export default routeCardapio;
