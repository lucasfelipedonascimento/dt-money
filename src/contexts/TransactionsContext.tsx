import { createContext, ReactNode, useEffect, useState } from "react";

// tipamos os dados da lista de transações
interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

// criamos a tipagem do contexto. Ele vai receber uma lista de transactions
interface TransactionContextType {
  transactions: Transaction[];
}

// colocamos o children dentro do nosso provider, para ele receber o elemento filho
interface TransactionsProviderProps {
  children: ReactNode;
}

// exportamos nosso contexto para ele ser usado em outros componentes
// dizemos que ele é um objeto baseado na tipagem do contexto 
export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({children}: TransactionsProviderProps) {
  // criamos um estado do tipo "Lista de Transições"
  // que recebe inicialmente uma lista vazia
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    // batemos na api para pegar nossos dados
    const response = await fetch('http://localhost:3333/transactions')
    // pegamos os dados vindo da api e convertemos para json
    const data = await response.json();

    /* podemos fazer esse cara acima de outra forma
    fetch('http://localhost:3333/transactions')
      .then(response => {
        response.json().then(data => {
          console.log(data)
        })
      })

    NÃO É INDICADO UTILIZAR DESSE JEITO
    POIS O CÓDIGO FICA MUITO SUJO E MAIS DIFÍCIL DE ENTENDER

      OR

      fetch('http://localhost:3333/transactions')
       .then(response => response.json())
       .then(data => {
         console.log(data)
       })
    */
    
    // passamos os dados vindo da api para a nossa lista de transações
    setTransactions(data)
  }

  // No useEffect não podemos usar o async & await diretamente
  // usamos o useEffect para fazer a renderização 
  // da nossa lista de transações
  useEffect(() => {
    loadTransactions();
  }, []) 
  // deixando o array de dependências vazio,
  // o sistema só será renderizado se alguma transação nova for criada

  return (
    <>
      {/* Passamos o "valor" do contexto para ser usado em outro componente
        e dentro dele vem o children, que será para renderizar os "filhos" que estão dentro
      */}
      <TransactionContext.Provider value={{ transactions }}>
        {children}
      </TransactionContext.Provider>
    </>
  )
}