import React, { Component } from 'react';
import { Animated, asset, Pano, Text, View, Sphere } from 'react-vr';
import { Easing } from 'react-native';

class OrbThumb extends Component {
  constructor(props){
    super(props);
    this.state = {
      distance: 5,
      spin: new Animated.Value(1),
    };
  }

  componentDidMount(){
    this.runAnimation();
  }

  runAnimation() {
    this.state.spin.setValue(0);
    Animated.timing(
      this.state.spin,
      {
        toValue: 360,
        duration: 100000,
        delay: 0,
        easing: Easing.linear
      }
    ).start(() => this.runAnimation());
  }

  render() {
    const tether = {
      position: 'absolute',
      transform: [
        {rotateY: this.props.rotationY + 90 },
        {translate: [this.state.distance, 0, 0]},
        {rotateY: this.state.spin}
      ],
    };

    return (
      <Animated.View style={tether}>
        <Sphere
          radius={1}
          widthSegments={20}
          heightSegments={24}
          texture={this.props.orb.content.thumbUrl ? this.props.orb.content.thumbUrl : asset('backyard.jpg')}
        />
    </Animated.View>
    );
  }
}

export default OrbThumb;
