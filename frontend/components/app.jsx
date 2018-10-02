import React from 'react';
import { Provider } from 'react-redux';
import Splash from './splash/splash_container';

import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import BookIndexContainer from './books/book_index_container';


const App = () => {

  // Route path='/about' component={InfoContainer} />
  return (
    <div>
      <Modal />
      <Switch>
        <ProtectedRoute path='/books' component={BookIndexContainer} />
        <Route path='/' component={Splash} />
      </Switch>
    </div>

)};

export default App;
