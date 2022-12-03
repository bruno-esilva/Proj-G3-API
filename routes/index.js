const express = require('express');
const router = express.Router();
const ClientesControllers = require("../controllers/clientesControllers");
const ProdutosControllers = require("../controllers/produtosControllers");
const PedidosControllers = require("../controllers/pedidosControllers");
const PedidosProdutosControllers = require("../controllers/pedidosProdutosControllers");

/* GET home page. */
index: (req, res, next) => {
  res.status(200).send( { mensagem: "Bem vindo a minha API alunos" } )
};
 

/* Clientes */
router.get('/clientes', ClientesControllers.index)
router.post('/clientes', ClientesControllers.create)
router.get('/clientes/:id', ClientesControllers.show)
router.delete('/clientes/:id', ClientesControllers.delete)
router.put('/clientes/:id', ClientesControllers.update)

/* Produtos */
router.get('/produtos', ProdutosControllers.index)
router.post('/produtos', ProdutosControllers.create)
router.get('/produtos/:id', ProdutosControllers.show)
router.delete('/produtos/:id', ProdutosControllers.delete)
router.put('/produtos/:id', ProdutosControllers.update)

/* Pedidos */
router.get('/pedidos', PedidosControllers.index)
router.post('/pedidos', PedidosControllers.create)
router.get('/pedidos/:id', PedidosControllers.show)
router.delete('/pedidos/:id', PedidosControllers.delete)
router.put('/pedidos/:id', PedidosControllers.update)
 
/* Pedidos Produtos */
router.get('/pedidosProdutos', PedidosProdutosControllers.index)
router.post('/pedidosProdutos', PedidosProdutosControllers.create)
router.get('/pedidosProdutos/:id', PedidosProdutosControllers.show)
router.delete('/pedidosProdutos/:id', PedidosProdutosControllers.delete)
router.put('/pedidosProdutos/:id', PedidosProdutosControllers.update)

module.exports = router;
