const Pedido = require("../models/pedidos")

module.exports={
index: async (req, res, next)=> {
    let pedidos = await Pedido.listaPedidos()
    res.status(200).send(pedidos);
  }};
  