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

import OrbIndex from './frontend/components/thumbnails/orb_index';
import Navigation from './frontend/components/navigation/navigation';

export default class OrbIt extends React.Component {
  render() {
    return (
      <View>
        <OrbIndex/>
        <Navigation/>

      </View>
    );
  }
}

AppRegistry.registerComponent('OrbIt', () => OrbIt);
