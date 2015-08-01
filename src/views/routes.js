import React from 'react';
import {Route} from 'react-router';
import App from 'views/App';
import Home from 'views/Home';
import Widgets from 'views/Widgets';
import About from 'views/About';
import Login from 'views/Login';
import Map from 'views/Map';
import Survey from 'views/Survey';
import NotFound from 'views/NotFound';
import Redirect from 'views/Redirect';

export default (
  <Route component={App}>
    <Route path="/" component={Home}/>
    <Route path="/widgets" component={Widgets}/>
    <Route path="/about" component={About}/>
    <Route path="/login" component={Login}/>
    <Route path="/survey" component={Survey}/>
    <Route path="/map" component={Map}/>
    <Route path="/redirect" component={Redirect} onEnter={Redirect.onEnter}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
