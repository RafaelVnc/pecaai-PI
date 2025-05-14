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
  }
});

export default mongoose.model("Pedido", pedidoSchema);