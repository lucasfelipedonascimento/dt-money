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

**FORMULÁRIO**

- Os elementos de **formulário** HTML **funcionam de maneira diferente** de outros elementos DOM no React, porque os elementos de formulário **mantêm** naturalmente algum **estado interno**.
- Na maioria dos casos, é **conveniente** ter uma **função JavaScript** que **maniputla o envio de um formulário** e **tem acesso aos dados que o usuário digitou** nos inputs. O modo padrão de fazer isso é com uma técnica chamada **componentes controlados(controlled components)**.

  # Controlled Components

  - Em **HTML**, **elementos de formulário** como **input**, **textarea** e **select**, normalmente **mantêm seu próprio estado** e o **atualiza baseado na entrada do usuário**. Em **React**, o **estado mutável** é normalmente **mantido na propriedade state** dos componentes e **atualizado apenas com seState()**.

  - Podemos **combinar os dois** fazendo o **estado React** ser a **“única fonte da verdade”**. Assim, o **componente React que renderiza um formulário** também c**ontrola o que acontece nesse formulário nas entradas subsequentes do usuário**. **Um input cujo o valor é controlado pelo React dessa maneira é chamado de “componente controlado"**.

**Por que um componente renderiza?**

- Hooks changed (mudou o estado, contexto, reducer, ...);
- Props changed (mudou as propriedades);
- Parent rerendered (componente pai renderizou);

**Qual o fluxo de renderização?**

1. O React recria o HTML da interface daquele componente
2. Compara a versão do HTML recriada com o anterior
3. SE mudou alguma coisa, ele reescreve o HTML na tela

Memo 0. Hooks changed, Props changed (deep comparison)
0.1. Comparar com a versão anterior dos hooks e props
0.2 SE mudou algo, ele vai permitir a nova renderização
