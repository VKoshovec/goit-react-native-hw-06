import { TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from "react";
import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";

import Home from './src/Screens/Home/PostsScreen/Home';
import Authorization from './src/Screens/Authorization/Authorization';

export default function App() {

  const [logedIn, setLogedIn] = useState();
  
  
  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <NavigationContainer>
         {(!logedIn)?<Authorization/>:<Home/>}           
      </NavigationContainer>
   </TouchableWithoutFeedback>
  );
};

