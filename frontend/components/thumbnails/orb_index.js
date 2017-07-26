import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, Sphere } from 'react-vr';

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
      rotationY: props.rotationY
    };
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      distance: nextProps.distance,
      rotationY: nextProps.rotationY
    });
  }
  render(){
    const style = {
      position: 'absolute',
      transform: [
        {rotateY: this.state.rotationY + 90 },
        {translate: [this.state.distance, 0, 0]}],
    };
    return (
      <View style={style}>
        <Sphere
          radius={1}
          widthSegments={20}
          heightSegments={12}
        />
      </View>
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
