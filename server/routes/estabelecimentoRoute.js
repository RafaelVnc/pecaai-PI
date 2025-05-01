import express from "express";
import { cadastrarEstabelecimento, logarEstabelecimento, atualizarEstabelecimento, getEstabelecimentoById } from "../controller/estabelecimentoController.js";
import authMiddleware from "../config/authMiddleware.js"


const routeEstabelecimento = express.Router();
routeEstabelecimento.get("/", authMiddleware , getEstabelecimentoById);
routeEstabelecimento.post("/cadastroEstabelecimento", cadastrarEstabelecimento);
routeEstabelecimento.post("/login", logarEstabelecimento);
routeEstabelecimento.put("/", authMiddleware , atualizarEstabelecimento);

export default routeEstabelecimento;
