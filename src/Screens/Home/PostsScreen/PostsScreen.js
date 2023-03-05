import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";

const logoutImg = require('./log-out.png');
const gridImg = require('./grid.png');
const userImg = require('./user.png');

const PostsScreen = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.title }>Posts</Text>
        <TouchableOpacity style={ styles.logoutButton } activeOpacity={0.5}>
            <ImageBackground source={logoutImg} style={{width: 24, height: 24}}></ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={ styles.main }></View>

      <View style={ styles.footer }>
        <View style={ styles.buttonpanel }>
          <TouchableOpacity style={ styles.gridButton } activeOpacity={0.5}>
            <ImageBackground source={gridImg} style={{width: 24, height: 24}}></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.addButton } activeOpacity={0.5}>
            <Text style={ styles.addButtonText }>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.userButton } activeOpacity={0.5}>
            <ImageBackground source={userImg} style={{width: 24, height: 24}}></ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
    },
    header: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: '100%',
      borderBottomColor: '#999999',
      borderBottomWidth: 1,
    },
    main: {
      flex: 8,
    },
    footer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: '100%',
      borderTopColor: '#999999',
      borderTopWidth: 1,
    },
    title:{
      paddingTop: 30,
      fontWeight: "500",
      fontSize: 17,
    },
    logoutButton:{
      left: '43%',
      top: - 22,
    },
    buttonpanel:{
      alignItems: "center",
      flexDirection: 'row',
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

export default PostsScreen