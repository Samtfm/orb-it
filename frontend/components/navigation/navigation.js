import React, { Component } from 'react';
import { AppRegistry, asset, Pano, Text, View, Sphere, VrButton} from 'react-vr';

export default class OrbIt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'syrup',
      bg: 'red'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage() {
    //when we push to production we'll make the axios to '/api/hello' etc
    // axios.get('http://localhost/3001/api/hello')
    //   .then(res => {
    //     this.setState({message: res.data.message})
    //   });
  }
  render() {
    return (
      <View>
        <Text
          style={{
            backgroundColor: this.state.bg,
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}
          onEnter={() => this.setState({bg: 'rgba(0,0,255,0.5)'})}
          onExit={() => this.setState({bg: 'rgba(0,255,0,0.5)'})}>
          {this.state.message}
        </Text>
        <VrButton
          onClick={() => this.changeMessage()}>
          <Text
            style={{
              backgroundColor: 'rgba(0,0,0,.2)',
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, -3]}],
            }}>
            Change Message
          </Text>
        </VrButton>
      </View>
    )
  }
}
