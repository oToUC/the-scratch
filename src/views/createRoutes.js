import React from 'react';
import {Route} from 'react-router';
import App from 'views/App';
import Auth from 'views/Auth';
import Home from 'views/Home';
import Intro from 'views/Intro';
import Map from 'views/Map';
import Widgets from 'views/Widgets';
import About from 'views/About';
import Login from 'views/Login';
import RequireLogin from 'views/RequireLogin';
import LoginSuccess from 'views/LoginSuccess';
import Survey from 'views/Survey';
import NotFound from 'views/NotFound';

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
