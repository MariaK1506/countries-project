import styled from 'styled-components';

export const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 16px 32px;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

export const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 32px;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;
