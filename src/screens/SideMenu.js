import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer, NavigationContext } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Action, Actions } from "react-native-router-flux"
//Stacks
const ITEMS = [
    {
        icName: 'ios-home',
        icNameActive: 'ios-home',
        title: 'Home',
    },
    {
        icName: 'ios-person',
        icNameActive: 'ios-person',
        title: 'Examples'
    },

    {
        icName: 'ios-person',
        icNameActive: 'ios-person',
        title: 'Components'
    },
    {
        icName: 'ios-cart',
        icNameActive: 'ios-cart',
        title: "Articles"
    },
    {
        icName: 'ios-person',
        icNameActive: 'ios-menu',
        title: 'Profile'
    },
    {
        icName: 'ios-menu',
        icNameActive: 'ios-menu',
        title: 'Account'
    },
    {
        icName: 'ios-menu',
        icNameActive: 'ios-menu',
        title: 'Getting started'
    },
    {
        icName: 'ios-menu',
        icNameActive: 'ios-menu',
        title: 'Log out'
    },
    {
        icName: 'ios-menu',
        icNameActive: 'ios-menu',
        title: 'Profile'
    },


]

class SideMenu extends Component {
    render() {
        return (

            <View style={{ backgroundColor: '#FC7307', }}>

                <TouchableOpacity style={styles.container}>
                    <Ionicons name="ios-home" style={styles.icon}></Ionicons>
                    <Text style={styles.text} > Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.container}
                    onPress={() => Actions.Profilescreen()}>
                    <Ionicons name="ios-image" style={styles.icon}></Ionicons>
                    <Text style={styles.text}> Examples </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Ionicons name="ios-albums" style={styles.icon} ></Ionicons>
                    <Text style={styles.text}> Components </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.container}
                    onPress={() => Actions.Articles()}>
                    <Ionicons name="ios-cut" style={styles.icon}></Ionicons>
                    <Text style={styles.text}> Articles</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.container}
                    onPress={() => Actions.Profilescreen()}>
                    <Ionicons name="ios-person" style={styles.icon}></Ionicons>
                    <Text style={styles.text}> Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Ionicons name="ios-images" style={styles.icon}></Ionicons>
                    <Text style={styles.text}>Account</Text>
                </TouchableOpacity>
                <Text>----------------------------------------</Text>
                <Text style={styles.text}>Documentation</Text>
                <TouchableOpacity style={styles.container}>
                    <Ionicons name="ios-images" style={styles.icon}></Ionicons>
                    <Text style={styles.text}>Getting Started</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Ionicons name="ios-backspace" style={styles.icon}></Ionicons>
                    <Text style={styles.text}>Log Out</Text>
                </TouchableOpacity>
            </View>

        )
    }
}
export default SideMenu;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 10,


    },

    text: {
        color: "white",
        fontSize: 24
    },
    icon: {
        color: "white",
        fontSize: 24
    },
})


