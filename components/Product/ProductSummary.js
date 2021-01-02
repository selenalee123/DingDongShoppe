import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import Images from '../../constants/Images'

const width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
import { Actions } from 'react-native-router-flux';

class ProductSumary extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>




                <TouchableOpacity style={styles.Containers} onPress={() => Actions.ProductDetail()}>
                    <View style={{ flex: 2 }}>
                        <Image source={this.props.ImageUri}
                            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}

                        />
                    </View>
                </TouchableOpacity>
                <View style={{ marginBottom: 10 }} >
                    <Text style={styles.ProductName}>{this.props.name}</Text>
                    <Text style={styles.ProductPrice}>{this.props.price}</Text>

                </View>

            </View>
        );
    }
}

export default ProductSumary;


const styles = StyleSheet.create({
    Containers: {
        borderRadius: 10,
        height: width / 2 - 50,
        width: width / 2 - 30,
        marginRight: 10,
        borderWidth: 0.5,
        borderColor: "grey"

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

    },    gender: {

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
})