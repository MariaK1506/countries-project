import styled from 'styled-components';

export const WrapperContainer = styled.div`
  width: 100%;
  /* max-width: 1240px; */
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
