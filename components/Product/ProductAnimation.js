import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, Icon } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import Header from "../../common/Header"
import Images from '../../constants/Images'
import data from "../../assets/data/data"
import Suggestion from './SportsandOutDoors/Suggestion';
import TabNavigation from '../../src/screens/TabNavigation';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


class ProductAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedItem: [],
            item: [],
            // selectedItem: props.selectedItem,
        }
    }
    componentDidMount() {
        //fetch data
        this.setState({ data: data })
    }



    onClickItem(item) {
        console.log(item)
        Actions.ProductDetail({ item: item })
    }

    // goToPayment = () => {
    //     Actions.CartView1({ selectedItem: this.state.selectedItem })
    // }
    onCartPress = () => {
        Actions.CartView1({ selectedItem: this.state.selectedItem })
    }


    onItemPress = (item) => {
        const product = this.state.data.filter(data_item => data_item.id === item.id)
        console.log("product", product)
        if (product.length > 0) {
            if (this.state.selectedItem.filter(data_item => data_item.id === item.id).length === 0) {
                this.setState({ selectedItem: [...this.state.selectedItem, product[0]] }, () => {

                    console.log("product selected", this.state.selectedItem)
                })

            }
        }

    }


    renderItem = ({ item, index }) => {

        return (
            <TouchableOpacity style={{ marginTop: 5 }} onPress={() => this.onClickItem(item)}>
                <View style={styles.imageContainer}>
                    <Image style={styles.cardImage} source={item.imageUri} />
                </View>
                <Text style={styles.ProductName}>{item.type}</Text>
                <Text style={styles.ProductPrice}>{item.price}</Text>
                <TouchableOpacity
                    onPress={() => this.onItemPress(item)}
                    style={{ paddingVertical: 5, backgroundColor: 'grey', width: 100 }}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>Add to cart</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.bigcontainter}>
                <Header onCartPress={this.onCartPress} />
                <View style={styles.ShoeBannerview}>
                    <Image style={styles.ShoeBanner} source={Images.ShoeBanner}></Image>
                </View>
                <View style={{ justifyContent: "center", alignItem: "center", flexDirection: "row", marginLeft: 20, marginRight: 20 }}>
                    <Text style={[styles.gender, { color: "black" }]}>WOMEN</Text>
                    <Text style={[styles.gender, { color: "grey" }]}>     SHOES</Text>
                    <Image source={Images.Filter} style={styles.icon}></Image>



                </View>
                <FlatList
                    contentContainerStyle={styles.listContainer}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    // keyExtractor={(item,index) => item.id}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={false}
                    numColumns={2}
                />
            </View>

        );
    }
}

export default ProductAnimation;


const styles = StyleSheet.create({
    bigcontainter: {
        marginLeft: 20,
        marginRight: 20,
        justifyContent: "center"
    },
    cardImage: {
        borderRadius: 10,
        height: width / 2 - 50,
        width: width / 2 - 30,
        marginRight: 10,
        borderWidth: 0.5,
        borderColor: "grey"
    },
    listContainer: {
        alignItems: 'center'
    },

    ProductName: {
        color: "black",
        fontSize: 18,
        fontFamily: 'Anton-Regular',
    },
    ProductPrice: {
        color: "grey",
        fontSize: 14,
        fontFamily: 'FiraSans-Bold',

    },

    gender: {

        color: "black",
        fontSize: 26,
        fontFamily: 'Anton-Regular',

    },
    icon: {
        height: 30,
        width: 30,
        marginLeft: 150,
        alignSelf: 'center'
    },
    ShoeBannerview: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: 'center',

    },
    ShoeBanner: {
        borderRadius: 10

    }
});
