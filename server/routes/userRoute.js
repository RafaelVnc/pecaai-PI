import express from "express";
import { cadastrarUsuarioEstabelecimento, cadastrarUsuarioCliente, logarUsuario, atualizarUsuario } from "../controller/usuarioController.js";

const routeUser = express.Router();
routeUser.post("/cadastroEstabelecimento", cadastrarUsuarioEstabelecimento);
routeUser.post("/cadastroCliente", cadastrarUsuarioCliente);
routeUser.post("/login", logarUsuario);
routeUser.put("/:id", atualizarUsuario);

export default routeUser;
