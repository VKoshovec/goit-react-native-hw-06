import { View, StyleSheet } from "react-native";
import React from "react";

const PostsScreen = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.header }></View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      width: '100%',
      borderTopRightRadius: 25,
      borderTopLeftRadius:25,
    },
    header: {
      width: '100%',
    }
});   

export default PostsScreen