import React from 'react';
import axios from 'axios';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';
import { Route, Redirect, MemoryRouter as Router } from 'react-router';
import NavButton from './frontend/components/navigation/nav_button';

// import { HashRouter } from 'react-router-dom';


import OrbIndex from './frontend/components/thumbnails/orb_index';
import Navigation from './frontend/components/navigation/navigation';
// <route component=OrbView path='/orbs/orb-id' props='orb-id'></route>

export default class OrbIt extends React.Component {

  render() {
    console.log(Route);
    return (
      <Router>
        <View>
          <Route path='/' exact={true} render={() => (
            <Redirect to={`/fish/{6}`} />
          )} />
        <Route path='/orbs' component={OrbIndex} />

          <Navigation/>
          <Pano source={asset('chess-world.jpg')}/>
    </View>
  </Router>
    );
  }
}

AppRegistry.registerComponent('OrbIt', () => OrbIt);
