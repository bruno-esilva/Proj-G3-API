const Pedido = require("../models/pedidos")

module.exports={
index: async (req, res, next)=> {
    let pedidos = await Pedido.listaPedidos()
    res.status(200).send(pedidos);
  },
  create: (req, res, next) => {
    const pedido = new Pedido(req.body)
    Pedido.salvar(pedido)
    res.status(201).send(pedido)
  },
  delete: (req, res, next) => {
    Pedido.apagarPorId(req.params.id)
    res.status(204).send("")
  },
  update: async (req, res, next) => {
    let pedidoDb = await Pedido.buscarPorId(req.params.id)
    if (!pedidoDb) return res.status(404).send({ mensagem: "Pedido não encontrado" })

    const pedido = new Pedido(req.body)
    pedido.id = pedidoDb.id
    Pedido.salvar(pedido)
    res.status(200).send(pedido)
  },
  show: async (req, res, next) => {
    let pedidoDb = await Pedido.buscarPorId(req.params.id)
    if (!pedidoDb) return res.status(404).send({ mensagem: "Pedido não encontrado" })
    res.status(200).send(pedidoDb)
  }

};
  