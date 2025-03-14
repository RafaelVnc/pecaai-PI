import React, { useState, useEffect } from "react";
import axios from "axios";
import SuccessModal from "./SuccessModal";

const ItemForm = ({
  method,
  _id,
  name,
  preco,
  categoria,
  descricao,
  fotoURL,
}) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    preco: "",
    categoria: "Entrada",
    descricao: "",
    fotoURL: null,
  });

  useEffect(() => {
    if (method === "edit") {
      setFormData({
        name: name,
        preco: preco,
        categoria: categoria,
        descricao: descricao,
        fotoURL: fotoURL,
      });
    }
  }, [method, name, preco, categoria, descricao, fotoURL]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();

    for (let key in formData) {
      form.append(key, formData[key]);
    }

    try {
      if (method === "add") {
        const response = await axios.post(
          "http://localhost:8000/cardapio/item",
          form
        );
        if (response.status === 201) {
          setShowSuccess(true);
        }
      } else {
        const response = await axios.put(
          `http://localhost:8000/cardapio/item/${_id}`,
          form
        );

        if (response.status === 200) {
          setShowSuccess(true);
        }
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <div className="item-form">
      <h1>{method === "add" ? "Adicionar Item" : "Editar Item"}</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="name">Nome do Produto*</label>
        <input
          type="text"
          id="name"
          required
          placeholder="Nome do produto"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="preco">Preço*</label>
        <input
          type="number"
          step="0.10"
          id="preco"
          required
          placeholder="00.00"
          name="preco"
          value={formData.preco}
          onChange={handleChange}
        />

        <label htmlFor="categoria">Categoria*</label>
        <select
          id="categoria"
          required
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
        >
          <option value="Entrada">Entrada</option>
          <option value="Prato principal">Prato Principal</option>
          <option value="Bebida">Bebida</option>
          <option value="Sobremesa">Sobremesa</option>
        </select>

        <label htmlFor="descricao">Descrição*</label>
        <textarea
          id="descricao"
          required
          placeholder="Descrição do produto"
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
        />

        <label htmlFor="fotoURL">Foto do Prato*</label>
        <input
          type="file"
          id="fotoURL"
          accept="image/*"
          required={method === "add"}
          name="fotoURL"
          onChange={handleChange}
        />

        <div className="item-form__btn-container">
          <button type="submit" className="item-form__btn">
            {" "}
            Salvar{" "}
          </button>
        </div>
      </form>

      {showSuccess && <SuccessModal />}
    </div>
  );
};

export default ItemForm;
