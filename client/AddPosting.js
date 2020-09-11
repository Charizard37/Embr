import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  TextInput,
} from 'react-native';
import styles from './styles';

const AddPosting = ({ navigation }) => {
  const [companyName, setCompanyName] = useState('');
  const [positionName, setPositionName] = useState('');
  const [appStatus, setAppStatus] = useState('');

  const createJob = () => {
    fetch('http://localhost:3000/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: `mutation {addJob(user_id: 1, company: "${companyName}", position: "${positionName}", status: "${appStatus}", phoneScreen: ${false}, interview: ${false}, takeHome: ${false}, doubleDown: ${false}, comments: "${'New job'}"){id}}`,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log('Mutated that sucka');
        navigation.goBack();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <View style={styles.newPostingView}>
        <Text style={{ fontSize: 20 }}>Position Information:</Text>
        <TextInput
          placeholder='Company Name'
          value={companyName}
          style={styles.newPosting}
          onChangeText={(text) => setCompanyName(text)}
        ></TextInput>
        <TextInput
          placeholder='Position / Job Title'
          value={positionName}
          style={styles.newPosting}
          onChangeText={(text) => setPositionName(text)}
        ></TextInput>
        <Text style={{ paddingTop: 10, fontSize: 20 }}>Application Status:</Text>
        <RNPickerSelect
          selectedValue={appStatus}
          onValueChange={(val) => setAppStatus(val)}
          placeholder={{}}
          style={styles}
          items={[
            { label: 'Not yet applied', value: 'Not yet applied' },
            { label: 'Applied, waiting to hear back', value: 'Applied, waiting to hear back' },
            { label: 'Heard back', value: 'Heard back' },
            { label: 'Offer received', value: 'Offer received' },
            { label: 'Rejected', value: 'Rejected' },
          ]}
        ></RNPickerSelect>
        <Button title='Add Job Application' onPress={createJob}></Button>
      </View>
    </>
  );
};

export default AddPosting;
