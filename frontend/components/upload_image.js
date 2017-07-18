import React from 'react';
import axios from 'axios';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  NativeModules,
} from 'react-vr';

const style = {
  fontSize: 0.8,
  fontWeight: '400',
  layoutOrigin: [0.5, 0.5],
  paddingLeft: 0.2,
  paddingRight: 0.2,
  textAlign: 'center',
  textAlignVertical: 'center',
  backgroundColor: 'rgba(20,255,255,.3)',
  transform: [{translate: [0, 0, -3]}],
};
export default class UploadImage extends React.Component {


  render() {
    return (
      <View>
        <VrButton onClick={() => NativeModules.LinkingManager.openURL("upload")}>
          <Text
            style={style}
          >Upload Image</Text>
        </VrButton>

      </View>
    );
  }

}
