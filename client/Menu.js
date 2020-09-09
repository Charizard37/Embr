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

const MenuStack = createStackNavigator();

const Menu = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Hello, Alex</Text>
      <Button onPress={() => navigation.navigate('Home')} title='Home'></Button>
      <Button onPress={() => navigation.navigate('Archive')} title='Archived Postings'></Button>
      <Button title='Stats (Coming Soon)'></Button>
    </SafeAreaView>
  );
};

export default Menu;
