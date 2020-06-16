import React from 'react';
import './App.css';

import ArticleList from './containers/Article/ArticleList';

/**
 * @component
 * @return {JSX.Element}
 */
const App: React.FC = () => (
  <div data-test="App" className="App">
    <ArticleList />
  </div>
)

export default App;
