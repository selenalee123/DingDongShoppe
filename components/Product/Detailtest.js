import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import Images from '../../constants/Images'
import data from "../../assets/data/data"
import { Item } from 'native-base';
// import ProductAnimation from 'ProductAnimation';

class Detailtest extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  render() {
    const { item } = this.props;
    // console.log("item:", this)
    return (

      < View >
        <Text> Kim Kim </Text>


        <Text>{item.price}</Text>
        <Image source={Images.Shoe1}></Image>

      </View >
    );
  }
}

export default Detailtest;
