import { StatusBar  } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import PostsScreen from './src/Screens/PostsScreen/PostsScreen';

const backImage = require('./src/Source/Photo_BG.png');
const MainStrack = createStackNavigator();

export default function App() {

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     {/* <View style={styles.maincontainer}>
        <ImageBackground source={backImage} style={styles.backImg}> */}
          <NavigationContainer style={styles.maincontainer}>
            <MainStrack.Navigator initialRouteName='Registratione' >
              {/* <PostsScreen/> */}
              {/* <LoginScreen/>  */}
              <MainStrack.Screen name='Login' component={LoginScreen}/>
              <MainStrack.Screen name='Registratione' component={RegistrationScreen}/>
              {/* <RegistrationScreen/> */}
            </MainStrack.Navigator>
          </NavigationContainer>
        {/* </ImageBackground>
       <StatusBar style="auto" />  
     </View> */}
   </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
  }, 
  // backImg: {
  //   flex: 1,
  //   justifyContent: 'flex-end',
  //   width: '100%'
  // },
});
