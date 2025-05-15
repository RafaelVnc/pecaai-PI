import express from "express";
import { criarPedido, getPedidosByUserId, updatePedido } from "../controller/pedidoController.js";
import authMiddleware from "../config/authMiddleware.js"

const routePedido = express.Router();
routePedido.post("/pedido", criarPedido);
routePedido.get("/pedidos", authMiddleware, getPedidosByUserId);
routePedido.put("/pedido/:id", updatePedido);
//routeCardapio.delete("/pedido/:id", deleteItem);

export default routePedido;
