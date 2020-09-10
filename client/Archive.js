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

const Archive = ({ navigation, route }) => {
  const PostCardArray = [];
  const jobArray = route.params.jobArray;
  console.log(jobArray);
  if (jobArray.length) {
    jobArray.forEach((job, i) => {
      PostCardArray.push(<PostCard key={i} navigation={navigation} jobObj={job} />);
    });
  }
  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 24 }}>Archived Postings</Text>
      <View style={style.rowContainer}>{PostCardArray}</View>
    </View>
  );
};

export default Archive;
