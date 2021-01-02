import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';


const supportedURL = "https://google.com";
const emailSupport = 'mailto:kim.trainee@gmail.com?subject=Kim Application Support&body=userId: 123456'
const telSupport = 'tel:0938475625'
const smsSupport = 'sms:+123456789?body=My Application support'
export default class Menu extends Component {
    render() {
        return (
     <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity >
        <Text>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onpenGG}>
        <Text>Open GG</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openEmail}>
        <Text>Open Email</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openTel}>
        <Text>Open tel</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openSms}>
        <Text>Open sms</Text>
      </TouchableOpacity>
    </View>
        )
    }
}


const onpenGG = () => {
  Linking.openURL(supportedURL)
}
const openEmail = () => {
  Linking.openURL(emailSupport)
}
const openTel = () => {
  Linking.openURL(telSupport)
}
const openSms = () => {
  Linking.openURL(smsSupport)
}
