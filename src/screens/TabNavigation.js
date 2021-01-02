import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import { NavigationContainer } from '@react-navigation/native';
import Pro from "./Pro";
import Profile from "./Profilescreen";
import Profilescreen from './Profilescreen';
import Cartbig from '../../components/Cart/CartView';

import Articles from './Articles';
import SideMenu from './SideMenu'
import Home from './Home'
import Support from './Support'
import CartView from '../../components/Cart/CartView';





const ITEMS = [
  {
    icName: 'ios-home',
    icNameActive: 'ios-home',
    title: 'Home',
  },
  {
    icName: 'ios-person',
    icNameActive: 'ios-person',
    title: 'Posts'
  },
  {
    icName: 'ios-cart',
    icNameActive: 'ios-cart',
    title: "Cart"
  },
  {
    icName: 'ios-menu',
    icNameActive: 'ios-menu',
    title: 'Menu'
  },
]

const supportedURL = "https://google.com";
const emailSupport = 'mailto:kim.trainee@gmail.com?subject=Kim Application Support&body=userId: 123456'
const telSupport = 'tel:0938475625'
const smsSupport = 'sms:+123456789?body=My Application support'

class TabNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
  }

  componentDidMount() {

  }

  onItemPress = (index) => {
    this.setState({tabIndex: index})
  }

  renderItems = () => {
    return ITEMS.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => this.onItemPress(index)} //() => this.onItemPress(index)
        >
          <Ionicons name={this.state.tabIndex === index ? item.icNameActive : item.icName} size={24} color={this.state.tabIndex === index ? 'blue' : 'black'}/>
          <Text style={{color: this.state.tabIndex === index ? 'blue' : 'black'}}>{item.title}</Text>
        </TouchableOpacity>
      )
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1,backgroundColor:"white",borderColor:"grey"}}>
          {this.state.tabIndex === 0 && <Home />}
          {this.state.tabIndex === 1 && <Profilescreen />}
          {this.state.tabIndex === 2 && <CartView/>}
          {this.state.tabIndex === 3 && <Support/>}
        </View>
        <View style={{height: 60,borderColor:"black", flexDirection: 'row',backgroundColor:"white"}}>
          {this.renderItems()}
        </View>
      </View>
    );
  }
}

export default TabNavigation;

const HomeScreen = () => {
  const gotoProScreen = () => {
    Actions.push('Pro')
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

  return (
    <View style={{flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={gotoProScreen}>
        <Text>Go to List Student screen</Text>
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

const PostsScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <Text>Posts Screen</Text>
    </View>
  )
}

const CartScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red',marginBottom:1}}>
      <Text>Carts Screen</Text>
    </View>
  )
}



