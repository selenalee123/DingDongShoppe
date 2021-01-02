import React from "react";
import { ImageBackground, StyleSheet, Text, View,Image } from "react-native";

const getPro = require("./assets/imgs/getPro-bg-1.png");
//const invision = require("./assets/imgs/invision-white-slim.png");
//const creativeTim = require("./assets/creative-tim-white-slim2.png");


const onboarding = () => (
  <View style={styles.container}>
    <ImageBackground source={getPro} style={styles.getPro}>
      <Text style={styles.text}>N</Text>
      
      <Text style={styles.text}>NOW UI KIT</Text>
    </ImageBackground>                               
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 60,
    fontWeight: "bold",
    textAlign: 'center'
  }
});

export default Onboarding;
