import { TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from './src/Screens/Navigation/Navigation';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import LoadingScreen from './src/Elements/Loading';

export default function App() { 

  return (
  <Provider store= { store } >
    <>
    <LoadingScreen/>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <NavigationContainer>
         <Navigation/>         
      </NavigationContainer>
     </TouchableWithoutFeedback>
     </>
   </Provider>
  );
};