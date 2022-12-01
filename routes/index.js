const express = require('express');
const router = express.Router();
const ClientesControllers = require("../controllers/clientesControllers");
const ProdutosControllers = require("../controllers/produtosControllers");





/*Clientes*/
router.get('/clientes', ClientesControllers.index);
router.post('/clientes', ClientesControllers.create);
router.get('/clientes/:id', ClientesControllers.show);
router.delete('/clientes/:id', ClientesControllers.delete);
router.put('/clientes/:id', ClientesControllers.update);

/*Produtos*/
router.get('/produtos', ProdutosControllers.index);
router.post('/produtos', ProdutosControllers.create);
router.get('/produtos/:id', ProdutosControllers.show);
router.delete('/produtos/:id', ProdutosControllers.delete);
router.put('/produtos/:id', ProdutosControllers.update);


module.exports = router;
