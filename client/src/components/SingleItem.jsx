import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToggleOn,
  faToggleOff,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ConfirmDelete from "./ConfirmDelete";

const SingleItem = ({
  _id,
  name,
  descricao,
  preco,
  fotoURL,
  ativo: initialAtivo,
}) => {
  const [ativo, setAtivo] = useState(initialAtivo);

  const toggleAtivo = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/cardapio/item/${_id}`,
        {
          ativo: !ativo,
        }
      );

      if (response.status === 200) {
        setAtivo(!ativo);
        window.location.reload();
      }
    } catch (error) {
      console.error("Erro ao atualizar o status do item:", error);
    }
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="single-item">
      <div className="single-item__img">
        <img src={`${fotoURL}`} alt="Foto do item" />
      </div>
      <div className="single-item__text">
        <h2>{name}</h2>
        <p>{descricao}</p>
        <h3>{`R$ ${preco.toFixed(2)}`}</h3>
      </div>
      <div className="single-item__ativo-btn">
        <button onClick={toggleAtivo}>
          {ativo ? (
            <FontAwesomeIcon icon={faToggleOn} />
          ) : (
            <FontAwesomeIcon icon={faToggleOff} />
          )}
        </button>
      </div>
      <div className="single-item__edit">
        <Link to={`/itemEdit/${_id}`}>
          {" "}
          <FontAwesomeIcon icon={faPenToSquare} /> Editar item{" "}
        </Link>
      </div>
      <div className="single-item__delete">
        <button onClick={() => setShowDeleteModal(true)}>
          {" "}
          <FontAwesomeIcon icon={faTrashCan} /> Excluir item{" "}
        </button>
      </div>

      {showDeleteModal && (
        <ConfirmDelete
          _id={_id}
          name={name}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
};

export default SingleItem;
