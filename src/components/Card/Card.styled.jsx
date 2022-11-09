import styled from 'styled-components';

export const Wrapper = styled.article`
  border-radius: var(--radius);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;
export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;
export const CardBody = styled.div`
  padding: 16px 24px 32px;
`;
export const CardTitle = styled.h3`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;
export const CardList = styled.ul`
  list-style: none;
  padding: 16px 0 0;
`;
export const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;
