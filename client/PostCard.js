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
  sqaure: require('./assets/square.png'),
  tesla: require('./assets/tesla.jpg'),
  microsoft: require('./assets/microsoft.png'),
  apple: require('./assets/apple.png'),
};

const statusColor = (status) => {
  switch (status) {
    case 'Not yet applied':
      return 'blue';
    case 'Applied, waiting to hear back':
      return 'yellow';
    case 'Heard back':
      return 'green';
    case 'Offer received':
      return 'purple';
    case 'Rejected':
      return 'red';
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

  const color = statusColor(jobObj.applied);
  const cardStyle = { ...styles.PostCardFrame, backgroundColor: color }; //ThESE ARE THE STYLES FOR THE FIRST VIEW COMPONENT
  return (
    <View style={cardStyle}>
      <TouchableOpacity onPress={() => navigation.navigate('PostFull' /*, {jobObj: jobObj}*/)}>
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
