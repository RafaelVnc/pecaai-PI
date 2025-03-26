import express from "express";
import { cadastrarUsuarioEstabelecimento, cadastrarUsuarioCliente, logarUsuario, atualizarUsuario, getUsuarioById } from "../controller/usuarioController.js";
import authMiddleware from "../config/authMiddleware.js"


const routeUser = express.Router();
routeUser.get("/", authMiddleware , getUsuarioById);
routeUser.post("/cadastroEstabelecimento", cadastrarUsuarioEstabelecimento);
routeUser.post("/cadastroCliente", cadastrarUsuarioCliente);
routeUser.post("/login", logarUsuario);
routeUser.put("/", authMiddleware , atualizarUsuario);

export default routeUser;
