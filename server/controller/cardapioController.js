import fs from "fs";
import path from "path";
import itemCardapio from "../model/itemCardapioModel.js";

export const adicionarItem = async (req, res) => {
  try {
    const { name, descricao, preco, categoria } = req.body;
    const ativo = true;
    const quantidadeVendida = 0;
    const fotoURL = `http://localhost:8000/uploads/${req.file.filename}`;

    const newItem = new itemCardapio({
      name,
      descricao,
      preco,
      fotoURL,
      ativo,
      categoria,
      quantidadeVendida
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
    
    const itemExist = await itemCardapio.findById(id);
    if (!itemExist) {
      return res.status(404).json({ errorMessage: "Item não encontrado" });
    }

    if (req.file) {
      const oldFilePath = path.resolve("uploads", path.basename(itemExist.fotoURL));
      fs.unlink(oldFilePath, (err) => {
        if (err && err.code !== "ENOENT") {
          console.error("Erro ao deletar a imagem antiga:", err);
        }
      });
    }

    const fotoURL = req.file ? `http://localhost:8000/uploads/${req.file.filename}` : itemExist.fotoURL;

    const updateBody = {
      name: req.body.name,
      descricao: req.body.descricao,
      preco: req.body.preco,
      categoria: req.body.categoria,
      fotoURL: fotoURL,
      ativo: req.body.ativo
    };

    const updatedData = await itemCardapio.findByIdAndUpdate(id, updateBody, {
      new: true
    });
    
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
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
