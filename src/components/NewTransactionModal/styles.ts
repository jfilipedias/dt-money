import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

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

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme.color['green-700']};
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  color: ${(props) => props.theme.color['gray-500']};
  line-height: 0;
  cursor: pointer;
`

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps extends RadioGroup.RadioGroupItemProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: ${(props) => props.theme.color['gray-700']};
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.color['gray-300']};
  transition: background-color 0.1s;
  cursor: pointer;

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme.color['gray-600']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.color.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme.color['green-500']
        : props.theme.color['red-500']};

    svg {
      color: ${(props) => props.theme.color.white};
    }
  }

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme.color['green-300']
        : props.theme.color['red-300']};
  }
`
