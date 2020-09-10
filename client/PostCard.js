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
    Image,
    TouchableOpacity
} from 'react-native';

const companyLogo = "google.jpg";

const PostCard = ({ navigation }) => {
  return (
    <View style={styles.PostCardFrame}>
      <TouchableOpacity onPress={() => navigation.navigate('PostFull')}>
        <Text style={styles.CompanyName}>Company Name</Text>
        <Text style={styles.JobTitle}>Job Title</Text>
        <View style={styles.imageContainer}>
            <Image style={styles.logo} source={require(`./assets/${companyLogo}`)} />
        </View>
      </TouchableOpacity>
      
    </View>
  );
};

export default PostCard;