import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const theme = useTheme()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme.color['green-300']} />
        </header>

        <strong>R$ 17.000,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme.color['red-300']} />
        </header>

        <strong>R$ 17.000,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.color.white} />
        </header>

        <strong>R$ 17.000,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
