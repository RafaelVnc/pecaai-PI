import itemCardapio from "../model/itemCardapioModel.js";

export const adicionarItem = async(req, res)=>{
  try {
      const newItem = new itemCardapio(req.body);
      const savedData = await newItem.save();
      res.status(200).json(savedData);
  } catch (error) {
      res.status(500).json({errorMessage:error.message})
  }
}