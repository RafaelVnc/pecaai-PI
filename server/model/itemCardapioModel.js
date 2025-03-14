import mongoose from "mongoose";

const itemCardapioSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true
  },
  descricao:{
    type:String,
    required: true
  },
  preco:{
    type:Number,
    required: true
  },
  fotoURL:{
    type:String,
    required: true
  },
  ativo:{
    type:Boolean,
    required: true
  },
  categoria:{
    type:String,
    required: true
  },
  quantidadeVendida:{
    type: Number,
    required: true
  },
  idUsuario:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    //required: true
  }
});

export default mongoose.model("itemCardapio", itemCardapioSchema);