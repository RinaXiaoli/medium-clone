import React from 'react';
import {Switch, Route} from 'react-router-dom';
import GlobalFeed from 'pages/globalFeed';
import Article from 'pages/article';
import Auth from 'pages/authentication';

export default () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/login" component={Auth} />
      <Route path="/register" component={Auth} />
      <Route path="/articles/:slug" component={Article} />
    </Switch>
  );
};
