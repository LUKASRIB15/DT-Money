import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'input') {
        acc.input += transaction.price
        acc.total += transaction.price
      } else {
        acc.output += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      input: 0,
      output: 0,
      total: 0,
    },
  )

  return summary
}
