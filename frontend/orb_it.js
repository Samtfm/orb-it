import React from 'react';
import {
  Pano,
  View,
  asset
} from 'react-vr';
import { Route, Redirect } from 'react-router';
import OrbIndexContainer from './components/index/orb_index_container';

import Navigation from './components/navigation/navigation';


export default class OrbIt extends React.Component {


  render() {
    return (
      <View>
        <Route path='/' exact={true} render={() => (
          <Redirect to={`/fish/{6}`} />
        )} />
        <Route path='/orbs' component={OrbIndexContainer} />

        <Navigation/>
        <Pano source={asset('chess-world.jpg')}/>
      </View>
    );
  }
}
