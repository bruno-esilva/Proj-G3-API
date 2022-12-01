module.exports = class Pedido {
    constructor(pedido){
        this.id = pedido?.id
        this.cliente_id = pedido?.cliente_id
        this.valor_total = pedido?.valor_total
        this.data = pedido?.data
    }
  
    static async listaPedidos(){
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
  }