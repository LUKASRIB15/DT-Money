import { MagnifyingGlass } from 'phosphor-react'
import { LayoutSearchForm, SearchButton } from './styles'

export function SearchForm() {
  return (
    <LayoutSearchForm>
      <input type="text" placeholder="Busque uma transação" />
      <SearchButton type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </SearchButton>
    </LayoutSearchForm>
  )
}
