import { useContext } from 'react'
import { TransactionContext } from '../contexts/TransactionsContext'

// criamos um Hook para fazer nosso cálculo
// exportamos ele para qualquer componente em que ele for ser usado

export function useSummary() {
  // exportando o contexto de transactions
  const { transactions } = useContext(TransactionContext)

  // método reduce(), percorre um array, e reduz o mesmo há uma nova estrutura de dados
  // nesse caso, queremos converter meu array em um objeto que vai ter a estrutura:
  // {income: 0, outcome: 0, total: 0}
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
