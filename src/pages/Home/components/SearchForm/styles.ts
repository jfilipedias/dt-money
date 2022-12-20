import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  input {
    flex: 1;
    padding: 1rem;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme.color['gray-900']};
    color: ${(props) => props.theme.color['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme.color['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme.color['green-300']};
    border-radius: 6px;
    color: ${(props) => props.theme.color['green-300']};
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.1s, color 0.1s, border-color 0.1s;

    &:hover {
      background: ${(props) => props.theme.color['green-500']};
      border: 1px solid ${(props) => props.theme.color['green-500']};
      color: ${(props) => props.theme.color.white};
    }
  }
`
