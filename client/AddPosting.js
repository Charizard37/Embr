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
        <Button
          title='Add Job Application'
          onPress={() => {
            fetch('http://localhost:3000/')
              .then((data) => data.json())
              .then((data) => console.log(data));
          }}
        ></Button>
      </View>
    </>
  );
};

export default AddPosting;
