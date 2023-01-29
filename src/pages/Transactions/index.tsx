import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

// criamos a tipagem dos dados das nossas transações
interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  // criamos um estado do tipo "Lista de Transições"
  // que recebe inicialmente uma lista vazia
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    // batemos na api para pegar nossos dados
    const response = await fetch('http://localhost:3333/transactions')
    // pegamos os dados vindo da api
    const data = await response.json();
    
    // passamos os dados vindo da api para a nossa lista de transações
    setTransactions(data)
  }

  // usamos o useEffect para fazer a renderização 
  // da nossa lista de transações
  useEffect(() => {
    loadTransactions();
  }, []) 
  // deixando o array de dependências vazio,
  // o sistema só será renderizado se alguma transação nova for criada

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions &&
              transactions.map(transaction => {
                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighlight variant={transaction.type}>
                        {transaction.price}
                      </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>{transaction.createdAt}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}