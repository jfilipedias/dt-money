import { useForm } from 'react-hook-form'
import { MagnifyingGlass } from 'phosphor-react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchFormContainer } from './styles'
import { useContext } from 'react'
import { TransactionContext } from '../../../../contexts/TransactionsContext'

const searchFormSchema = z.object({
  search: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransaction } = useContext(TransactionContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearch(data: SearchFormInputs) {
    await fetchTransaction(data.search)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('search')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  )
}
