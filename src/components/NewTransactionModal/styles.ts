import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 32rem;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme.color['gray-800']};
  border-radius: 6px;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    input {
      padding: 1rem;
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme.color['gray-900']};
      color: ${(props) => props.theme.color['gray-300']};

      &::placeholder {
        color: ${(props) => props.theme.color['gray-500']};
      }
    }

    button[type='submit'] {
      height: 3.625rem;
      margin-top: 1.5rem;
      padding: 0 1.25rem;
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme.color['green-500']};
      color: ${(props) => props.theme.color.white};
      font-weight: bold;
      transition: background-color 0.1s;
      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme.color['green-700']};
      }
    }
  }
`
