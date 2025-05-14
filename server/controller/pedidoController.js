import Pedido from "../model/pedidoModel.js"

export const criarPedido = async (req, res) => {
  try {
    const { itens, total, idEstabelecimento } = req.body;

    if (!itens || !Array.isArray(itens) || itens.length === 0) {
      return res.status(400).json({ error: 'Itens são obrigatórios.' });
    }

    const pedido = new Pedido({ itens, total, idEstabelecimento});
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

    if (itens.length === 0) {
      return res.status(404).json({ errorMessage: "Nenhum pedido encontrado para este usuário" });
    }

    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
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