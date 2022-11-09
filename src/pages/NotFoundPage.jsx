import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 800;
  font-size: 18px;
  color: var(--colors-text);

  &.active {
    color: orangered;
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: orangered;
  }
`;

export const NotFoundPage = () => {
  return (
    <div>
      <h1>Sorry, we couldn't find this page :(</h1>
      <p>Please go to {<StyledLink to="/">Home</StyledLink>}</p>
    </div>
  );

  // <div>This page doesn't exist</div>;
};
