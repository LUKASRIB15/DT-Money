import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { LayoutTransactions, RowTable, TransactionsTable } from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  return (
    <div>
      <Header />
      <Summary />

      <LayoutTransactions>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <RowTable key={transaction.id} variant={transaction.type}>
                  <td>{transaction.description}</td>
                  <td>
                    {transaction.type === 'output' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </RowTable>
              )
            })}
          </tbody>
        </TransactionsTable>
      </LayoutTransactions>
    </div>
  )
}
