import fs from "fs";
import path from "path";
import itemCardapio from "../model/itemCardapioModel.js";

export const adicionarItem = async (req, res) => {
  try {
    const { name, descricao, preco, ativo, categoria } = req.body;
    const fotoURL = `http://localhost:8000/uploads/${req.file.filename}`;

    const newItem = new itemCardapio({
      name,
      descricao,
      preco,
      fotoURL,
      ativo,
      categoria
    });

    const savedData = await newItem.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
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
    
    const itemExist = await itemCardapio.findById(id);
    if (!itemExist) {
      return res.status(404).json({ errorMessage: "Item não encontrado" });
    }

    const filePath = path.resolve("uploads", path.basename(itemExist.fotoURL));
    fs.unlink(filePath, (err) => {
      if (err && err.code !== "ENOENT") {
        console.error("Erro ao deletar a imagem:", err);
      }
    });

    await itemCardapio.findByIdAndDelete(id);
    
    res.status(200).json({ message: "Item deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({errorMessage:error.message})
  }
};
