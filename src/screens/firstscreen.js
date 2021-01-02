import React from "react";
import { ImageBackground, StyleSheet, Text, View,Image,Button} from "react-native";

const getPro = require("./assets/imgs/getPro-bg-1.png");
const Invision = require("./assets/imgs/invision-white-slim.png");
const NowLogo = require("./assets/imgs/now-logo.png");
const CreativeTim = require("./assets/imgs/creative-tim-white-slim2.png");


const App = () => (
<View style={styles.container}>
    <ImageBackground source={getPro} style={styles.image}>
      
    <View style={styles.container3}>
      <Image source={NowLogo} style={styles.contentNowLogo}  ></Image>
    </View> 
    <Text style={styles.text}>NOW UI KIT</Text> 
      <View style={styles.container2}>
    <Text style={styles.text1}>Designed by</Text> 
    <Image source={Invision} style={styles.contenContainer}  ></Image>
    </View>
    <View style={styles.container2}>
    <Text style={styles.text1}>Code by</Text> 
    <Image source={CreativeTim} style={styles.contenContainer}  ></Image>
     </View>    
    <View style={{width: 300, height: 50, 
      backgroundColor: 'orange', 
      justifyContent: 'center', 
       alignItems: 'center',
       borderRadius:50,paddingLeft:30, 
       paddingRight:20}} >
      <Text style = {styles.text2}>Log In </Text> 
</View>  
    
        </ImageBackground>                        
  </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    

  },
  container2: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center", 
    alignItems: "center"
  },
    container3: {
      flex: 0.6,
      flexDirection: "row",
      justifyContent: "center", 
      alignItems: "center"
  },
  image: {
        resizeMode: "cover",
    justifyContent: "center",
    flex: 1, zIndex: 1
  },
  text: {
    color: "white",
    fontSize: 60,
    fontWeight: "bold",
    textAlign: 'center'
  }, 

  text1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center'
  }, 


  text2: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center'
  }, 
  contenContainer:{
    
    resizeMode:"center",
    width:91, height: 28
    
   

 },
             
  
         

  },



  
);

export default App;
