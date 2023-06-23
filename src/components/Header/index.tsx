import LogoIgnite from '../../assets/logo.svg'
import { ButtonNewTransaction, HeaderContent, LayoutHeader } from './styles'

export function Header() {
  return (
    <LayoutHeader>
      <HeaderContent>
        <img src={LogoIgnite} alt="" />
        <ButtonNewTransaction>Nova transação</ButtonNewTransaction>
      </HeaderContent>
    </LayoutHeader>
  )
}
