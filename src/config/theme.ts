import { createGlobalStyle } from 'styled-components';

export const theme = {};

export const GlobalStyle = createGlobalStyle`
body {
  position: relative;
  color: white;
  height: 100vh;
  background: linear-gradient(
    200.96deg,
    #fedc2a -29.09%,
    #dd5789 51.77%,
    #7a2c9e 129.35%
  );
  font-family: sans-serif;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  background-color: white;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 10px;
  border: none;
  appearance: none;
  font-size: 1.3rem;
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
  transition: transform ease-in 0.1s;
}

button:hover {
  transform: scale(1.05);
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

a:hover {
  opacity: 1;
  text-decoration: none;
  cursor: pointer;
}

.Hello {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
`;
