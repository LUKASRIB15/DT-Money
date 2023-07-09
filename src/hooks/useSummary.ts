import { useMemo } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions])

  return summary
}
