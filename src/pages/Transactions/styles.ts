import styled from 'styled-components'

export const LayoutTransactions = styled.main`
  max-width: 1120px;
  width: 100%;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    background-color: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1.25rem 2rem;

    &:first-child {
      border-radius: 5px 0 0 5px;
      width: 40%;
    }

    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
`

interface RowTableProps {
  variant: 'input' | 'output'
}

export const RowTable = styled.tr<RowTableProps>`
  td:nth-child(2) {
    color: ${(props) =>
      props.variant === 'input'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }
`
