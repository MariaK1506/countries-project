import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import BackLink from 'components/BackLink/BackLink';
import { searchByCountry } from '../config';
import { Info } from 'components/Info/Info';

export const Details = () => {
  const { name } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <BackLink to={backLinkHref}>Go Back</BackLink>
      {country && <Info {...country} />}
    </div>
  );
};
