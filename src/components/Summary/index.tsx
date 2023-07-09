import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { HeaderCard, LayoutCard, LayoutSummary } from './styles'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

  return (
    <LayoutSummary>
      <LayoutCard>
        <HeaderCard>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </HeaderCard>
        <strong>{priceFormatter.format(summary.input)}</strong>
      </LayoutCard>
      <LayoutCard>
        <HeaderCard>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </HeaderCard>
        <strong>{priceFormatter.format(summary.output)}</strong>
      </LayoutCard>
      <LayoutCard>
        <HeaderCard>
          <span>Total</span>
          <CurrencyDollar size={32} />
        </HeaderCard>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </LayoutCard>
    </LayoutSummary>
  )
}
