import { StyleSheet, Text, 
   ImageBackground, View, Dimensions, 
   TouchableOpacity, TextInput, KeyboardAvoidingView, 
   Platform } from "react-native";
import React from "react";

const buttonImg = require('./add.png');

const RegistrationScreen = () => {
   return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={ styles.containerKeyB }>
      <View style={ styles.container }>
        <View style={ styles.pfotoContainer }>
           <TouchableOpacity style={ styles.addbutton } activeOpacity={0.5}>
              <ImageBackground source={buttonImg} style={{width: '100%', height: '100%'}}></ImageBackground>
           </TouchableOpacity>
        </View>
        <Text style={ styles.title }>Регистрация</Text>
        
        <TextInput style={ styles.inputLogin } placeholder="Login" inputMode="text"></TextInput>
        <TextInput style={ styles.inputMailPassw } placeholder="Email address" inputMode="email"></TextInput>
        <TextInput style={ styles.inputMailPassw } placeholder="Password" inputMode=""></TextInput>
        
        <TouchableOpacity style={ styles.passwShow } activeOpacity={0.5}>
             <Text style={ styles.passwShowText }>Show</Text>
        </TouchableOpacity>       
      </View>
    </KeyboardAvoidingView> 
   )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      marginTop: Dimensions.get('window').height/3,
      alignItems: 'center',
      height: '100%',
      width: '100%',
      borderTopRightRadius: 25,
      borderTopLeftRadius:25,
    },
    containerKeyB: {
      flex:1,
      width:'100%'
    },
    pfotoContainer: {
      marginTop: -60,
      height: 120,
      width: 120,
      backgroundColor: '#F6F6F6',
      borderRadius: 16,
    },
    addbutton: {
      marginTop: '65%',
      left: '90%',
      height: 25,
      width: 25,
      pointerEvents: "auto",
    },
    title: {
      fontWeight: '500',
      fontSize: 30,
      marginTop: 32,
      lineHeight: 35,
    },
    inputLogin: {
      backgroundColor: '#F6F6F6',
      width: 343,
      height: 50,
      borderRadius: 8,
      marginTop: 33,
      padding: 16,
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 19,
    },
    inputMailPassw: {
      backgroundColor: '#F6F6F6',
      width: 343,
      height: 50,
      borderRadius: 8,
      marginTop: 16,
      padding: 16,
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 19,
    },
    passwShowText: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 19,
    },
    passwShow: {
      // position: "absolute",
      top: -34,
      left: 130,
    },
 });

export default RegistrationScreen;