import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

:root {
  
  --family: 'Nunito Sans', sans-serif;
  --fs-sm: 14px;
  --fs-md: 16px;
  --fw-light: 300;
  --fw-normal: 600;
  --fw-bold: 800;

   --radius: 8px;
}

body[data-theme='dark'] {
  --colors-text: hsl(0, 0%, 100%);
  --colors-bg: hsl(207, 26%, 17%);
  --colors-ui-base: hsl(209, 23%, 22%);

  --shadow: rgba(245, 245, 245, 0.2) 0 0 8px;
}
body[data-theme='light'] {
  --colors-text: hsl(200, 15%, 8%);
  --colors-bg: hsl(0, 0%, 98%);
  --colors-ui-base: hsl(0, 0%, 100%);

  --shadow: 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
}

body {
  margin: 0;
  font-family: var(--family);
  color: var(--colors-text);
  font-weight: var(--fw-light);
  background-color: var(--colors-bg);
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

li {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li {
  margin: 0;
  padding: 0;
}
`;
