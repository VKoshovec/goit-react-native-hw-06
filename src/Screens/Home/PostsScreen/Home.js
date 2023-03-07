import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import React from "react";
import { AntDesign, SimpleLineIcons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Post from "../../../Elements/Post";

const BottomTabs = createBottomTabNavigator();
const postImg = require('../../../Source/Rectangle23.png');

function Posts({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Post img = { postImg } text={ "Forest" }/>
      </View>
    );
  };
  
  function ProfileScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>ProfileScreen</Text>
      </View>
    );
  };
  
  function MapScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>MapScreen</Text>
      </View>
    );
  };

const Home = ({ navigation }) => {
    return (
        <BottomTabs.Navigator initialRouteName="Posts" screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { height: 80 }
            }}>

                {/* GRID */}
                <BottomTabs.Screen 
                   options={{
                   tabBarIcon: () =>{
                   return <SimpleLineIcons name="grid" size={20} color="gray" />
                   },
                   headerTitleAlign:"center"
                }} name='MapScreen' component={MapScreen}/>

                {/* ADD BUTTON */}
                <BottomTabs.Screen  options={{
                   tabBarIcon: () => {
                   return <TouchableOpacity style={ styles.addButton } activeOpacity={0.5} onPress={()=>navigation.navigate('CreatePostsScreen')}>
                    <Text style={ styles.addButtonText }>+</Text>
                    </TouchableOpacity>
                   },
                   headerTitleAlign: "center",
                   headerRightContainerStyle: { paddingRight: 20 },
                   headerRight: () => (
                   <TouchableOpacity style={ styles.logoutButton } activeOpacity={0.5} onPress={()=>navigation.navigate('Login')} >
                      <Feather name="log-out" size={24} color="gray" />
                   </TouchableOpacity>)
                }} name='Posts' component={Posts}/>
             
                {/* PROFILE BUTTON */}
                <BottomTabs.Screen options={{
                   tabBarIcon: () =>{
                   return <AntDesign name="user" size={20} color="gray" />
                   },
                   headerTitleAlign:"center"
                }} name='ProfileScreen' component={ProfileScreen}/>

          </BottomTabs.Navigator>
    );   
}

const styles = StyleSheet.create({
    registerButton: {
      backgroundColor: '#FF6C00',
      height: 50,
      width: 343, 
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
      marginTop: 44,
    },
    registerButtonText:{
       color: '#fff',
       fontWeight: '400'
    },
    loginLink:{
      marginTop: 16,
      marginBottom: 66
    },
    loginLinkText:{
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 19,
    },
    footer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: '100%',
      borderTopColor: '#999999',
      borderTopWidth: 1,
    },
    addButton:{
      backgroundColor: '#FF6C00',
      height: 40,
      width: 70, 
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
    },
    addButtonText:{
      color: '#ffffff',
      fontSize: 18,
    },
    gridButton:{
      marginRight: 40,
    },
    userButton:{
      marginLeft: 40,
    },
  });

export default Home;