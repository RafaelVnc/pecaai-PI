import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  email:{
    type:String,
    required: true
  },
  CPF:{
    type:String,
    required: true
  },
  senha:{
    type:String,
    required: true
  },
  telefone:{
    type:String,
    required: true
  },
  endereco:{
    type:String,
    required: true
  },
  nomeEstabelecimento:{
    type:String
  },
  tipo:{
    type:String
  },
  aceite:{
    type:Object
  }
});

export default mongoose.model("Usuario", usuarioSchema);