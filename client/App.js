import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home.js';
import Archive from './Archive.js';
import Menu from './Menu.js';
import PostFull from './PostFull.js';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  Modal,
} from 'react-native';

const RootStack = createStackNavigator();

const App = () => {
  const [loggedIn, userLogin] = useState(true);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name='Home' component={Home} options={{ title: 'Embr' }} />
        <RootStack.Screen name='Menu' component={Menu} options={{ title: 'Menu' }} />
        <RootStack.Screen name='PostFull' component={PostFull} options={{ title: 'Details' }} />
        <RootStack.Screen
          name='Archive'
          component={Archive}
          options={{ title: 'Archived Postings' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
