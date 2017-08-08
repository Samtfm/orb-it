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
import { Match, Redirect, MemoryRouter as Router } from 'react-router';
// import { HashRouter } from 'react-router-dom';


import OrbIndex from './frontend/components/thumbnails/orb_index';
import Navigation from './frontend/components/navigation/navigation';
// <route component=OrbView path='/orbs/orb-id' props='orb-id'></route>

export default class OrbIt extends React.Component {

  render() {
    console.log(Match);
    return (
      <Router>
        <View>
          <Match pattern='/' exact={true} render={() => (
            <Redirect to={`/orbs/{6}`} />
          )} />
        <Match pattern='/orbs' component={OrbIndex} />

          <Navigation/>
          <Pano source={asset('chess-world.jpg')}/>
    </View>
  </Router>
    );
  }
}

AppRegistry.registerComponent('OrbIt', () => OrbIt);
