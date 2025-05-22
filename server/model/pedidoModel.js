import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
  itens:[
    {
      _idItem:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'itemCardapio',
        required: true
      },
      nome:{
        type:String,
        required: true
      },
      preco:{
        type:Number,
        required: true
      },
      quantidade:{
        type:Number,
        required: true
      },
      subtotal:{
        type:Number,
        required: true
      }
    }
  ],
  total: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  codigoPedido:{
    type: String,
    unique: true
  },
  idEstabelecimento:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Estabelecimento',
    required: true
  },
  dataHoraCriacao: {
    type: String,
    default: () => {
      const now = new Date();
      const pad = n => n.toString().padStart(2, '0');
      const dia = pad(now.getDate());
      const mes = pad(now.getMonth() + 1);
      const ano = now.getFullYear();
      const hora = pad(now.getHours());
      const minuto = pad(now.getMinutes());
      return `${dia}/${mes}/${ano} - ${hora}:${minuto}`;
    }
  }
});

export default mongoose.model("Pedido", pedidoSchema);