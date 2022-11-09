import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 48px;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 32px;

  @media screen and (min-width: 768px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    gap: 80px;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

export const ThumbImg = styled.div`
  max-width: 440px;
  min-width: 267px;
  margin: 0 auto;
`;

export const InfoImage = styled.img`
  object-fit: contain;
`;

export const InfoTitle = styled.h1`
  font-weight: var(--fw-normal);
`;

export const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 64px;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

export const Meta = styled.div`
  margin-top: 48px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const TagGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  padding: 0 16px;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;

  &.active {
    color: orangered;
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: orangered;
  }
`;
