import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from "react-native";
import React from "react";
import { useState, useEffect, useRef} from "react";
import { EvilIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Camera } from "expo-camera";
import * as Location from "expo-location";


const trashImg = require('./trash.png');

const BottomTabs = createBottomTabNavigator();



const  CreatePost =({navigation})=> { 

    const [camera, setCamera] = useState(null);
    const [photoi, setPhoto ]  = useState(null);
    const [location, setLocation] = useState(null);
    const [region, setRegion] = useState(null);
    const [inputRegion, setInputRegion] = useState('')
    const [title, setTitle] = useState('');


    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            console.log("Permission to access location was denied");
          }   
          let locationPos = await Location.getCurrentPositionAsync({});
          const coords = {
            latitude: locationPos.coords.latitude,
            longitude: locationPos.coords.longitude,
          };
          setLocation(coords);

          let regionName = coords && await Location.reverseGeocodeAsync(coords);
          setRegion(regionName);

        })();
      }, []);

      const active = title && region;

    const takePhoto = async() => {
       const photo = await camera.takePictureAsync();
       setPhoto(photo.uri);
       setInputRegion(region[0]['country'] + ", " + region[0]['city']); 
    }

    const inputTitlte = (text) => {

        setTitle(text);

    };

    const hendleCreate = () => {
        if (!title || !location || !photoi) { alert("Enter all data pleace!!!"); return }
        navigation.navigate('PostsScreen', { photoi, location, inputRegion, title });     
    }

    return (
<View style={ styles.postContainer }>
     <Camera style={ styles.postImg } ref={setCamera}>
        <Image
              source={{ uri: photoi }}
              style={{ height: 250, width: 250, justifyContent: 'flex-start', alignItems: 'flex-start' }}
         />
     </Camera>

     <TouchableOpacity style={ styles.postImgAdd } activeOpacity={0.5} onPress={ takePhoto }>
         <FontAwesome name="camera" size={24} color="white" />
      </TouchableOpacity>

   <Text style={ styles.postImgText }>Add photo</Text>
   <View style={ styles.postForm }>
      <TextInput style={ styles.postName } placeholder="Title..." inputMode="text" onChangeText={ inputTitlte }/>
      <TextInput style={ styles.postName } placeholder="Location" inputMode="navigation" value = { inputRegion }/>
      <TouchableOpacity style={ active?styles.postButtonActive:styles.postButton } activeOpacity={0.5} onPress= { hendleCreate }>
                  <Text style={ styles.postButtonText }>Publicate</Text>
      </TouchableOpacity>
   </View>
</View>
)};


const CreatePostsScreen = ({navigation}) => {
    return (
        <BottomTabs.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { height: 80, borderBottomColor: '#E8E8E8', borderBottomWidth: 2, }}}>
            <BottomTabs.Screen 
                   options={{
                   tabBarIcon: () =>{
                   return <TouchableOpacity style={ styles.trashButton } activeOpacity={0.5} >
                      <EvilIcons name="trash" size={24} color="black" />
                    </TouchableOpacity>
                   },
                   headerLeft: () => (
                    <TouchableOpacity style={ styles.logoutButton } activeOpacity={0.5}
                     onPress={()=>navigation.navigate('Home', { screen: 'PostsScreen' })} >
                       <Ionicons name="arrow-back-sharp" size={24} color="black" />
                    </TouchableOpacity>),
                    headerLeftContainerStyle: { paddingLeft: 10 },
                   headerTitleAlign:"center",
                   headerTitleStyle: { paddingBottom: 5 }
                }} name='Create post' component={CreatePost}/>
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
    postContainer: { flex: 1, 
        justifyContent: "center",
        alignItems: "center", 
        backgroundColor: "#fff",
    },
    postImg: {
        flex: 2,
        width: '100%',
        height: 600,
        color: '#F6F6F6',
        justifyContent: "center",
        alignItems: "center",
    },
    postImgAdd:{
        display: 'flex',
        marginTop: -80,
        width: 50,
        height: 50,
        borderRadius: 50,
        padding: 3,
        borderColor: '#ffffff',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: "center"
    },
    postImgText: {
        alignItems: "flex-start",
        color: "#fff"
    },
    postForm:{
        flex: 3,
    },
    postButton:{
      backgroundColor: '#E8E8E8',
      height: 50,
      width: 343, 
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
      marginTop: 44,
    },
    postButtonActive:{
        backgroundColor: '#FF6C00',
        height: 50,
        width: 343, 
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        marginTop: 44,
      },
    postButtonText:{
       color: '#fff',
       fontWeight: '400',
    },
    postName:{  
       width: 343,
       height: 50,
       borderRadius: 8,
       marginTop: 33,
       padding: 16,
       fontStyle: 'normal',
       fontWeight: '400',
       fontSize: 16,
       lineHeight: 19,
       borderBottomColor: '#E8E8E8',
       borderBottomWidth: 2,
    },
});  

export default CreatePostsScreen;