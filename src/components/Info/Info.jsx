import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { filterByCode } from '../../config';
import {
  Wrapper,
  ThumbImg,
  InfoImage,
  InfoTitle,
  ListGroup,
  List,
  ListItem,
  Meta,
  TagGroup,
  Tag,
} from './Info.styled';

export const Info = props => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
  } = props;

  const [neighbors, setNeighbors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (borders.length) {
      axios.get(filterByCode(borders)).then(({ data }) => {
        setNeighbors(data.map(country => country.name));
      });
    }
  }, [borders]);

  return (
    <Wrapper>
      <ThumbImg>
        <InfoImage src={flag} alt={name} />
      </ThumbImg>

      <div>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native name:</b> {nativeName}
            </ListItem>
            <ListItem>
              <b>Population:</b> {population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Sub region:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top level domain:</b>{' '}
              {topLevelDomain.map(domain => (
                <span key={domain}>{domain}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currency:</b>{' '}
              {currencies.map(Currency => (
                <span key={Currency.code}>{Currency.name} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Language: </b>{' '}
              {languages.map(lang => (
                <span key={lang.name}>{lang.name}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border countries</b>
          {!borders.length ? (
            <span>There are no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map(neighbor => (
                <Tag
                  key={neighbor}
                  onClick={() =>
                    navigate(`/country/${neighbor}`, {
                      replace: true,
                    })
                  }
                >
                  {neighbor}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};
