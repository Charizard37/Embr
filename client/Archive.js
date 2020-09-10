import React, { useState } from 'react';
import PostCard from './PostCard';
import style from './styles';
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

const Archive = ({ navigation }) => {
  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 24 }}>Archived Postings</Text>
      <View style={style.rowContainer}>
        <PostCard navigation={navigation}></PostCard>
        <PostCard navigation={navigation}></PostCard>
        <PostCard navigation={navigation}></PostCard>
        <PostCard navigation={navigation}></PostCard>
      </View>
    </View>
  );
};

export default Archive;
