import React, { useState } from 'react';
import PostCard from './PostCard.js';

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
  Image,
  TouchableOpacity,
} from 'react-native';

import Menu from './Menu';

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ paddingLeft: 8, paddingTop: 8 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Image style={{ height: 32, width: 32 }} source={require('./assets/menu.png')}></Image>
      </TouchableOpacity>
      <Text style={{ textAlign: 'center', fontSize: 24 }}>Hi, Alex</Text>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
    </View>
  );
};

export default Home;
