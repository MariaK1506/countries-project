import {
  Wrapper,
  CardImage,
  CardBody,
  CardTitle,
  CardList,
  CardListItem,
} from './Card.styled';

export const Card = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map(item => (
            <CardListItem key={item.title}>
              <b>{item.title}: </b>
              {item.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};
