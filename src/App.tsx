import React from 'react';
import './App.css';

import ArticleList from './containers/Article/ArticleList';

import Router from './containers/Navigation/Router';
import Navigation from './containers/Navigation/Navigation';

/**
 * @component
 * @return {JSX.Element}
 */

const App: React.FC = () => (
  <div data-test="App" className="App">
    <Navigation />
    <Router />
  </div>
)

export default App;
