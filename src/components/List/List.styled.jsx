import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
    padding: 40px 0;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 64px;
    padding: 40px 0;
  } ;
`;
