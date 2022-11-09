import { Container } from '../Container/Container';
import { Wrapper } from './Main.styled';

export const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
