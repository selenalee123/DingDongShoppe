import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Icon } from 'react-native';
import { Header } from 'react-native-elements';
import Images from "../constants/Images"
import { Actions } from 'react-native-router-flux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    containerStyle={styles.topHeader}
                    leftComponent={
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Image source={Images.Back} />
                        </TouchableOpacity>
                    }
                    rightComponent={
                        <TouchableOpacity   onPress={this.props.onCartPress}>
                     <Image source={Images.Cart} />
                    </TouchableOpacity>
                    }
                />
                {/* <Image source={Images.Shoe1} style={styles.image} /> */}

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      marginTop:30

    },
    topHeader: {
        width: width-30,
        height:50,
        marginTop:5,
        marginBottom: 5,
       marginVertical:50,
       backgroundColor:"white"

    },
    image: {
        width: width - 60,
        height: width - 250,

    },

});

