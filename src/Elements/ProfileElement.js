import { View, StyleSheet, ImageBackground, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/auth/authSelectors";
const avatar = require('../Source/Rectangle22.png');

const ProfileElement = () => {

   const { user, name } = useSelector(selectUser);

   return(
    <View style={ styles.profContainer }>
        <ImageBackground source={ avatar } style={ styles.profImg }></ImageBackground>
        <View style={ styles.profInfo }>
            <Text style={ styles.profName }>{ name }</Text>
            <Text>{ user }</Text>
        </View>
    </View>
   )
};

const styles = StyleSheet.create({
    profContainer:{
      justifyContent: "flex-start",
      flexDirection: "row",  
      alignSelf: "flex-start",
      marginTop: 32,
      marginBottom: 20,
      marginLeft: 20
    },
    profImg: {
      borderRadius: 15,
      width: 60,
      height: 60
    },
    profInfo:{
      justifyContent: "center",
      marginLeft: 20
    },
    profName:{
       fontWeight: "700"
    }
});

export default ProfileElement;

