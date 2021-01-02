import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class Size extends Component {
    render() {
        return (
            <View style={[styles.container, {backgroundColor: this.props.bgColor || "#FFF"}]}>
            <Text style={[styles.text, {color: this.props.color || "#C9C"}]}>{this.props.children}</Text>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginHorizontal: 10,
        borderColor: '#E6E6E6',
        borderWidth: 3
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'FiraSans-Bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});



