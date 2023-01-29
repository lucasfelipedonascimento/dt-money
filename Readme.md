# Curso Ignite - Consumo de API e performance no ReactJS

**1- Módulo**
Neste módulo, fizemos a estilização das páginas e dos componentes utilizando as seguintes bibliotecas:
**Styled Components**, **Redix UI**.

**2- Módulo**
Neste módulo estamos utilizando a biblioteca **json-server** para "criarmos" um back-end temporário para a nossa aplicação.

- Utilizamos o método **fetch()**(fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede) para retornar uma **Promise** do nosso back-end.
- Criamos um arquivo chamado **server.json** para fazer a criação do nosso back-end **"na mão"**.

```json
{
  "transactions": [
    {
      "id": 1,
      "description": "Desenvolvimento de site",
      "type": "income",
      "category": "Venda",
      "price": 14000,
      "createdAt": "2023-01-29T18:35:39.368Z"
    },
    {
      "id": 2,
      "description": "Hambúrguer",
      "type": "outcome",
      "category": "Alimentação",
      "price": 40,
      "createdAt": "2023-01-22T18:35:39.368Z"
    }
  ]
}
```

- Utilizamos o seguinte comando para rodar o nosso back-end:

```js
 npx json-server server.json -p 3333 -w -d 580
```
