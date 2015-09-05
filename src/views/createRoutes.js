import React from 'react';
import {Route} from 'react-router';
import App from './App';
import Auth from './Auth';
import Home from './Home';
import Intro from './Intro';
import Map from './Map';
import Widgets from './Widgets';
import About from './About';
import Login from './Login';
import RequireLogin from './RequireLogin';
import LoginSuccess from './LoginSuccess';
import Survey from './Survey';
import NotFound from './NotFound';

export default function(store) {
  return (
    <Route component={App}>
      <Route path="/" component={Intro}/>
      <Route path="/widgets" component={Widgets}/>
      <Route path="/about" component={About}/>
      <Route path="/auth" component={Auth}/>
      <Route path="/home" component={Home}/>
      <Route path="/intro" component={Intro}/>
      <Route path="/login" component={Login}/>
      <Route path="/map" component={Map}/>
      <Route component={RequireLogin} onEnter={RequireLogin.onEnter(store)}>
        <Route path="/loginSuccess" component={LoginSuccess}/>
      </Route>
      <Route path="/survey" component={Survey}/>
      <Route path="*" component={NotFound}/>
    </Route>
  );
}
