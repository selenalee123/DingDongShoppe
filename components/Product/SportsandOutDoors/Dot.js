import React, { Component } from 'react'
import {View, StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default class Dot extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
      return (
        <View elevation={0.5} style={[styles.container, {backgroundColor: this.props.color}]}>

        </View>
    );
}
}
const styles = StyleSheet.create({
    container: {
        width: width * 0.045,
        height: width * 0.045,
        borderRadius: width * 0.045 / 2,
        elevation: 5,
        marginHorizontal: '2.5%'
    }
});

