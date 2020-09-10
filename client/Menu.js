import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Archive from './Archive.js';
import Home from './Home.js';

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

const Menu = ({ navigation, route }) => {
  // console.log(route.params.jobArray);
  const jobArray = route.params.jobArray;
  return (
    <SafeAreaView style={{ marginTop: 40 }}>
      <Button onPress={() => navigation.navigate('Home')} title='Home'></Button>
      <Button
        onPress={() => navigation.navigate('Archive', { jobArray: jobArray })}
        title='Archived Postings'
      ></Button>
      <Button title='Stats (Coming Soon)'></Button>
      <Button title='Profile'></Button>
      <Button title='Log Out'></Button>
    </SafeAreaView>
  );
};

export default Menu;
