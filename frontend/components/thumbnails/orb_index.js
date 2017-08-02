import React, { Component } from 'react';
import { asset, Pano, Text, View } from 'react-vr';
import OrbThumb from './orb_thumb';

const indexStyle = {
  position: 'absolute',
  // transform: [{translate: [-2.5, 0, 0]}],
  // flexDirection: 'row',
  // justifyContent: 'space-between',
  // width: 10,
  // alignItems: 'stretch',
};

class OrbIndex extends Component {
  render() {
    return (
      <View style={indexStyle}>
        <Pano source={asset('chess-world.jpg')}/>
          <OrbThumb distance='4.5' rotationY={-30}/>
          <OrbThumb distance='4.5' rotationY={0}/>
          <OrbThumb distance='4.5' rotationY={30}/>
        <OrbThumb distance='4.5' rotationY={60}/>
        <OrbThumb distance='4.5' rotationY={90}/>
      </View>
    )
  }
}

export default OrbIndex;
