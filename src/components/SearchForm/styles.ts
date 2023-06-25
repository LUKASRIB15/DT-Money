import styled from 'styled-components'

export const LayoutSearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    border: 0;
    border-radius: 6px;

    &:focus {
      outline: 1px solid ${(props) => props.theme['green-300']};
    }
  }
`

export const SearchButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme['green-300']};
  padding: 0.875rem 2rem;
  border: 1px solid ${(props) => props.theme['green-300']};
  font-weight: bold;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  transition: border 0.2s, color 0.2s, background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme['green-500']};
  }
`
