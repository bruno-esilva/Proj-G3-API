module.exports = class PedidoProduto {
  constructor(pedidoProduto){
    this.id = pedidoProduto?.id
    this.pedido_id = pedidoProduto?.pedido_id
    this.produto_id = pedidoProduto?.produto_id
    this.valor = pedidoProduto?.valor
    this.quantidade = pedidoProduto?.quantidade
  }
  
    static async listaPedidosProdutos(){
      let pedidosProdutos = []
      const fs = require('fs');
      try {
        const jsonPedidosProdutos = await fs.readFileSync('dataBase_G3/pedidosProdutos.json', 'utf8');
        pedidosProdutos = JSON.parse(jsonPedidosProdutos)
      } catch (err) {
        console.log(err);
      }
  
      return pedidosProdutos
    }
  }