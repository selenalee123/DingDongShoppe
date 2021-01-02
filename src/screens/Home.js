import { toJS } from 'mobx'
import React, { Component } from 'react'
import { ScrollView, View, FlatList, StyleSheet, TouchableOpacity, ToastAndroid, AppRegistry, Image, ActivityIndicator } from 'react-native'
import { Header, Item, Input, Icon, Button, Text, Container, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import _ from 'lodash'
import Images from '../../constants/Images'
import { Actions } from 'react-native-router-flux';
import ProductImage from "../../components/Product/ProductImage";
import Rectangle from "../../components/Product/Rectangle";
import ProductSwiper from "../../components/Advertisement/ProductSwiper";
import SearchBar from "../../common/SearchBar";
import SwiperFlatList from 'react-native-swiper-flatlist';
import Articles from './Articles';





const ProductCategory = () => {
    Actions.push('ProductCategory')
}
// const SportandOutDoors = () => {
// Actions.push('SportandOutDoors1')

//  }

const gotoArticlesScreen = () => {
    Actions.push('Articles')
}


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    state = {
        search: '',
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* Search */}
                <SearchBar />
                <ScrollView >
                    <View style={styles.Containers}>
                        <View style={styles.middleheader}>
                            <TouchableOpacity
                                onPress={gotoArticlesScreen}
                                style={styles.middleheaderbutton}>
                                <Icon name="apps" />
                            </TouchableOpacity>

                            <Text>Category</Text>

                        </View>

                        <View style={styles.middleheader}>
                            <TouchableOpacity
                                onPress={ProductCategory}
                                style={styles.middleheaderbutton}>
                                <Icon name="videocam" />
                            </TouchableOpacity>
                            <Text>Ding Dong Live</Text>

                        </View>
                        <View style={styles.middleheader}>
                            <Icon name="people" />

                            <TouchableOpacity
                                onPress={ProductCategory}
                                style={styles.middleheaderbutton}>

                            </TouchableOpacity>
                            <Text>Review live</Text>
                        </View>

                        <View style={styles.middleheader}>
                            <TouchableOpacity
                                onPress={ProductCategory}
                                style={styles.middleheaderbutton}>
                                <Icon name="trending-up" />
                            </TouchableOpacity>
                            <Text>Trending</Text>

                        </View>


                    </View>
                    <View style={{ marginLeft: 20, marginRight: 20,justifyContent:"center" }}>

                        <ProductSwiper />

                        {/* <View style={{
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Image source={Images.ProductCard}
                                style={{
                                    width: 350,
                                    height: 150,
                                }}></Image>
                        </View> */}
                        <View style={{ flex: 1, backgroundColor: '#F5FCFF' }}>

                            <View style={styles.dealoftheday}>
                                <Text>Holiday deals</Text>

                                <Image source={Images.Sofa} style={{
                                }}></Image>

                                <Text> Save big in Furniture</Text>
                                <Text>Ends in </Text>

                                <TouchableOpacity>
                                    <Text>See all details</Text>
                                </TouchableOpacity>


                            </View>



                            <View style={{ backgroundColor: "Pink" }}>



                                <Text onPress={() => Actions.BookList1()}>
                                    Find gift for everyone
                       </Text>



                                <ScrollView

                                    horizontal={true}>
                                    <ProductImage ImageUri={Images.ForHer} name="For Her" />
                                    <ProductImage ImageUri={Images.ForHim} name="For Him" />
                                    <ProductImage ImageUri={Images.ForTeen} name="For Teens" />
                                    <ProductImage ImageUri={Images.ForKid} name="For Kids" />
                                </ScrollView>
                            </View>
                            <View><Text onPress={() => Actions.ProductAnimation()}>Shop Shoes</Text></View>
                            <View style={{ justifyContent: "center", flexDirection: "row", flexWrap: "wrap" }}>
                                <ProductImage ImageUri={Images.Shoe1} name="Sporty" />
                                <ProductImage ImageUri={Images.Shoe2} name="Formal" />
                                <ProductImage ImageUri={Images.Shoe3} name="Handmade" />
                                <ProductImage ImageUri={Images.Shoe4} name="One of the kind" />
                            </View>
                            <View><Text>Shop Best sellers </Text></View>
                            <View style={{ justifyContent: "center", flexDirection: "row", flexWrap: "wrap" }}>
                                <Rectangle ImageUri={Images.Sofa} name="Clothing & Accessories" />
                                <Rectangle ImageUri={Images.Sofa} name="Shoes" />
                                <Rectangle ImageUri={Images.Sofa} name="Beauty" />
                                <Rectangle ImageUri={Images.Sofa} name="Personal care" />
                                <Rectangle ImageUri={Images.Sofa} name="Books" />
                                <Rectangle ImageUri={Images.Sofa} name="Electronics" />
                                <Rectangle ImageUri={Images.Sofa} name="Sports & Outdoors" />
                                <Rectangle ImageUri={Images.Sofa} name="Toys & Games" />

                            </View>


                        </View>
                    </View>
                </ScrollView>
            </View>

        )
    }
}
const styles = StyleSheet.create({

    Containers: {
        backgroundColor: "white",
        flex: 0.2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"


    },

    middleheader: {
        backgroundColor: "#98F5FF",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    middleheaderbutton: {

    },

    dealoftheday: {
        justifyContent: "center",
        alignItems: "center"
    },
    Album: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "black"
    },
    ViewAll: {
        color: "orange",
        fontSize: 20
    },
    imagealbum: {
        width: 150,
        height: 150,
        borderRadius: 10

    }
})