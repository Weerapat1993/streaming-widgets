import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

type LayoutProps = {
  children: any;
};

const GlobalStyle = createGlobalStyle`
body {
  margin: 20px;
  background-color: #0E0;
}
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Link as="h1" to="/">
        Home
      </Link>
      <div>{children}</div>
      <GlobalStyle />
    </div>
  );
};

export default Layout;
