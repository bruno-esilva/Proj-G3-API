module.exports = class Cliente {
    constructor(cliente) {
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

    static async listarClientes() {
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

    static async buscarPorId(id) {
        const listarClientes = await this.listarClientes()
        for (let i = 0; i < listarClientes.length; i++) {
            const clienteDb = listarClientes[i]
            if (clienteDb.id.toString() === id.toString()) {
                return clienteDb
            }
        }

        return null
    }

    static async salvar(cliente) {
        const listarClientes = await this.listarClientes()
        let exist = false
        for (let i = 0; i < listarClientes.length; i++) {
            const clienteDb = listarClientes[i]
            if (clienteDb.id.toString() === cliente.id.toString()) {
                clienteDb.nome = cliente.nome
                clienteDb.telefone = cliente.telefone
                clienteDb.email = cliente.email
                clienteDb.cpf = cliente.cpf
                clienteDb.cep = cliente.cep
                clienteDb.logradouro = cliente.logradouro
                clienteDb.numero = cliente.numero
                clienteDb.bairro = cliente.bairro
                clienteDb.cidade = cliente.cidade
                clienteDb.estado = cliente.estado
                clienteDb.complemento = cliente.complemento
                exist = true
                break
            }
        }

        if (!exist) {
            const objectLiteral = { ...cliente }
            listarClientes.push(objectLiteral)
        }

        Cliente.salvarJsonDisco(listarClientes)
    }

    static async salvarJsonDisco(clientes) {
        const fs = require('fs');

        try {
            fs.writeFileSync('dataBase_G3/clientes.json', JSON.stringify(clientes), { encoding: "utf8" });
        } catch (err) {
            console.error(err);
        }
    }

    static async apagarPorId(id) {
        const listarClientes = await this.listarClientes()
        const novoCliente = []
        for (let i = 0; i < listarClientes.length; i++) {
            const clienteDb = listarClientes[i]
            if (clienteDb.id.toString() !== id.toString()) {
                novoCliente.push(clienteDb)
            }
        }

        Cliente.salvarJsonDisco(novoCliente)
    }


    /*   static async lista(){
        let clientes = []
        const fs = require('fs');
    
        try {
            const jsonClientes = await fs.readFileSync('dataBase_G3/clientes.json', 'utf8');
            clientes = JSON.parse(jsonClientes)
        } catch (err) {
            console.error(err);
        }
        
        return clientes
    } */
}