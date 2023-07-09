import { MagnifyingGlass } from 'phosphor-react'
import { LayoutSearchForm, SearchButton } from './styles'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'
import { memo } from 'react'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type searchFormInputs = zod.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: searchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <LayoutSearchForm onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        required
        {...register('query')}
      />
      <SearchButton type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </SearchButton>
    </LayoutSearchForm>
  )
}

export const SearchForm = memo(SearchFormComponent)
