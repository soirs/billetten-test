import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import './assets/main.css';
import AlbumPage from './components/albumpage';
import UserPage from './components/userpage';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/user/:userId' component={UserPage} />
        <Route path='/user/:userId/album/:albumId' component={AlbumPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
