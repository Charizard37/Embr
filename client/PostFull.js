import React, { useState } from 'react';
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
  const [appStatus, setAppStatus] = useState('');
  const [checked, setCheck] = useState(true);

  const companyLogo = route.params.logo;
  const { jobObj } = route.params;
  const { applied, phoneScreen, interview, takeHome, doubleDown } = jobObj;

  console.log(applied, phoneScreen);

  //   useEffect(() => {
  //       fetch('http://localhost:3000', {
  //           method: 'POST',
  //           body: JSON.stringify(username),
  //           headers: {'Conent-Type': 'application/json'}
  //       })
  //       .then(data => data.json())
  //       .then(data => {
  //           console.log("DATAAAAA", data)
  //           // setJobArray(data.jobs);
  //       })
  //   }, [])
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
      <View style={styles.fullNotes}>
        <View style={styles.checkContainer}>
          <Text style={{ fontSize: 24 }}>Applied</Text>
          <CheckBox value={applied} disabled={false} onValueChange={() => setCheck(!checked)} />
        </View>
        <View style={styles.checkContainer}>
          <Text style={{ fontSize: 24 }}>Double Down</Text>
          <CheckBox disabled={doubleDown} onValueChange={() => setCheck(!checked)} />
        </View>
        <View style={styles.checkContainer}>
          <Text style={{ fontSize: 24 }}>Phonescreen</Text>
          <CheckBox disabled={phoneScreen} onValueChange={() => setCheck(!checked)} />
        </View>
        <View style={styles.checkContainer}>
          <Text style={{ fontSize: 24 }}>Interview</Text>
          <CheckBox disabled={interview} onValueChange={() => setCheck(!checked)} />
        </View>
        <View style={styles.checkContainer}>
          <Text style={{ fontSize: 24 }}>Takehome</Text>
          <CheckBox disabled={takeHome} onValueChange={() => setCheck(!checked)} />
        </View>

        {/* Phonescreen, Interview, Takehome, DoubleDowns Checkboxes*/}
      </View>
      <View>
        <TextInput
          style={styles.textInputStyle}
          placeholder='Notes'
          onChangeText={(text) => console.log(text)}
          multiline={true}
        ></TextInput>
        <Button onPress={() => console.log('Submitted')} title='Save Changes' />
      </View>
    </View>
  );
};

export default PostFull;
