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

const Menu = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button onPress={() => navigation.navigate('Home')} title='Home'></Button>
      <Button onPress={() => navigation.navigate('Archive')} title='Archived Postings'></Button>
      <Button title='Stats (Coming Soon)'></Button>
      <Button title='Profile'></Button>
      <Button title='Log Out'></Button>
    </SafeAreaView>
  );
};

export default Menu;
