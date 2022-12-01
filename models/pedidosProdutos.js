module.exports = class PedidoProduto {
    constructor(){
        this.id = 0
        this.pedido_id = 0
        this.produto_id = 0
        this.valor = 0
        this.quantidade = 0
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