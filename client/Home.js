import React, { useState } from 'react';

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

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>This is the Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Archive')}
        title='View Archived Postings'
      ></Button>
    </View>
  );
};

export default Home;
