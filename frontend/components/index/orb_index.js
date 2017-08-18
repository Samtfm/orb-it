import React, { Component } from 'react';
import {
  View,
  VrButton,
  Text,
} from 'react-vr';
import OrbThumb from './orb_thumb';

//need to create pagination buttons

const indexStyle = {
  position: 'absolute',
  // transform: [{translate: [-2.5, 0, 0]}],
  // flexDirection: 'row',
  // justifyContent: 'space-between',
  // width: 10,
  // alignItems: 'stretch',
};

const buttonStyle  = {
  transform: [{translate: [-2.5, 2, 0]}],
  backgroundColor: 'red'
}

class OrbIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  componentDidMount() {
    this.props.requestOrbs().then(() => console.log(this.props.orbs));
  }

  render() {
    let end = this.state.page * 6;
    let start = end - 6;
    const pageItems = [];

    if (!!Object.keys(this.props.orbs).length) {
      for (let i = start; i < end; i++) {
        orbId = Object.keys(this.props.orbs)[i]

        pageItems.push(<OrbThumb
          key={orbId}
          rotationY={i * 60}
          orb={this.props.orbs[orbId]} />)
      }
    }

    return (
      <View>
        <Text
          style={buttonStyle}>hello</Text>
        {
          pageItems
        }
      </View>
    )
  }
}

export default OrbIndex;
