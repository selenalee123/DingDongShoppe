import React from 'react'
import { StyleSheet, View, Text, Register, ImageBackground, Dimensions, StatusBar, TouchableOpacity, Keyboard } from "react-native";
import { Header, SocialIcon } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
const background5 = require("../../assets/imgs/bg5.png");





export default class Account extends React.Component {
  constructor(props) {
    super(props); 
  }

  onChangeText = () =>{
    
  }

  
  

  render() {
    return (
      <View style={{ flex: 1, paddingTop:10 }}>
        <Header
          leftComponent={{ icon: 'menu', color: 'black' }}
          centerComponent={{ text: 'Create the account', style: { color: 'black' } }}
          rightComponent={{ icon: 'home', color: 'black' }}

        />
        <View style={{ flex: 0.1 }}></View>
        <Animatable.View animation="fadeInUpBig" View style={styles.footer}>
          <View style={{ justifyContent: 'center', alignItems: "center" }}>
            <Text style={{ fontSize: 25, color: "black" }}>Register</Text>
          </View>
          <View style={{ justifyContent: "center", flexDirection: "row", alignItems: "center" }}>
            <SocialIcon type='twitter' />
            <SocialIcon type='facebook' />
            <SocialIcon type='instagram' />
            <SocialIcon type='linkedin' />
            <SocialIcon type='github' />
          </View>
          <View style={{ marginRight: 15, marginLeft: 15 }}>
            <View style={{ backgroundColor: "white", paddingTop: 30, alignItems: "center" }}><Text>Or be classic</Text></View>
            <View style={{ borderRadius: 20,  marginTop: 10, borderColor: 'grey', borderWidth: 1, flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name="user-o"
                color="#05375a"
                size={20}
              />
              <View></View>
              <TextInput
                placeholder="Your First Name"
                style={{ borderRadius: 20, height: 40 }}
                onChangeText={this.onChangeText}
              />
            </View>
            <View style={{ borderRadius: 20, marginTop: 10, borderColor: 'grey', borderWidth: 1, flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name="user-o"
                color="#05375a"
                size={20}
              />
              <View></View>
              <TextInput
                placeholder="Your Last Name"
                style={{ borderRadius: 20, height: 40 }}
                onChangeText={text => onChangeText(text)}
              />
            </View>
            <View style={{ borderRadius: 20, borderColor: 'gray', borderWidth: 1, flexDirection: "row", alignItems: "center", marginTop: 10 }}>
              <Feather
                name="lock"
                color="#05375a"
                size={20}
              />
              <TextInput
                placeholder="Your Password"
                 secureTextEntry={true}
                style={{ height: 40, borderColor: 'gray' }}
                onChangeText={this.onChangeText}
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
          <View style={{
            width: 300, height: 40,
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50, marginRight: 50, marginLeft: 50,
            marginTop: 30
          }} >
            <Text style={styles.text2}>Sign up</Text>
          </View>
        </Animatable.View>
      </View>
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