const PedidoProduto = require("../models/pedidosProdutos")

module.exports={
index: async (req, res, next)=> {
    let pedidosProdutos = await PedidoProduto.listaPedidosProdutos()
    res.status(200).send(pedidosProdutos);
  }};