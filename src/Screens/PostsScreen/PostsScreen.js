import { View, Text, StyleSheet } from "react-native";
import React from "react";

const PostsScreen = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.title }>Posts</Text>
      </View>

      <View style={ styles.footer }>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
    },
    header: {
      alignItems: "center",
      justifyContent: "center",
      width: '100%',
      height: '10%',
      borderBottomColor: '#F6F6F6',
      borderBottomWidth: 1,
      shadowColor: '#000000',
    },
    footer: {
      bottom: 10,
      alignItems: "center",
      justifyContent: "center",
      width: '100%',
      height: '10%',
      borderBottomColor: '#F6F6F6',
      borderBottomWidth: 1,
      shadowColor: '#000000',
    },
    title:{
      paddingTop: 20,
      fontWeight: "500",
      fontSize: 17,
    }
});   

export default PostsScreen