import React, { useState } from 'react';
import styles from "./styles.js";

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

const companyLogo = 'twitter.png';

const PostFull = ({ navigation }) => {
  const [jobArray, setJobArray] = useState({});
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
        <View style={styles.rowContainer}>
            <View>
                <Text style={styles.CompanyNameFull}>Company Name</Text>
                <Text style={styles.JobTitleFull}>Job Title</Text>
            </View>
            <Image style={styles.logo} source={require(`./assets/${companyLogo}`)} />
        </View>
        
        
        
        <Text>STATUS</Text>
        {/* Alex's status picking element here*/}



        {/* Phonescreen, Interview, Takehome, DoubleDowns Checkboxes*/}

        <View style={styles.rowContainer}>
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle} placeholder="Type here to translate!" onChangeText={(text) => console.log(text)}  ></TextInput>
                <Button onPress={() => console.log("Submitted")} title="Submit"/>  
            </View>
        </View>
        
    </View>
  );
};

export default PostFull;