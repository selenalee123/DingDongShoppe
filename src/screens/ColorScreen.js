import React, { Component,useState} from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const ColorScreen=() => {

  const [colors,setColors] = useState([]);
  console.log(colors);

  
    return (
      <View>
        <Text>Kim Kim </Text>
          <Button title="Add a color" 
          onPress={() => {
             setColors([...colors,randomRgb()]);
          }}
          />
          <View style={{height:100,width:100,backgroundColor:randomRgb()}}></View>
        
      </View>
    );
  };



const randomRgb=() =>{
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue =Math.floor(Math.random() * 256);
  return bgColor = "rgb(" + red + "," + green + "," + blue + ")";


  
};
export default ColorScreen;

const styles = StyleSheet.create({});
