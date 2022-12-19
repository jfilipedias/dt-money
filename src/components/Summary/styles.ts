import styled from 'styled-components'

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  width: 100%;
  max-width: 70rem;
  margin: -5rem auto 0;
  padding: 0 1.5rem;
`

interface SummaryCardProps {}

export const SummaryCard = styled.div`
  background: ${(props) => props.theme.color['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.color['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`
