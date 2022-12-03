module.exports = class Pedido {
  constructor(pedido){
    this.id = pedido?.id
    this.cliente_id = pedido?.cliente_id
    this.qtd_item = pedido?.qts_item
    this.valor_total = pedido?.valor_total
    this.data = pedido?.data
  }
  
    static async listarPedidos(){
      let pedidos = []
      const fs = require('fs');
      try {
        const jsonPedidos = await fs.readFileSync('dataBase_G3/pedidos.json', 'utf8');
        pedidos = JSON.parse(jsonPedidos)
      } catch (err) {
        console.log(err);
      }
  
      return pedidos
    }
    static async buscarPorId(id) {
      const listarPedidos = await this.listarPedidos()
      for (let i = 0; i < listarPedidos.length; i++) {
          const pedidoDb = listarPedidos[i]
          if (pedidoDb.id.toString() === id.toString()) {
              return pedidoDb
          }
      }

      return null
  }
  static async salvar(pedido) {
    const listarPedidos = await this.listarPedidos()
    let exist = false
    for (let i = 0; i < listarPedidos.length; i++) {
        const pedidoDb = listarPedidos[i]
        if (pedidoDb.id.toString() === pedido.id.toString()) {
            pedidoDb.cliente_id = pedido.cliente_id
            pedidoDb.qtd_item= pedido.qtd_item
            pedidoDb.valor_total = pedido.valor_total
            pedidoDb.data = pedido.data

            exist = true
            break
          }
        }

    if (!exist) {
        const objectLiteral = { ...pedido }
        listarPedidos.push(objectLiteral)
    }

    Pedido.salvarJsonDisco(listarPedidos)
}
static async salvarJsonDisco(pedidos) {
  const fs = require('fs');

  try {
      fs.writeFileSync('dataBase_G3/pedidos.json', JSON.stringify(pedidos), { encoding: "utf8" });
  } catch (err) {
      console.error(err);
  }
}

static async apagarPorId(id) {
  const listarPedidos = await this.listarPedidos()
  const novoPedido = []
  for (let i = 0; i < listarPedidos.length; i++) {
      const pedidoDb = listarPedidos[i]
      if (pedidoDb.id.toString() !== id.toString()) {
          novoPedido.push(pedidoDb)
      }
  }

  Pedido.salvarJsonDisco(novoPedido)
}
  }