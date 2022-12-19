import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.color['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const NewTransactionButton = styled.button`
  height: 3.125rem;
  padding: 0.75rem 1.25rem;
  background: ${(props) => props.theme.color['green-500']};
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.color.white};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background: ${(props) => props.theme.color['green-700']};
  }
`
