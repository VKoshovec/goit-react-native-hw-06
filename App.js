import { StatusBar  } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, 
  Platform } from 'react-native';
import React from "react";
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';

const backImage = require('./Source/Photo_BG.png');

export default function App() {
  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.maincontainer}>
      <ImageBackground source={backImage} style={styles.backImg} >
        <RegistrationScreen/>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  backImg: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
   }
});
