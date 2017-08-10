import React from 'react';
import configureStore from './frontend/store/store';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-vr';
import { MemoryRouter as Router } from 'react-router';

import Orbit from './frontend/orb_it';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = configureStore();
  }

  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <Orbit />
        </Router>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('OrbIt', () => App);
