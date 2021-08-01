import styles from './app.module.css';
import Login from './components/login/login';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import { auth } from './firebase.utills';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;