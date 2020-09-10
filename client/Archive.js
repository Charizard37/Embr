import React, { useState } from 'react';
import PostCard from './PostCard';
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
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
    </View>
  );
};

export default Archive;
