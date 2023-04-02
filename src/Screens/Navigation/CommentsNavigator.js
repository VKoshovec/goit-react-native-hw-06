import React from "react";
import { StyleSheet, TouchableOpacity, TextInput, View} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import Comments from "../../NestedScreens/Comments/Comments";


const CommentsTabs = createBottomTabNavigator();

const CommentsNav = ({navigation}) => {
    return (
        <CommentsTabs.Navigator initialRouteName="Comments" screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { height: 80, borderBottomColor: '#E8E8E8', 
            borderBottomWidth: 1, alignItems: "center", justifyContent: "center" }}}>
            <CommentsTabs.Screen 
                   options={{
                   tabBarIcon: () => {
                   return <View style={styles.barStyle}><TextInput style={ styles.inputMailPassw } ></TextInput>
                   <TouchableOpacity style={ styles.addButton } activeOpacity={0.5} 
                   onPress={ 
                    ()=>navigation.navigate('Home', { screen: 'PostsScreen' })
                    }>
                      <Ionicons name="arrow-back-sharp" size={24} color="white" />
                    </TouchableOpacity></View>
                   },
                   headerLeft: () => (
                    <TouchableOpacity activeOpacity={0.5}
                     onPress={()=>navigation.navigate('Home', { screen: 'PostsScreen' })} >
                       <Ionicons name="arrow-back-sharp" size={24} color="black" />
                    </TouchableOpacity>),
                    headerLeftContainerStyle: { paddingLeft: 10 },
                   headerTitleAlign:"center",
                   headerTitleStyle: { paddingBottom: 5 }
                }} name='Comments' component={ Comments }/>
        </CommentsTabs.Navigator>
    );
  };

const styles = StyleSheet.create({
    addButton:{
        backgroundColor: '#FF6C00',
        height: 34,
        width: 34, 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        top: - 43,
        left: 150
    },
    inputMailPassw: {
        backgroundColor: '#F6F6F6',
        width: 343,
        height: 50,
        borderRadius: 100,
        padding: 16,
        marginTop: 16,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        position: 'relative',
      },
      barStyle: {
        justifyContent: "center",
        alignItems: "center",
      }
});  

export default CommentsNav;