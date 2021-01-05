import React, { Component } from 'react'
import { Image, View, StyleSheet, Dimensions, ScrollView, Text, TouchableOpacity } from 'react-native';
import ProductDescription from './ProductDescription'
import Header from "../../common/Header"
import Dot from './SportsandOutDoors/Dot'
import Size from './SportsandOutDoors/Size'
import { Actions } from 'react-native-router-flux';
import Advertisementsmall from "../Advertisement/Advertisementsmall"
import Suggestion from "./SportsandOutDoors/Suggestion"
import TabNavigation from '../../src/screens/TabNavigation';
import Images from '../../constants/Images'
import data from "../../assets/data/data"


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


     onClickItem(item) {
        console.log(item)
        Actions.CartView({item:item})
    }
    render() {

        const { item } = this.props;
        console.log("item:", item);
        return (
            <View style={styles.headercontainer}>


                <ScrollView  showsVerticalScrollIndicator={false}>
                <View >
                    <Header />
                </View>
                <View style={styles.advertising}>
                    <Advertisementsmall />
                </View>
                <View>
                      <ScrollView >
                    <View style={styles.ScrollView}>
                        <Image source={item.imageUri} style={styles.image} />
                        <View>
                            <Text style={[styles.title, { fontSize: 24 }]}>{item.price}</Text>
                        </View>
                        <View opacity={0.6}>
                            <Text style={[styles.title, { fontSize: 34 }]}>{item.type}</Text>
                        </View>
                        <View style={styles.dotContainer}>
                            <Dot color="#2379F4"></Dot>
                            <Dot color="#FB6E53"></Dot>
                            <Dot color="pink"></Dot>
                            <Dot color="#000"></Dot>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', height: '8%', }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <Size bgColor="#17181A" color="#FFF">36</Size>
                                <Size bgColor="#17181A" color="#FFF">37</Size>
                                <Size bgColor="#17181A" color="#FFF">38</Size>
                                <Size bgColor="#17181A" color="#FFF">39</Size>

                            </ScrollView>
                        </View>
                        <ProductDescription />
                        {/* <AddButton /> */}
                        <View style={styles.line} />
                        <View style={styles.addtocartview}>

                        <TouchableOpacity style={styles.addcontainer}>
                            <Text style={styles.addtocart}
                             onPress={() => this.onClickItem(item)
                            }>ADD TO CARD</Text>
                        </TouchableOpacity>
                        </View>
                        </View>
                    </ScrollView>
                </View>
                <Suggestion/>

                </ScrollView>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    headercontainer: {
        marginHorizontal:15,

    },
    advertising: {
        width: width,
        height: 100,

    },
    image: {
        width: width - 60,
        height: width / 2 - 50
    },
    container: {

        width: '100%',


    },
    title: {
        fontFamily: 'Anton-Regular',
        color: "grey"
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '5%'
    },
    line: {
        marginVertical: '2%',
        borderBottomColor: '#000',
        borderBottomWidth: 1,


    },
    addcontainer: {
        width: '90%',
        height: 50,
        backgroundColor: '#17181A',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10
    },

    addtocartview:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    addtocart: {
        color: '#FFF',
        fontFamily: 'FiraSans-Bold',
        fontSize: 16,


    },


});


