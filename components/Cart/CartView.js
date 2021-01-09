import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    Dimensions, StyleSheet, Image, TextInput
} from 'react-native';
import Images from '../../constants/Images'
import { Actions } from 'react-native-router-flux';
import data from "../../assets/data/data"
import { Item } from 'native-base';
// import sp1 from '../../.././../media/temp/sp1.jpeg';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = { quantity: 1 };
        Productlist:[]
    }

    //decrease quantity working
    decreaseQuantity = () => {
        if (this.state.quantity <= 1) {
            return;
        } else {
            this.setState({
                quantity: this.state.quantity - 1
            });
        }
    }


    //increase quantity working
increaseQuantitiy = () => {
        this.setState({
            quantity: this.state.quantity - 1 + 2
        });
    }


onClickItem(item) {
    console.log(item)
    Actions.ProductDetail({item:item})
}



    render() {
        const { main, checkoutButton, checkoutTitle, wrapper,
            product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct,
            txtShowDetail, showDetailContainer } = styles;

        const { item } = this.props;

        return (
            <View style={wrapper}>
                <ScrollView style={main}>
                    <View style={product}>
                        <Image source={item.imageUri} style={productImage} />
                        <View style={[mainRight]}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={txtName}>{item.type}</Text>

                                 {/*<TouchableOpacity onPress={() => this.removeProduct(item)}>
                                        <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                                    </TouchableOpacity> */}
                                <TouchableOpacity onPress={() => this.removeProduct(item)} >
                                    <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={txtPrice}>{item.price}</Text>
                            </View>
                            <View style={productController}>
                                {/* <View style={numberOfProduct}> */}
                                {/* <TouchableOpacity>
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                    <Text>{3}</Text>
                                    <TouchableOpacity>
                                        <Text>-</Text>
                                    </TouchableOpacity> */}


                                <TouchableOpacity style={styles.button} onPress={this.decreaseQuantity}>
                                    <Text style={{ fontSize: 20, color: '#474747' }}> - </Text>
                                </TouchableOpacity>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(quantity) => this.setState({ quantity })}
                                    value={`${this.state.quantity}`}
                                    keyboardType="numeric"
                                />
                                <TouchableOpacity style={styles.button} onPress={this.increaseQuantitiy} >
                                    <Text style={{ fontSize: 20, color: '#474747' }}> + </Text>
                                </TouchableOpacity>
                                {/* </View> */}


                                <TouchableOpacity style={showDetailContainer}>
                                    <Text style={txtShowDetail}  onPress={() => this.onClickItem(item)}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>





                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>


                    </View>
                </ScrollView>
                <TouchableOpacity style={checkoutButton}>
                    <Text style={checkoutTitle}>TOTAL {1000}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF',
        marginTop: 10
    },
    checkoutButton: {
        height: 40,
        margin: 10,
        marginTop: 0,
        backgroundColor: 'grey',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center',
        borderRadius: 50,
        borderColor: "grey",
        borderWidth: 0.5,

    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between',

    },
    productController: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginLeft:20
    },
    // numberOfProduct: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     justifyContent: 'space-around'
    // },
    txtName: {
        paddingLeft: 20,
        color: "black",
        fontSize: 18,
        fontFamily: 'Anton-Regular',
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        borderWidth: 1,
        width: 25,
        height: 25,
        borderRadius: 15,
        borderColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginHorizontal: 5,
        fontSize: 16
    }
});

export default CartView;