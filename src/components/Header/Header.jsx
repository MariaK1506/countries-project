import { useState, useEffect } from 'react';
import { HeaderElement, Wrapper, Title, ModeSwitcher } from './Header.styled';
import { Container } from 'components/Container/Container';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

export const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <HeaderElement>
        <Container>
          <Wrapper>
            <Title>World around us</Title>
            <ModeSwitcher onClick={toggleTheme}>
              {theme === 'light' ? (
                <IoMoonOutline size="14px" />
              ) : (
                <IoMoon size="14px" />
              )}

              <span style={{ marginLeft: '5px' }}>{theme} theme</span>
            </ModeSwitcher>
          </Wrapper>
        </Container>
      </HeaderElement>
    </div>
  );
};
