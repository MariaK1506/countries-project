import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Header } from '../components/Header/Header';
import { Main } from './Main/Main';
import { HomePage } from 'pages/HomePage';
import { Details } from 'pages/Details';
import { NotFoundPage } from 'pages/NotFoundPage';

export const App = () => {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <GlobalStyle />

      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage countries={countries} setCountries={setCountries} />
            }
          />
          <Route path="country/:name" element={<Details />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
    </>
  );
};
