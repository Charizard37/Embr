import React, { useState } from 'react';
import styles from './styles.js';

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
  TouchableOpacity,
} from 'react-native';

const companyLogoObj = {
  google: require('./assets/google.jpg'),
  twitter: require('./assets/twitter.png'),
  facebook: require('./assets/facebook.png'),
  amazon: require('./assets/amazon.png'),
  netflix: require('./assets/netflix.jpg'),
  slack: require('./assets/slack.jpg'),
  square: require('./assets/square.png'),
  tesla: require('./assets/tesla.jpg'),
  microsoft: require('./assets/microsoft.png'),
  apple: require('./assets/apple.png'),
};

const statusColor = (status) => {
  switch (status) {
    case 'Not yet applied':
      return '#80bfff';
    case 'Applied, waiting to hear back':
      return '#ffffb3';
    case 'Heard back':
      return '#c1f0c1';
    case 'Offer received':
      return '#00b33c';
    case 'Rejected':
      return '#ff5c33';
    case true:
      return '#99ccff';
    default:
      return '#ff8080';
  }
};

const PostCard = ({ navigation, route, jobObj }) => {
  const name = jobObj.company.toLowerCase();
  const logo = Object.keys(companyLogoObj).includes(name)
    ? companyLogoObj[name]
    : require('./assets/embr-placeholder.png');

  const color = statusColor(jobObj.status);
  const cardStyle = { ...styles.PostCardFrame, backgroundColor: color }; //ThESE ARE THE STYLES FOR THE FIRST VIEW COMPONENT
  return (
    <View style={cardStyle}>
      <TouchableOpacity
        onPress={() => navigation.navigate('PostFull', { jobObj: jobObj, logo: logo })}
      >
        <Text style={styles.CompanyName}>{jobObj.company}</Text>
        <Text style={styles.JobTitle}>{jobObj.position}</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.logo} source={logo} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PostCard;
