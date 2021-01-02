import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PhotoPiker from "react-native-image-picker"



class ImagePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

openCam =() => {
    PhotoPiker.launchCamera({quality:0.5}, (res)=>{
        console.log("launch cmera")
        this.setState({base64:rest.data})
    })
    
}

openImage =() => {
    PhotoPiker.launchImageLibrary({quality:0.5}, (res)=>{
        console.log("launch Image Library")
        this.setState({base64:rest.data})
    })
    
}

  render() {
    return (
      <View>
          <TouchableOpacity onPress={this.openCam}>
        <Text> ImagePicker </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.openFile}>
        <Text> LibraryPicker </Text>
        </TouchableOpacity>

{this.state.base64 && <Image style={{height:300,width:300}} source={{uri:"data:image/gif;base64,${this.state.base64}"}} />}
      </View>
    );
  }
}

export default ImagePicker;
