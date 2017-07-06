import React from 'react';
import axios from 'axios';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class OrbIt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'syrup',
      bg: 'red'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage() {
    //when we push to production we'll make the axios to '/api/hello' etc
    axios.get('http://localhost/3001/api/hello')
      .then(res => {
        this.setState({message: res.data.message})
      });
  }

  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
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
          onEnter={() => this.setState({bg: 'blue'})}
          onExit={() => this.setState({bg: 'red'})}>
          {this.state.message}
        </Text>
        <VrButton
          onClick={() => this.changeMessage()}>
          <Text
            style={{
              backgroundColor: 'grey',
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
    );
  }
};

AppRegistry.registerComponent('OrbIt', () => OrbIt);
