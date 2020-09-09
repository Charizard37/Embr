import React, { useState } from 'react';
import styles from "./styles.js";

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Alert,
  } from 'react-native';



  const PostCard = ({ navigation }) => {
    return (
      <View style={styles.PostCardFrame}>
        <Text>POSTCARD</Text>
        <View style={styles.container}>
            <Text>FAM</Text>
        </View>
      </View>
    );
  };
  
  export default PostCard;