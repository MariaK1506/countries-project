import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  padding: 0 16px;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radius);
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--colors-text);
  text-decoration: none;
`;
