const PedidoProduto = require("../models/pedidosProdutos")

module.exports={
index: async (req, res, next)=> {
    let pedidosProdutos = await PedidoProduto.listaPedidosProdutos()
    res.status(200).send(pedidosProdutos);
  },
  create: (req, res, next) => {
    const pedidoProduto = new PedidoProduto(req.body)
    PedidoProduto.salvar(pedidoProduto)
    res.status(201).send(pedidoProduto)
  },
  delete: (req, res, next) => {
    PedidoProduto.apagarPorId(req.params.id)
    res.status(204).send("")
  },
  update: async (req, res, next) => {
    let pedidoProdutoDb = await PedidoProduto.buscarPorId(req.params.id)
    if (!pedidoProdutoDb) return res.status(404).send({ mensagem: "Não encontrado" })

    const pedidoProduto = new PedidoProduto(req.body)
    pedidoProduto.id = pedidoProdutoDb.id
    PedidoProduto.salvar(pedidoProduto)
    res.status(200).send(pedidoProduto)
  },
  show: async (req, res, next) => {
    let pedidoProdutoDb = await PedidoProduto.buscarPorId(req.params.id)
    if (!pedidoProdutoDb) return res.status(404).send({ mensagem: "Não encontrado" })
    res.status(200).send(pedidoProdutoDb)
  }

};