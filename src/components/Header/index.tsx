import LogoIgnite from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { ButtonNewTransaction, HeaderContent, LayoutHeader } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  return (
    <LayoutHeader>
      <HeaderContent>
        <img src={LogoIgnite} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ButtonNewTransaction>Nova transação</ButtonNewTransaction>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </LayoutHeader>
  )
}
