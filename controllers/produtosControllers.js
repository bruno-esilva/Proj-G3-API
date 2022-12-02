const Produto = require("../models/produtos")

module.exports = {
  index: async (req, res, next) => {
    let produtos = await Produto.listarProdutos()
    res.status(200).send(produtos);
  },
  create: (req, res, next) => {
    const produto = new Produto(req.body)
    Produto.salvar(produto)
    res.status(201).send(produto)
  },
  delete: (req, res, next) => {
    Produto.apagarPorId(req.params.id)
    res.status(204).send("")
  },
  update: async (req, res, next) => {
    let produtoDb = await Produto.buscarPorId(req.params.id)
    if (!produtoDb) return res.status(404).send({ mensagem: "Produto não encontrado" })

    const produto = new Produto(req.body)
    produto.id = produtoDb.id
    Produto.salvar(produto)
    res.status(200).send(produto)
  },
  show: async (req, res, next) => {
    let produtoDb = await Produto.buscarPorId(req.params.id)
    if (!produtoDb) return res.status(404).send({ mensagem: "Produto não encontrado" })
    res.status(200).send(produtoDb)
  }
};