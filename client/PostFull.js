import React, { useState, useEffect } from 'react';
import styles from './styles.js';
import RNPickerSelect from 'react-native-picker-select';
import CheckBox from '@react-native-community/checkbox';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const PostFull = ({ navigation, route }) => {
  const [jobArray, setJobArray] = useState({});
  const [checked, setCheck] = useState(true);

  const companyLogo = route.params.logo;
  const { jobObj } = route.params;
  const { id, status, phoneScreen, interview, takeHome, doubleDown, comments } = jobObj;

  const [appStatus, setAppStatus] = useState(status);
  const [appPhoneScreen, setAppPhoneScreen] = useState(phoneScreen);
  const [appInterview, setAppInterview] = useState(interview);
  const [appTakeHome, setAppTakeHome] = useState(takeHome);
  const [appDoubleDown, setAppDoubleDown] = useState(doubleDown);
  const [appComments, setAppComments] = useState(comments);

  const saveChanges = () => {
    fetch('http://localhost:3000/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: `mutation {editJob(id: ${id}, status: "${appStatus}", phoneScreen: ${appPhoneScreen}, interview: ${appInterview}, takeHome: ${appTakeHome}, doubleDown: ${appDoubleDown}, comments: "${appComments}"){id}}`,
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
    <View style={styles.containerFull}>
      <View style={styles.companyContainer}>
        <View>
          <Text style={styles.CompanyNameFull}>{jobObj.company}</Text>
          <Text style={styles.JobTitleFull}>{jobObj.position}</Text>
        </View>
        <Image style={styles.logo} source={companyLogo} />
      </View>

      <RNPickerSelect
        selectedValue={appStatus}
        onValueChange={(val) => setAppStatus(val)}
        placeholder={{ label: appStatus, value: appStatus }}
        style={styles}
        items={[
          { label: 'Not yet applied', value: 'Not yet applied' },
          { label: 'Applied, waiting to hear back', value: 'Applied, waiting to hear back' },
          { label: 'Heard back', value: 'Heard back' },
          { label: 'Offer received', value: 'Offer received' },
          { label: 'Rejected', value: 'Rejected' },
        ]}
      ></RNPickerSelect>
      <View style={styles.fullNotes}>
        <View style={styles.checkContainer}>
          <Text style={{ fontSize: 24 }}>Double Down</Text>
          <CheckBox
            value={doubleDown}
            disabled={false}
            onValueChange={() => setAppDoubleDown(!appDoubleDown)}
          />
        </View>
        <View style={styles.checkContainer}>
          <Text style={{ fontSize: 24 }}>Phonescreen</Text>
          <CheckBox
            value={phoneScreen}
            disabled={false}
            onValueChange={() => setAppPhoneScreen(!appPhoneScreen)}
          />
        </View>
        <View style={styles.checkContainer}>
          <Text style={{ fontSize: 24 }}>Interview</Text>
          <CheckBox
            value={interview}
            disabled={false}
            onValueChange={() => setAppInterview(!appInterview)}
          />
        </View>
        <View style={styles.checkContainer}>
          <Text style={{ fontSize: 24 }}>Take-Home</Text>
          <CheckBox
            value={takeHome}
            disabled={false}
            onValueChange={() => setAppTakeHome(!appTakeHome)}
          />
        </View>

        {/* Phonescreen, Interview, Takehome, DoubleDowns Checkboxes*/}
      </View>
      <View>
        <TextInput
          style={styles.textInputStyle}
          placeholder='Notes'
          onChangeText={(text) => setAppComments(text)}
          multiline={true}
        >
          {comments}
        </TextInput>
        <Button onPress={saveChanges} title='Save Changes' />
        <Button onPress={() => console.log('Submitted')} title='Archive Posting' />
      </View>
    </View>
  );
};

export default PostFull;
