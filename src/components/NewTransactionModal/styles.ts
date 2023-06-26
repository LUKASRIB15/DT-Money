import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  inset: 0; // top:0, bottom: 0, left: 0, right: 0
  width: 100vw;
  height: 100vh;
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  width: 535px;
  background-color: ${(props) => props.theme['gray-800']};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;
  border-radius: 6px;
  box-shadow: 0px 4px 32px 0px #000000;

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 1rem;
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      border: 0;
      border-radius: 6px;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }

      &:focus {
        outline: 1px solid ${(props) => props.theme['green-300']};
      }

      &[type='number']::-webkit-inner-spin-button,
      &[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
    }

    button[type='submit'] {
      margin-top: 2.5rem;
      background-color: ${(props) => props.theme['green-500']};
      padding: 1rem 2rem;
      border: 0;
      border-radius: 6px;
      color: ${(props) => props.theme.white};
      font-weight: bold;
      line-height: 1.6;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme['green-300']};
        transition: background-color 0.2s;
      }
    }
  }
`

export const Close = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background-color: transparent;
  border: 0;
  line-height: 0;
  cursor: pointer;
`

export const LayoutTransactionType = styled(RadioGroup.Root)`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

interface TypeButtonProps {
  variant: 'input' | 'output'
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TypeButtonProps>`
  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};
  padding: 1rem 1.5rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition: background-color 0.2s;

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variant === 'input'
        ? props.theme['green-700']
        : props.theme['red-700']};

    transition: all 0.2s;

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme['gray-600']};
  }

  svg {
    color: ${(props) =>
      props.variant === 'input'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }
`
