# Curso Ignite - Consumo de API e performance no ReactJS

**1- Módulo**
Neste módulo, fizemos a estilização das páginas e dos componentes utilizando as seguintes bibliotecas:
**Styled Components**, **Redix UI**.

**2- Módulo**
Neste módulo estamos utilizando a biblioteca **json-server** para "criarmos" um back-end temporário para a nossa aplicação.

- Utilizamos o método **fetch('linkDoBackEnd')**(fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede) para retornar uma **Promise** do nosso back-end.
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

**INTL**

- O objeto Intl é o namespace para a API de Internacionalização do ECMAScript , que fornece comparação de string sensível à línguagem, formatação de números, e formatação de data e hora. Os construtores para os objetos Collator (en-US), NumberFormat, e DateTimeFormat (en-US) são propriedades do objecto Intl. Esta página documenta essas propriedades, bem como funcionalidades comuns aos construtores de internacionalização e outras funções sensíveis de linguagem.

[Documentação INTL](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl)
