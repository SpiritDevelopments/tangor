import React, { userState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Default from './pages/Default';
import Login from './pages/Login';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Default} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App