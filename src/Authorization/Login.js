import React from 'react'
import { Button, StyleSheet, View, Text, Register, ImageBackground, Dimensions, StatusBar, TouchableOpacity, Keyboard } from "react-native";
import { Header, SocialIcon } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import UserModel from './UserModel';
import { GoogleSignin, GoogleSigninButton, statusCodes, } from '@react-native-community/google-signin';
GoogleSignin.configure();
import auth from '@react-native-firebase/auth';
import { LoginManager, LoginButton, AccessToken } from 'react-native-fbsdk';



export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }


  onChangeText = (name, text) => {
    console.log('kkkkk Login', name, text)
    this.setState({ [name]: text })

  }

  onLogin = () => {
    //const user = await UserModel.signIn(this.state.username,this.state.password)
    console.log("kkk", this.state)
    //if (user.docs().length >1){
    //console.log("kk login sucess", user.docs()[0])
    //}
  }

  onSignUp = async () => {
    const user = {
      username: this.state.username,
      password: this.state.password

    }
    const result = await UserModel.signUp(user)
    console.log("result is ", result)


  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 10 }}>
        <Header
          leftComponent={{ icon: 'menu', color: 'black' }}
          centerComponent={{ text: 'Create the account', style: { color: 'black' } }}
          rightComponent={{ icon: 'home', color: 'black' }}

        />
        <View style={{ flex: 0.1 }}></View>
        <Animatable.View animation="fadeInUpBig" View style={styles.footer}>
          <View style={{ justifyContent: 'center', alignItems: "center" }}>
            <Text style={{ fontSize: 25, color: "black" }}>Login Form</Text>
          </View>

          <View style={{ marginRight: 15, marginLeft: 15 }}>
            <View style={{ backgroundColor: "white", paddingTop: 30, alignItems: "center" }}><Text>Or be classic</Text></View>
            <View style={{ borderRadius: 20, marginTop: 10, borderColor: 'grey', borderWidth: 1, flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name="user-o"
                color="grey"
                size={20}
              />
              <View></View>
              <TextInput
                name={"username"}
                placeholder="UserName"
                style={{ borderRadius: 20, height: 40 }}
                onChangeText={(text) => this.onChangeText('username', text)}
                value={this.state.username}

              />
            </View>
            <View style={{ borderRadius: 20, borderColor: 'gray', borderWidth: 1, flexDirection: "row", alignItems: "center", marginTop: 10 }}>
              <Feather
                name="lock"
                color="grey"
                size={20}
              />
              <TextInput
                name={"password"}
                placeholder="Your Password"
                secureTextEntry={true}
                style={{ height: 40, borderColor: 'gray' }}
                onChangeText={(text) => this.onChangeText('password', text)}
                value={this.state.password}

              />
              <TouchableOpacity>

                <Feather
                  name="eye-off"
                  color="grey"
                  size={20}

                />


              </TouchableOpacity>
            </View>
          </View>
          <View style={{ justifyContent: "center", flexDirection: "row", paddingTop: 50, alignItems: "center" }}>
            <FontAwesome
              name="check-square"
              color="#05375a"
              size={20}
            />
            <Text> I agree to Terms and conditions</Text>
          </View>
          <TouchableOpacity style={{
            width: 300, height: 40,
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50, marginRight: 50, marginLeft: 50,
            marginTop: 30

          }}
            onPress={this.onSignUp}>
            <Text style={styles.text2}>Log in</Text>

          </TouchableOpacity>



        </Animatable.View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <GoogleSigninButton
            style={{ width: 250, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.signGGIn().then(()=>
            console.log("Sign in with google"))}
            // disabled={this.state.isSigninInProgress}
             />

          {/* login with facebook  */}

          <View>
            <LoginButton
              onLoginFinished={
                (error, result) => {
                  if (error) {
                    console.log("login has error: " + result.error);
                  } else if (result.isCancelled) {
                    console.log("login is cancelled.");
                  } else {
                    AccessToken.getCurrentAccessToken().then(
                      (data) => {
                        console.log(data.accessToken.toString())
                      }
                    )
                  }
                }
              }
              onLogoutFinished={() => console.log("logout.")} />
          </View>
        </View>

      </View >
    )
  }
}


const styles = StyleSheet.create({
  text2: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },

  footer: {
    borderRadius: 50,
    backgroundColor: "white",
    flex: 0.7,
    paddingBottom: 20,
    marginLeft: 10,
    marginRight: 10

  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
})