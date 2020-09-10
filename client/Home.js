import React, { useState, useEffect } from 'react';
import PostCard from './PostCard.js';
import styles from './styles.js';
import Menu from './Menu';

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


const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  // const [jobArray, setJobArray] = useState({});
  // useEffect(() => {
  //   fetch('http://localhost:3000', {
  //     method: 'POST',
  //     body: JSON.stringify(username),
  //     headers: {'Conent-Type': 'application/json'}
  //   })
  //   .then(data => data.json())
  //   .then(data => {
  //     console.log("DATAAAAA", data)
  //     // setJobArray(data.jobs);
  //   })
  // }, [])

  // const PostCardArray = [];
  // for(let i = 0; i < 6; ++i){
  //   PostCardArray.push(<PostCard key={i} navigation={navigation} jobObj={jonArray[i]}/>)
  // }

  return (
    <ScrollView>
    <View style={{ paddingLeft: 8, paddingTop: 8 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Image style={{ height: 32, width: 32 }} source={require('./assets/menu.png')}></Image>
      </TouchableOpacity>
      <Text style={{ textAlign: 'center', fontSize: 24 }}>Hi, Alex</Text>
      <View style={styles.rowContainer}>
        <PostCard navigation={navigation}></PostCard>
        <PostCard navigation={navigation}></PostCard>
        <PostCard navigation={navigation}></PostCard>
      </View>
      <View style={styles.rowContainer}>
      {/*{PostCardArray}*/}
      <PostCard navigation={navigation}></PostCard>
      <PostCard navigation={navigation}></PostCard>
      <PostCard navigation={navigation}></PostCard>
      </View>
    </View>
    </ScrollView>
  );
};

export default Home;
