import { useContextSelector } from 'use-context-selector'
import { SearchForm } from './components/SearchForm'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionContext } from '../../contexts/TransactionsContext'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Home() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />

      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
