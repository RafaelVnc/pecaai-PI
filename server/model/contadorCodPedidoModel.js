import mongoose from "mongoose";

const contadorSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  valor: { type: Number, default: 0 },
});

export const Contador = mongoose.model('Contador', contadorSchema);
