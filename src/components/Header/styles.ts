import styled from 'styled-components'

export const LayoutHeader = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonNewTransaction = styled.button`
  background-color: ${(props) => props.theme['green-500']};
  padding: 0.75rem 1.25rem;
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
`
