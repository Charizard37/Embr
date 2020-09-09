import React, { useState } from 'react';
import { Picker } from '@react-native-community/picker';
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

const AddPosting = ({ navigation }) => {
  const [companyName, setCompanyName] = useState('Company Name');
  const [positionName, setPositionName] = useState('Position / Job Title');
  const [appStatus, setAppStatus] = useState('Application Status');

  return (
    <View>
      <Text>Add a new Posting!!</Text>
      <TextInput value={companyName} onChangeText={(text) => setCompanyName(text)}></TextInput>
      <TextInput value={positionName} onChangeText={(text) => setPositionName(text)}></TextInput>
      <Text>Application Status:</Text>
      <Picker selectedValue={appStatus} onValueChange={(val) => setAppStatus(val)}>
        <Picker.Item label='Not yet applied' value='Not yet applied' />
        <Picker.Item label='Applied, waiting to hear back' value='Applied, waiting to hear back' />
        <Picker.Item label='Heard back' value='Heard back' />
        <Picker.Item label='Offer received' value='Offer received' />
      </Picker>
    </View>
  );
};

export default AddPosting;
