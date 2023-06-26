import * as Dialog from '@radix-ui/react-dialog'
import {
  Close,
  Content,
  LayoutTransactionType,
  Overlay,
  TransactionTypeButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <Close>
          <X size={24} color="#7C7C8A" />
        </Close>
        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <LayoutTransactionType>
            <TransactionTypeButton variant="input" value="input">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="output" value="output">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </LayoutTransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
