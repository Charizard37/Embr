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
  const [jobArray, setJobArray] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query:
          '{jobs {position, company, id, status, phoneScreen, interview, takeHome, doubleDown, comments }}',
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log('DATAAAAA', data.data);
        setJobArray(data.data.jobs);
      })
      .catch((error) => console.log(error));
  }, []);

  const PostCardArray = [];
  if (jobArray.length) {
    jobArray.forEach((job, i) => {
      if (job.status !== 'Rejected') {
        PostCardArray.push(<PostCard key={i} navigation={navigation} jobObj={job} />);
      }
    });
  }

  const renderContent = PostCardArray.length ? (
    <View style={styles.rowContainer}>{PostCardArray}</View>
  ) : (
    <Text style={{ textAlign: 'center', fontSize: 16 }}>
      No jobs, click the "+" button to add a job
    </Text>
  );
  return (
    <ScrollView>
      <View>
        <TouchableOpacity
          style={{ paddingLeft: 8, paddingTop: 8 }}
          onPress={() => navigation.navigate('Menu', { jobArray: jobArray })}
        >
          <Image style={{ height: 32, width: 32 }} source={require('./assets/menu.png')}></Image>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', fontSize: 24 }}>Hi, Alex</Text>
        <View style={{ paddingTop: 20 }}>
          <View style={{ display: 'flex', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Add Posting')}>
              <Image
                style={{ height: 64, width: 64 }}
                source={require('./assets/add-item.png')}
              ></Image>
            </TouchableOpacity>
          </View>
          {renderContent}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
