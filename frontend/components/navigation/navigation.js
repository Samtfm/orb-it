import React, { Component } from 'react';
import { asset, Text, View, VrButton, VrHeadModel, StyleSheet} from 'react-vr';
import NavButton from './nav_button';
// const NavButton = (props) => (<VrButton>{props.children}</VrButton>);
const styles = StyleSheet.create({
  prev: {
    position: 'relative',
    fontSize: 0.8,
    fontWeight: '400',
    layoutOrigin: [0.5, 2],
    paddingLeft: 0.2,
    paddingRight: 0.2,
    textAlign: 'center',
  },
  next: {
    position: 'relative',
    fontSize: 0.8,
    fontWeight: '400',
    layoutOrigin: [0.5, 0],
    paddingLeft: 0.2,
    paddingRight: 0.2,
    textAlign: 'center',
  }
});

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'previous page',
      bg: 'rgba(0,255,0,0.5)',
      fov: 90,
      rotation: 0,
      headMatrix: VrHeadModel.viewMatrix,
    };
    this.changeMessage = this.changeMessage.bind(this);

    setInterval(() => {
      const lookRotation = VrHeadModel.yawPitchRoll()[1];
      const currentRotation = this.state.rotation;
      const halfFOV = this.state.fov * 0.5;
      if (lookRotation - currentRotation > halfFOV) {
        this.setState({
          rotation: lookRotation - halfFOV
        });
      } else if (lookRotation - currentRotation < - halfFOV) {
        this.setState({
          rotation: lookRotation + halfFOV
        });
      }
    }, 25);
  }

  changeMessage() {
    //when we push to production we'll make the axios to '/api/hello' etc
    // axios.get('http://localhost/3001/api/hello')
    //   .then(res => {
    //     this.setState({message: res.data.message})
    //   });
  }
  render() {
    const tethered = {
      transform: [
        {rotateY: this.state.rotation},
        {translate: [0, 0, -4]}],
    };
    return (
      <View>
        <Text
          style={[tethered, styles.prev, {backgroundColor: this.state.bg}]}
          onEnter={() => this.setState({bg: 'rgba(0,0,255,0.5)'})}
          onExit={() => this.setState({bg: 'rgba(0,255,0,0.5)'})}>
          {this.state.message}
        </Text>
        <VrButton
          onClick={() => this.changeMessage()}>
          <Text
            style={[tethered, styles.next, {backgroundColor: 'rgba(80,10,10,.3)'}]}>
            Change Message
          </Text>
        </VrButton>
        <NavButton
          to='/orbs'>
          <Text
            style={[tethered, styles.next, {backgroundColor: 'rgba(80,10,10,.3)'}]}>
            go to '/orbs'
          </Text>
        </NavButton>
        <NavButton
          to='/'>
          <Text
            style={[tethered, styles.next, {backgroundColor: 'rgba(80,10,10,.3)'}]}>
            go to '/'
          </Text>
        </NavButton>
      </View>
    );
  }
}
