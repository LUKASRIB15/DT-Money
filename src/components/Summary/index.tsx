import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { HeaderCard, LayoutCard, LayoutSummary } from './styles'

export function Summary() {
  return (
    <LayoutSummary>
      <LayoutCard>
        <HeaderCard>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </HeaderCard>
        <strong>R$ 17.400,00</strong>
      </LayoutCard>
      <LayoutCard>
        <HeaderCard>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </HeaderCard>
        <strong>R$ 1.259,00</strong>
      </LayoutCard>
      <LayoutCard>
        <HeaderCard>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </HeaderCard>
        <strong>R$ 16.141,00</strong>
      </LayoutCard>
    </LayoutSummary>
  )
}
