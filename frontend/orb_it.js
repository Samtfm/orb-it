import React from 'react';
import {
  Pano,
  View,
  asset
} from 'react-vr';

import OrbIndexContainer from './components/index/orb_index_container';


export default class OrbIt extends React.Component {


  render() {
    return (
      <View>
        <OrbIndexContainer />
        <Pano source={asset('chess-world.jpg')}/>
      </View>
    );
  }
}
