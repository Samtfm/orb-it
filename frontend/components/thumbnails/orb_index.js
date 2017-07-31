import React, { Component } from 'react';
import { Animated, asset, Pano, Text, View, Sphere } from 'react-vr';
import { Easing } from 'react-native';

const indexStyle = {
  position: 'absolute',
  // transform: [{translate: [-2.5, 0, 0]}],
  // flexDirection: 'row',
  // justifyContent: 'space-between',
  // width: 10,
  // alignItems: 'stretch',
};


class OrbThumb extends Component {
  constructor(props){
    super(props);
    this.state = {
      distance: props.distance,
      rotationY: props.rotationY,
      spin: new Animated.Value(1),
    };
    // setInterval(()=>{
    //   this.setState({spin: this.state.spin+.2})
    // },50)
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
  // componentWillReceiveProps(nextProps){
  //   this.setState({
  //     distance: nextProps.distance,
  //     rotationY: nextProps.rotationY
  //   });
  // }
  render(){
    const tether = {
      position: 'absolute',
      transform: [
        {rotateY: this.state.rotationY + 90 },
        {translate: [this.state.distance, 0, 0]},
        {rotateY: this.state.spin}
      ],
    };
    // <Animated.Text style={{
    //     transform: [
    //       {translate: [0, 0, -2]},
    //       {rotateY: this.state.spin}
    //   ]
    //   }}>
    //   HEY THERE
    // </Animated.Text>
    return (
      <Animated.View style={tether}>
        <Sphere
          radius={1}
          widthSegments={20}
          heightSegments={12}
          texture={"/static_assets/backyard.jpg"}
        />
    </Animated.View>
    );
  }
}

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
