import React from 'react';
import configureStore from './frontend/store/store';
import { Provider } from 'react-redux';
import {
  AppRegistry
} from 'react-vr';

import Orbit from './frontend/orb_it';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.store = configureStore();
  }

  render() {
    return (
      <Provider store={this.store}>
        <Orbit />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('OrbIt', () => App);
