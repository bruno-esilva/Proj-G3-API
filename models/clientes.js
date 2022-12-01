module.exports = class Cliente {
    constructor(){
      this.id = 0
      this.nome = ""
      this.telefone = 0
      this.email = ""
      this.cpf = 0
      this.cep = ""
      this.logradouro = ""
      this.numero = ""
      this.bairro = ""
      this.cidade = ""
      this.estado = ""
      this.complemento = ""
    }
  
    static async listaClientes(){
      let clientes = []
      const fs = require('fs');
      try {
        const jsonClientes = await fs.readFileSync('dataBase_G3/clientes.json', 'utf8');
        clientes = JSON.parse(jsonClientes)
      } catch (err) {
        console.log(err);
      }
  
      return clientes
    }
  }
  /* module.exports = class Cliente {
    constructor(cliente){
        this.id = cliente?.id
        this.nome = cliente?.nome
        this.telefone = cliente?.telefone
        this.email = cliente?.email
        this.cpf = cliente?.cpf
        this.cep = cliente?.cep
        this.logradouro = cliente?.logradouro
        this.numero = cliente?.numero
        this.bairro = cliente?.bairro
        this.cidade = cliente?.cidade
        this.estado = cliente?.estado
        this.complemento = cliente?.complemento
    }


    // metodos staticos
    static async apagarPorId(id){
        const listaClientes = await this.lista()
        const listaNova = []
        for(let i=0; i<listaClientes.length; i++){
            const clienteDb = listaClientes[i]
            if(clienteDb.id.toString() !== id.toString()){
                listaNova.push(clienteDb)
            }
        }

        Cliente.salvarJsonDisco(listaNova)
    }
    
    static async buscaPorId(id){
        const listaClientes = await this.lista()
        for(let i=0; i<listaClientes.length; i++){
            const clienteDb = listaClientes[i]
            if(clienteDb.id.toString() === id.toString()){
                return clienteDb
            }
        }

        return null
    }

    static async salvar(cliente){
        const listaClientes = await this.lista()
        let exist = false
        for(let i=0; i<listaClientes.length; i++){
            const clienteDb = listaClientes[i]
            if(clienteDb.id.toString() === cliente.id.toString()){
                clienteDb.nome = cliente.nome
                clienteDb.cpf = cliente.cpf
                clienteDb.endereco = cliente.endereco
                clienteDb.telefone = cliente.telefone
                clienteDb.valor = cliente.valor
                exist = true
                break
            }
        }

        if(!exist){
            const objectLiteral = {...cliente}
            listaClientes.push(objectLiteral)
        }

        Cliente.salvarJsonDisco(listaClientes)
    }

    static async salvarJsonDisco(clientes){
        const fs = require('fs');

        try {
            fs.writeFileSync('dataBase_G3/clientes.json', JSON.stringify(clientes), {encoding: "utf8"});
        } catch (err) {
            console.error(err);
        }
    }

    static async lista(){
        let clientes = []
        const fs = require('fs');

        try {
            const jsonClientes = await fs.readFileSync('dataBase_G3/clientes.json', 'utf8');
            clientes = JSON.parse(jsonClientes)
        } catch (err) {
            console.error(err);
        }
        
        return clientes
    }
} */