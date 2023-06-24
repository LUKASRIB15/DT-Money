import styled from 'styled-components'

export const LayoutSummary = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: -82px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

export const LayoutCard = styled.article`
  background-color: ${(props) => props.theme['gray-600']};
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  border-radius: 6px;

  &:last-child {
    background-color: ${(props) => props.theme['green-700']};
  }

  strong {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.4;
  }
`

export const HeaderCard = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  span {
    color: ${(props) => props.theme['gray-300']};
  }
`
