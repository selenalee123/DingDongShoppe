import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

import data from "../../../assets/data/data"
import Images from '../../../constants/Images'


export default class Suggestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        //fetch data
        this.setState({ data: data })
    }

    onClickItem(item) {
        console.log(item)
        Actions.ProductDetail({item:item})
    }

    renderItem = ({ item, index }) => {

        return (
            <TouchableOpacity style={styles.flatlistContainer} onPress={() => this.onClickItem(item)}>
                <View style={styles.imageContainer}>
                    <Image style={styles.cardImage} source={item.imageUri}/>
                </View>
                <Text style={styles.ProductName}>{item.type}</Text>
                <Text style={styles.ProductPrice}>{item.price}</Text>
            </TouchableOpacity>
        )
    }

    render() {

        return (
            <View>
                <Text style={styles.Suggestion} >You might also like</Text>

                <FlatList
                    contentContainerStyle={styles.listContainer}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal={true}

                />
            </View>






        )
    }
}
const styles = StyleSheet.create({

    container: {
        marginBottom: '10%'
    },
    shoesContainer: {
        marginHorizontal: 10
    },
    shoesImg: {
        width: 175,
        height: 175
    },
    shoesText: {
        fontFamily: 'FiraSans-Bold',
        fontSize: 16

    },
    title: {
        fontSize: 24,
        fontFamily: 'Anton-Regular',
        marginVertical: '2%'
    },


    Suggestion:{
        fontSize: 16,
        fontFamily: 'FiraSans-Bold',
        marginVertical: '2%'
    },

    flatlistContainer:{
        marginHorizontal:5
    },

    ProductName: {
        color: "black",
        fontSize: 18,
        fontFamily: 'FiraSans-Bold',
    },
    ProductPrice: {
        color: "grey",
        fontSize: 14,
        fontFamily: 'FiraSans-Bold'
    }



});
