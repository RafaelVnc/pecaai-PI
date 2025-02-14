import express from "express";
import { adicionarItem } from "../controller/cardapioController.js";

const route = express.Router();
route.post("/adicionarItem",adicionarItem)

export default route;
