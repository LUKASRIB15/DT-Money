import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { LayoutTransactions, RowTable, TransactionsTable } from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <LayoutTransactions>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <RowTable variant="input">
              <td>Desenvolvimento de site</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </RowTable>
            <RowTable variant="output">
              <td>Hamburguer</td>
              <td>- R$ 59,00</td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </RowTable>
            <RowTable variant="output">
              <td>Aluguel de apartamento</td>
              <td>- R$ 1.200,00</td>
              <td>Casa</td>
              <td>27/03/2022</td>
            </RowTable>
            <RowTable variant="input">
              <td>Computador</td>
              <td>R$ 5.400,00</td>
              <td>Venda</td>
              <td>15/03/2022</td>
            </RowTable>
          </tbody>
        </TransactionsTable>
      </LayoutTransactions>
    </div>
  )
}
