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
    static async buscarPorId(id) {
      const listaPedidosProdutos = await this.listaPedidosProdutos()
      for (let i = 0; i < listaPedidosProdutos.length; i++) {
          const pedidosProdutosDb = listaPedidosProdutos[i]
          if (pedidosProdutosDb.id.toString() === id.toString()) {
              return pedidosProdutosDb
          }
      }

      return null
  }
  static async salvar(pedidosProdutos) {
    const listaPedidosProdutos = await this.listaPedidosProdutos()
    let exist = false
    for (let i = 0; i < listaPedidosProdutos.length; i++) {
        const pedidosProdutosDb = listaPedidosProdutos[i]
        if (pedidosProdutosDb.id.toString() === pedidosProdutos.id.toString()) {
            pedidosProdutosDb.pedido_id = pedidosProdutos.pedido_id
            pedidosProdutosDb.produto_id = pedidosProdutos.produto_id
            pedidosProdutosDb.valor = pedidosProdutos.valor
            pedidosProdutosDb.quantidade = pedidosProdutos.quantidade
            exist = true
            break
          }
        }

    if (!exist) {
        const objectLiteral = { ...pedidosProdutos }
        listaPedidosProdutos.push(objectLiteral)
    }

    PedidoProduto.salvarJsonDisco(listaPedidosProdutos)
}
static async salvarJsonDisco(pedidosProdutos) {
  const fs = require('fs');

  try {
      fs.writeFileSync('dataBase_G3/pedidosProdutos.json', JSON.stringify(pedidosProdutos), { encoding: "utf8" });
  } catch (err) {
      console.error(err);
  }
}
static async apagarPorId(id) {
  const listaPedidosProdutos = await this.listaPedidosProdutos()
  const novoPedidosProdutos = []
  for (let i = 0; i < listaPedidosProdutos.length; i++) {
      const pedidosProdutosDb = listaPedidosProdutos[i]
      if (pedidosProdutosDb.id.toString() !== id.toString()) {
        novoPedidosProdutos.push(pedidosProdutosDb)
      }
  }

  PedidoProduto.salvarJsonDisco(novoPedidosProdutos)
}
  }