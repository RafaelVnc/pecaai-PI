import itemCardapio from "../model/itemCardapioModel.js";

export const adicionarItem = async(req, res)=>{
  try {
      const newItem = new itemCardapio(req.body);
      const savedData = await newItem.save();
      res.status(200).json(savedData);
  } catch (error) {
      res.status(500).json({errorMessage:error.message})
  }
};

export const getAllItens = async(req, res)=>{
  try {
      const itensData = await itemCardapio.find();  
      res.status(200).json(itensData);
  } catch (error) {
      res.status(500).json({errorMessage:error.message})
  }
};

export const getItemById = async(req, res) => {
  try {
    const id = req.params.id;
    const itemExist = await itemCardapio.findById(id);
     
    res.status(200).json(itemExist);
  } catch (error) {
    res.status(500).json({errorMessage:error.message})
  }
};

export const updateItem = async(req, res) => {
  try {
    const id = req.params.id;
    
    const updatedData = await itemCardapio.findByIdAndUpdate(id, req.body, {
        new:true
    })
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({errorMessage:error.message})
  }
};

export const deleteItem = async(req, res) => {
  try {
    const id = req.params.id;
    
    await itemCardapio.findByIdAndDelete(id);
    
    res.status(200).json({ message: "Item deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({errorMessage:error.message})
  }
};
