import React from "react";
import { ImageBackground, FlatList, IconButton, Colors, StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
//import { RNRuler } from 'react-native-ruler';
import PhotoGrid from 'react-native-image-grid';
import { SocialIcon } from 'react-native-elements'


const background5 = require("../../assets/imgs/bg5.png");
const ProfilePicture = require('../../assets/imgs/KK-profile.png');


export default class Profilescreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View flex={1} >
        <View flex={0.9} style={styles.mainContainer}>
          <View style={styles.container}>
            <ImageBackground source={background5} style={styles.image}>
              <View style={styles.profilecontainer}  >
                <Image source={ProfilePicture} style={{
                  width: 150,
                  height: 150,
                  marginRight: 10,
                  marginBottom: 8,
                  marginTop: 5
                }}></Image>
              </View>
              <Text style={styles.text1}>Kim Kim Ly</Text>
              <View style={styles.container3}>
              </View>
              <Text style={styles.text2}>Creator</Text>
              <View styles={styles.container4}>
                <View
                  style={{
                    flexDirection: "row",

                  }}
                >
                </View>
                <View style={{
                  flexDirection: "row",

                }} style={styles.commentcontainerall}>
                  <View style={{ flex: 0.3 }}  >
                    <Text style={styles.text3}>300</Text>
                    <Text style={styles.text3}>Friends</Text>
                  </View>
                  <View style={{ flex: 0.3 }}>
                    <Text style={styles.text3}>26</Text>
                    <Text style={styles.text3}>Comments</Text>
                  </View>
                  <View style={{ flex: 0.3 }}>
                    <Text style={styles.text3}>48</Text>
                    <Text style={styles.text3}>Bookmarks</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{

            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: "row",
            marginTop: -25
          }}>
            <View style={{
              width: 114, height: 44,
              backgroundColor: 'orange',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }} >
              <Text style={styles.text4}>Follow</Text>


            </View>

            <SocialIcon type='twitter' />
            <SocialIcon type='facebook' />
            <SocialIcon type='instagram' />
            <SocialIcon type='linkedin' />
            <SocialIcon type='github' />

          </View>

          <View>
            <Text style={styles.aboutme}>About me </Text>
          </View>
          <View flex={0.3} style={styles.mainContainer}>
            <Text
              size={35}
              muted
              style={{
                textAlign: 'center',
                fontFamily: 'montserrat-regular',
                zIndex: 2,
                lineHeight: 30,
                color: '#7F7371',
                paddingHorizontal: 20
              }}
            >
              Having goals that we are passionate about gives us something to look forward to each and every morning when we wake up. Not having goals is an excellent recipe for average living.
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.2 }}></View>
            <Text style={styles.Album} fontSize="30" color="red">Album</Text>
            <View style={{ flex: 0.5 }}></View>
            <Text style={styles.ViewAll}>View All</Text>
          </View>
          <View style={{ marginLeft: 50, backgroundColor: "Blue", flexDirection: "row" }}>
            <View style={{ backgroundColor: "green", height: 150, width: 150 }}>
              <Image
                style={styles.imagealbum}
                source={require('../../assets/imgs/kingston.jpg')}
              />
            </View>
            <View style={{ backgroundColor: "orange", height: 150, width: 150 }}>
              <Image
                style={styles.imagealbum}
                source={require('../../assets/imgs/phuket.jpg')}
              />
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "orange" }}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  profilecontainer: {
    justifyContent: "center",
    alignItems: "center"
  },

  container2: {
    flex: 0.1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  container3: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },


  container4: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  commentcontainer: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center"


  },

  image: {
    resizeMode: "cover",
    justifyContent: "center",
    flex: 1, zIndex: 1
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    fontFamily: "Mosse Bold"
  },
  text1: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center'
  },
  text2: {
    color: "silver",
    fontSize: 20,
    textAlign: 'center'
  },

  text4: {
    color: "white",
    fontSize: 20,
    textAlign: 'center'
  },
  text3: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center'
  },


  aboutme: {
    textAlign: 'center',
    fontFamily: 'montserrat-regular',
    zIndex: 2,
    fontSize: 20,
    lineHeight: 25,
    color: 'black'
  },
  contenContainer: {
    flex: 0.2,
    resizeMode: "center",
    width: 50, height: 20,

  },

  commentcontainerall: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },
  Album: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "black"
  },
  ViewAll: {
    color: "orange",
    fontSize: 20
  },
  imagealbum: {
    width: 150,
    height: 150,
    borderRadius: 10

  }

})

