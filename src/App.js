import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Signup from './components/Signup';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Signup} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
