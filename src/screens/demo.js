import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header, InputItem, Button } from '../components';
import UserModel from '../models/UserModel';
import { LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
// import statusCodes along with GoogleSignin
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
GoogleSignin.configure(); // get user email and basic profile info.

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.checkUserLogin()
  }

  // Somewhere in your code
  signInWithGG = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('kkkkk userInfo', userInfo)
    } catch (error) {
      console.log('kkkkk signInWithGG error', error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  onFacebookLogIn = () => {
    this.loginProvider = 'FB'
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log("Login success, get info", result)
          const infoRequest = new GraphRequest('/me', { parameters: 
              { fields: { string: 'email,name,first_name,last_name' } } 
            }, (error, res) => {
              if (!error) {
                console.log('kkkkk onFacebookLogIn', res)
              } else {
                console.log("Get info error", error)
              }
          });
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  }

  checkUserLogin = async () => {
    //Asynstorage get user from local
    //const userLocal = await AsyncStorage.getItem(Constants.USER_PROFILE)
    //if(userLocal) {//user has sign up
      // userStore.loadUserProfile (set user data from local to user store), userStore.fullName, userStore.dob
      // go to main screen
    // } 
  }

  onChangeText = (name, text) => {
    console.log('kkkkk Login', name, text)
    this.setState({[name]: text})
  }

  onLogin = async() => {
    const user = await UserModel.signIn(this.state.username, this.state.password)
    console.log('kkkkk user login', user)
    if (user.docs.length > 0) {
      const data = user.docs[0].data()
      console.log('kkkkk login success', data)
      // Asynstorage save to local
      // AsyncStorage.setItem(Constants.USER_PROFILE, user)
      // userStore.loadUserProfile (set user data from local to user store), userStore.fullName, userStore.dob
      // go to main screen
    }
  }

  onSignUp = async () => {
    //encrypted password before sign up
    const rs = await UserModel.signUp(this.state)
    console.log('kkkk sign up', rs)
    UserModel.updateUser(rs.id, {id: rs.id})
    //Asynstorage save to local
    // AsyncStorage.setItem(Constants.USER_PROFILE, user)
    // userStore.loadUserProfile (set user data from local to user store), userStore.fullName, userStore.dob
    // go to main screen
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <View style={{paddingHorizontal: 16, paddingVertical: 16}}>
          <Text style={{textAlign: 'center'}}>LOGIN FORM</Text>
          <InputItem
            name={'username'}
            containerStyle={{marginTop: 16}}
            numberOfLines={2}
            underlineColorAndroid={'red'}
            placeholder='Username'
            onChangeText={this.onChangeText}
            value={this.state.username}
          />
          <InputItem
            name={'password'}
            containerStyle={{marginTop: 16}}
            numberOfLines={2}
            underlineColorAndroid={'red'}
            placeholder='Password'
            onChangeText={this.onChangeText}
            value={this.state.password}
          />

          <Button
            title={'LOGIN'}
            containerStyle={{marginTop: 16}}
            onPress={this.onLogin}
          />

          <Button
            title={'SIGN UP'}
            containerStyle={{marginTop: 16}}
            onPress={this.onSignUp}
          />

          <Button
            title={'SIGN IN WITH GG'}
            containerStyle={{marginTop: 16}}
            onPress={this.signInWithGG}
          />

          <Button
            title={'SIGN IN WITH FB'}
            containerStyle={{marginTop: 16}}
            onPress={this.onFacebookLogIn}
          />
        </View>
      </View>
    );
  }
}

export default Login;
