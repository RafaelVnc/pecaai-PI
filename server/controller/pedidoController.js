import Pedido from "../model/pedidoModel.js"
import { Contador } from "../model/contadorCodPedidoModel.js";

async function getProximoCodigoPedido() {
  const resultado = await Contador.findOneAndUpdate(
    { nome: 'pedido' },
    { $inc: { valor: 1 } },
    { new: true, upsert: true }
  );

  const numero = resultado.valor.toString().padStart(5, '0'); // Ex: 00001
  return `PED-${numero}`;
}

export const criarPedido = async (req, res) => {
  try {
    const { itens, total, status, idEstabelecimento } = req.body;
    const codigo = await getProximoCodigoPedido();

    if (!itens || !Array.isArray(itens) || itens.length === 0) {
      return res.status(400).json({ error: 'Itens são obrigatórios.' });
    }

    const pedido = new Pedido({ itens, total, status, codigoPedido:codigo , idEstabelecimento});
    await pedido.save();
    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pedido.' });
  }
};

export const getPedidosByUserId = async (req, res) => {
  try {
    const idEstabelecimento = req.user.idEstabelecimento; // Pegando o idEstabelecimento do token (req.user vem do middleware JWT)
    const pedidos = await Pedido.find({ idEstabelecimento });

    if (pedidos.length === 0) {
      return res.status(404).json({ errorMessage: "Nenhum pedido encontrado para este usuário" });
    }

    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const updatePedido = async(req, res) => {
  try {
    const pedidoId = req.params.id;
    const dadosAtualizados = req.body;

    const pedido = await Pedido.findByIdAndUpdate(pedidoId, dadosAtualizados, {
      new: true,
      runValidators: true
    });

    if (!pedido) {
      return res.status(404).json({ mensagem: 'Pedido não encontrado' });
    }

    res.json(pedido);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao atualizar pedido', erro: erro.message });
  }
};

/*export const deletarPedido = async (req, res) => {
  try {
    const pedidoRemovido = await Pedido.findByIdAndDelete(req.body._id);
    if (!pedidoRemovido) {
      return res.status(404).json({ error: 'Pedido não encontrado para exclusão.' });
    }
    res.status(200).json({ mensagem: 'Pedido deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar pedido.' });
  }
};*/