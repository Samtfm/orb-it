import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, Sphere } from 'react-vr';

const indexStyle = {
  position: 'absolute',
  transform: [{translate: [-2.5, 0, -5]}],
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: 5,
  // alignItems: 'stretch',
};

class OrbIndex extends Component {
  render() {
    return (
      <View style={indexStyle}>
        <Sphere
          radius={0.5}
          widthSegments={20}
          heightSegments={12}
        />
        <Sphere
          radius={0.5}
          widthSegments={20}
          heightSegments={12}
        />
        <Sphere
          radius={0.5}
          widthSegments={20}
          heightSegments={12}
        />
      </View>
    )
  }
}

export default OrbIndex;
