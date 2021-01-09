import React, { Component } from 'react';
import { Pressable, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
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


  renderItem = ({ item, index }) => {
    return (
        <TouchableOpacity style={{marginTop: 5 }} onPress={() => this.onClickItem(item)}>
            <View style={styles.imageContainer}>
                <Image style={styles.cardImage} source={item.imageUri} />
            </View>
            <Text style={styles.ProductName}>{item.type}</Text>
            <Text style={styles.ProductPrice}>{item.price}</Text>

        </TouchableOpacity>

    )
}

  render() {
    const { item } = this.props;

    return (
      < View >
        <Text> Kim Kim </Text>

        <Text>{item.price}</Text>
        <Image source={item.imageUri}></Image>

        <FlatList
                    contentContainerStyle={styles.listContainer}
                    data={item}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal={true}

                />
      </View>

    );
  }





}



export default Detailtest;

const styles = StyleSheet.create({
});

