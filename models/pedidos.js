module.exports = class Pedido {
    constructor(){
        this.id = 0 
        this.cliente_id = 0
        this.valor_total = 0
        this.data = ""
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