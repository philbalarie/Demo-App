import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticleList from '../../containers/Article/ArticleList';
import ArticleAdd from '../../containers/Article/ArticleAdd';

const Router = () => (
    <>
        <Switch>
            <Route exact path='/articles' component={ArticleList} />
            <Route exact path='/articles/add' component={ArticleAdd} />
        </Switch>
    </>
);

export default Router;