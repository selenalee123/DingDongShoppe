
import React from 'react';
import { View, StyleSheet, Text, Header, TouchableOpacity } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Pro from "./src/screens/Pro";

import Profilescreen from "./src/screens/Profilescreen";
import Articles from "./src/screens/Articles";
import Register from "./src/screens/Register";

import { Actions } from 'react-native-router-flux';
import TabNavigation from "./src/screens/TabNavigation";
import { Router, Stack, Scene, Drawer } from 'react-native-router-flux';
import SideMenu from './src/screens/SideMenu';
import SideBar from './common/SideBar';
import HeaderHome from './common/HeaderHome';
// import ShoppingCartIcon from './common/ShoppingCartIcon';

import Camera from './src/screens/Camera';
import ImagePicker from './src/screens/ImagePicker';
import DatePicker from './src/screens/DatePicker';
import PeopleSearch from './src/screens/PeopleSearch';
import BookSearch from './src/screens/BookSearch';
import ColorScreen from './src/screens/ColorScreen';
import Home from './src/screens/Home';
import Login from './src/Authorization/Login';
import emaillogin from './src/Authorization/Authtestfirebase/emaillogin';
import GoogleLogin from './src/Authorization/Authtestfirebase/GoogleLogin';
import FacebookLogin from './src/Authorization/Authtestfirebase/FacebookLogin';
import InputItem from './src/Authorization/InputItem';
import ProductCategory from './components/Product/ProductCategory';
import ProductSummary from './components/Product/ProductSummary';
import ProductAnimation from './components/Product/ProductAnimation';
import ProductDescription from './components/Product/ProductDescription';
import ProductDetail from './components/Product/ProductDetail';
import Suggestion from './components/Product/SportsandOutDoors/Suggestion';
import BookList from './components/Product/Books/BookList';
import Cartsmall from './components/OrderHistory/OrderHistory';
import CartView from './components/Cart/CartView';
import Detailtest from './components/Product/Detailtest';
import test from './components/Product/test';




const App: () => React$Node = () => {
  return (
    <Router>
      <Stack key="root">
        <Drawer
          key="drawer"
          contentComponent={SideBar}
          drawerWidth={300}
          drawerPosition='right'
        >
          <Scene key="Camera" component={Camera} hideNavBar />
          <Scene key="DatePicker" component={DatePicker} hideNavBar />
          <Scene key="ImagePicker" component={ImagePicker} hideNavBar />
          <Scene key="DatePicker" component={DatePicker} hideNavBar  />
          <Scene key="Articles" component={Articles} hideNavBar />
          <Scene key="BookSearch" component={BookSearch} hideNavBar />
          <Scene key="TabNavigation" component={TabNavigation} hideNavBar  />
          <Scene key="Home" component={Home} hideNavBar   />
          <Scene key="Profilescreen" component={Profilescreen} hideNavBar   />
          <Scene key="Pro" component={Pro} hideNavBar   />
          <Scene key="PeopleSearch" component={PeopleSearch} hideNavBar />
          <Scene key="ColorScreen" component={ColorScreen} hideNavBar  />
          <Scene key="SideBar" component={SideBar} hideNavBar  />
          <Scene key="ProductCategory" component={ProductCategory} hideNavBar   />
          <Scene key="Login" component={Login} hideNavBar    />
          <Scene key="emaillogin" component={emaillogin} hideNavBar />
          <Scene key="GoogleLogin" component={GoogleLogin} hideNavBar />
          <Scene key="FacebookLogin" component={FacebookLogin} hideNavBar  />
          <Scene key="InputItem" component={InputItem} hideNavBar  />
          <Scene key="ProductSummary" component={ProductSummary} hideNavBar   />
          <Scene key="BookList" component={BookList} hideNavBar  />
          <Scene key="HeaderHome" component={HeaderHome} hideNavBar   />
          <Scene key="Cartsmall" component={Cartsmall} hideNavBar   />


        </Drawer>
        <Scene key="ProductAnimation" component={ProductAnimation} hideNavBar initial  />
        <Scene key="Detailtest" component={Detailtest} hideNavBar  />
        <Scene key="CartView" component={CartView} hideNavBar  />
        <Scene key="ProductDetail" component={ProductDetail} hideNavBar  />
        <Scene key="Suggestion" component={Suggestion} hideNavBar />
        <Scene key="test" component={test} hideNavBar   />
        {/* <Scene key="ShoppingCartIcon" component={ShoppingCartIcon} hideNavBar /> */}


      </Stack>

    </Router>
  );
};
export default App;


