import { StatusBar  } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from './src/Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import Home from './src/Screens/Home/PostsScreen/Home';

const backImage = require('./src/Source/Photo_BG.png');
const MainStrack = createStackNavigator();


export default function App() {

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <NavigationContainer>
            {/* <MainStrack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}> */}
              {/* <PostsScreen/> */}
              {/* <MainStrack.Screen name='Login' component={LoginScreen}/> */}
              {/* <MainStrack.Screen name='Registratione' component={RegistrationScreen}/> */}
            {/* </MainStrack.Navigator> */}
            <Home/>
      </NavigationContainer>
   </TouchableWithoutFeedback>
  );
};

