import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import icon from '../assets/icon.svg';
import { theme, GlobalStyle } from './config/theme';
import Timer from './pages/Timer';
import Youtube from './pages/Youtube';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <Link to="/timer">
          <button type="button">
            <span role="img" aria-label="books">
              ⏲️
            </span>
            Timer
          </button>
        </Link>
        <Link to="/youtube">
          <button type="button">
            <span role="img" aria-label="books">
              🌐
            </span>
            Youtube
          </button>
        </Link>
      </div>
      <GlobalStyle />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Hello} />
          <Route path="/timer" component={Timer} />
          <Route path="/youtube" component={Youtube} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
