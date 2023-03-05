import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { EvilIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const trashImg = require('./trash.png');

const BottomTabs = createBottomTabNavigator();

const  CreatePost =({navigation})=> { return (
<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
   <Text>CreatePost</Text>
</View>
)};

const CreatePostsScreen = ({navigation}) => {
    return (
        <BottomTabs.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { height: 80 }}}>
            <BottomTabs.Screen 
                   options={{
                   tabBarIcon: () =>{
                   return <TouchableOpacity style={ styles.trashButton } activeOpacity={0.5} >
                      <EvilIcons name="trash" size={24} color="black" />
                    </TouchableOpacity>
                   },
                   headerTitleAlign:"center"
                }} name='createPost' component={CreatePost}/>
        </BottomTabs.Navigator>
    );
  };

const styles = StyleSheet.create({
    trashButton:{
        backgroundColor: '#F6F6F6',
        height: 40,
        width: 70, 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
      },
});  

export default CreatePostsScreen;