import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

const indexStyle = {
  display: 'flex',
  flexDirection: 'row',
}

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
