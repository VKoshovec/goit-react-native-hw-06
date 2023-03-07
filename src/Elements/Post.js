import { View, StyleSheet, ImageBackground, Text } from "react-native";
import React from "react";


const Post = ({ img, text }) =>{
    return (
        <View style={ styles.container }>
          <ImageBackground source={ img } style={ styles.postImg }></ImageBackground>
          <Text style={ styles.posText } >{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '70%',
        height: '30%',        
    },
    postImg:{
        width: '100%',
        height: '100%',
        borderRadius: 15,
        overflow: "hidden",
    },
    posText:{
       textAlign: "left",
    }
});

export default Post;