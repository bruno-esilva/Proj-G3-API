***CRUD***
Comandos para verificar se o CRUD funciona

---Incluir---

===Clientes===

curl -d '{"id":6,"nome":"Jasmine Santos","telefone":11912345686,"email":"jjasmine@email.com","cpf":78345678910,"cep":"02896369","logradouro":"Rua Rosa","numero":13,"bairro":"Bairro Azul","cidade":"São Paulo","estado":"São Paulo","complemento":"Casa 5"}' -H "Content-Type: application/json" -X POST http://localhost:3000/clintes

===Produtos===

curl -d '{"id":11,"nome":"Dorflex","tipo":"Relaxante Muscular e Analgesico","descricao":"Dorflex é um medicamento que possui ação analgésica e relaxante muscular. É indicado para aliviar dores relacionadas à contratura muscular excessiva, como a dor de cabeça tensional (cefaleia tensional), e também as dores musculares (incluindo dor nas costas e na lombar).","composicao":"Citrato de Orfenadrina, Dipirona Sódica Monoidratada, Cafeína Anidra","valor":4.9,"qtd_estoque":38}' -H "Content-Type: application/json" -X POST http://localhost:3000/produtos

===Pedidos===

curl -d '{"id":11,"cliente_id":6,"qtd_item":1,"valor_total":4.9,"data":"2022-12-06"}' -H "Content-Type: application/json" -X POST http://localhost:3000/pedidos

===PedidosProdutos===

curl -d '{"id":21,"pedido_id":6,"produto_id":11,"valor":4.90,"quantidade":1}' -H "Content-Type: application/json" -X POST http://localhost:3000/pedidosProdutos


---Alterar---

===Cliente===

curl  -d '{"id":1,"nome":"José Silva","telefone":11912345678,"email":"jose@email.com","cpf":12345678910,"cep":"02896369","logradouro":"Rua Monte Azul","numero":123,"bairro":"Bairro Teste","cidade":"São Paulo","estado":"São Paulo","complemento":"Casa 1"}' -H "Content-Type: application/json" -X PUT http://localhost:3000/clientes/1

===Produtos===

curl  -d '{"id":1,"nome":"Dipirona Monoidratada","tipo":"Analgesico e antipirético","descricao":"Metamizol ou dipirona é um medicamento ainda utilizado principalmente como analgésico e antipirético. Embora ainda esteja disponível em balcão de um modo geral em todo o mundo, em alguns países como os Estados Unidos da America, a sua venda é proibida, pelo suposto risco de agranulocitose.","composicao":" fosfato de sódio monobásico, fosfato de sódio dibásico, sacarina sódica e água purificada.","valor":3,"qtd_estoque":20}' -H "Content-Type: application/json" -X PUT http://localhost:3000/produtos/1

===Pedidos===

curl  -d '{"id":9,"cliente_id":5,"qtd_item":8,"valor_total":26.16,"data":"2022-09-05"}' -H "Content-Type: application/json" -X PUT http://localhost:3000/pedidos/9


===PedidosProdutos===

curl  -d '{"id":6,"pedido_id":5,"produto_id":10,"valor":12.20,"quantidade":2}' -H "Content-Type: application/json" -X PUT http://localhost:3000/pedidosProdutos/6

---Deletar---

===Clientes===

curl -H "Content-Type: application/json" -X DELETE http://localhost:3000/clientes/2

===Produtos===

curl -H "Content-Type: application/json" -X DELETE http://localhost:3000/produtos/6

===Pedidos===

curl -H "Content-Type: application/json" -X DELETE http://localhost:3000/pedidos/3

===PedidosProdutos===

curl -H "Content-Type: application/json" -X DELETE http://localhost:3000/pedidosProdutos/1


