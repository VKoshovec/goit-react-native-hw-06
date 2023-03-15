import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import Post from "../../Elements/Post";
import ProfileElement from "../../Elements/ProfileElement";
const postImg = require('../../Source/Rectangle23.png');
const avatar = require('../../Source/Rectangle22.png');
import data from '../../Source/posts'
import { nanoid } from 'nanoid' 

function PostsScreen({navigation , route}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      if (route.params) {
        setPosts((prevState) => [...prevState, route.params]);
      }
    }, [route.params]);
  
    console.log(posts);
    return (
      <SafeAreaView style={{ justifyContent: "flex-start", alignItems: "center", overflow: "visible" }}>
        <ScrollView>
          <ProfileElement avatar= { avatar } name="Natali Romanova" email="email@example.com" />
          { posts.map (el => 
            <Post key={ el.title } img = { { uri: el.photoi } } text={ el.title } msgs = { 0 } location={ el.inputRegion } gps = { el.location }/>      
          )}
        </ScrollView>
      </SafeAreaView>
    );
  };

  export default PostsScreen;