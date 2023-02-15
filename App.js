import { StatusBar  } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import React from "react";

const image = {uri: 'https://reactjs.org/logo-og.png'};
const backImage = require('./Photo_BG.png') ;

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={backImage} style={{width: 700, height: 700}}>
        <Text style={styles.textinc}>Hello!!!</Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  textinc :{
    fontWeight:'900',
    color: "#20232a"
  }
});
