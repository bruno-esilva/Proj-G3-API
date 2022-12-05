module.exports = class Produto {
    constructor(produto){
        this.id = produto?.id
        this.nome = produto?.nome
        this.tipo = produto?.tipo
        this.descricao = produto?.descricao
        this.composicao = produto?.composicao
        this.valor = produto?.valor
        this.qtd_estoque = produto?.qtd_estoque
    }
  
    static async listarProdutos(){
      let produtos = []
      const fs = require('fs');
      try {
        const jsonProdutos = await fs.readFileSync('dataBase_G3/produtos.json', 'utf8');
        produtos = JSON.parse(jsonProdutos)
      } catch (err) {
        console.log(err);
      }
  
      return produtos
    }

    static async buscarPorId(id){
        const listaProdutos = await this.listarProdutos()
        for(let i=0; i<listaProdutos.length; i++){
            const produtoDb = listaProdutos[i]
            if(produtoDb.id.toString() === id.toString()){
                return produtoDb
            }
        }

        return null
    }

    static async salvarJsonDisco(produtos){
        const fs = require('fs');

        try {
            fs.writeFileSync('dataBase_G3/produtos.json', JSON.stringify(produtos), {encoding: "utf8"});
        } catch (err) {
            console.error(err);
        }
    }

    static async salvar(produto){
        const listarProdutos = await this.listarProdutos()
        let exist = false
        for(let i=0; i<listarProdutos.length; i++){
            const produtoDb = listarProdutos[i]
            if(produtoDb.id.toString() === produto.id.toString()){
                produtoDb.nome = produto.nome
                produtoDb.tipo = produto.tipo
                produtoDb.descricao = produto.descricao
                produtoDb.composicao = produto.composicao
                produtoDb.valor = produto.valor
                produtoDb.qtd_estoque = produto.qtd_estoque
                exist = true
                break
            }
        }

        if(!exist){
            const objectLiteral = {...produto}
            listarProdutos.push(objectLiteral)
        }

        Produto.salvarJsonDisco(listarProdutos)
    }

    static async apagarPorId(id){
        const listarProdutos = await this.listarProdutos()
        const novoProduto = []
        for(let i=0; i<listarProdutos.length; i++){
            const produtoDb = listarProdutos[i]
            if(produtoDb.id.toString() !== id.toString()){
                novoProduto.push(produtoDb)
            }
        }

        Produto.salvarJsonDisco(novoProduto)
    }

 /*  


    // metodos staticos
    
    
    




    static async lista(){
        let produtos = []
        const fs = require('fs');

        try {
            const jsonProdutos = await fs.readFileSync('dataBase_G3/produtos.json', 'utf8');
            produtos = JSON.parse(jsonProdutos)
        } catch (err) {
            console.error(err);
        }
        
        return produtos
    }*/
}