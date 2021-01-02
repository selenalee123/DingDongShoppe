import React, { Component } from 'react';
import { View, Text, Image,Dimensions } from 'react-native';
import Images from '../../constants/Images'

const width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class Rectangle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ backgroundColor: "Pink" }}>

            <View style={{ borderRadius: 10, height: width/2 - 150, width: width/2-30 , marginRight: 10, borderWidth: 0.5, borderColor: "#ddddd" }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.ImageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: "cover" }} />
                </View>
                </View>
            <View style={{marginBottom: 10}} >
                <Text>{this.props.name}</Text>
            </View>

            </View>
        );
    }
}

export default Rectangle;
