import Post from "../../Elements/Post";
import React from "react";
import ProfileElement from "../../Elements/ProfileElement";
const avatar = require('../../Source/Rectangle22.png');
import { SafeAreaView, ScrollView, Text } from "react-native";
import { useState, useEffect } from "react";

const PostList = ({navigation , route}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      if (route.params) {
        setPosts((prevState) => [...prevState, route.params]);
      }
    }, [route.params]);
  
    return (
      <SafeAreaView style={{ justifyContent: "flex-start", alignItems: "center", overflow: "visible" }}>
        <ScrollView>
          <ProfileElement avatar= { avatar } name="Natali Romanova" email="email@example.com" />
          { posts.map ((el, index) => 
            <Post key={ index } img = { { uri: el.photoi } } text={ el.title } msgs = { 0 } location={ el.inputRegion } gps = { el.location }/>      
          )}
        </ScrollView>
      </SafeAreaView>
    );

  };

export default PostList;