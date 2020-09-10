import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    container: {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    containerFull: {
      marginTop: 10,
      marginBottom: 10,
      marginRight: 10,
      marginLeft: 10,
  },
    imageContainer: {
      marginTop: 10,
      alignItems: "center",
    },
    PostCardFrame: {
        borderWidth: 1,
        borderColor: "black",
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        maxHeight: 175,
        maxWidth: 175,
    },
    CompanyName: {
      marginTop: 5,
      marginBottom: 5,
      marginRight: 5,
      marginLeft: 5,
      color: "black",
      textAlign: "center",
    },
    JobTitle: {
      marginTop: 5,
      marginBottom: 5,
      marginRight: 5,
      marginLeft: 5,
      color: "grey",
      textAlign: "center",
    },
    CompanyNameFull: {
      marginTop: 5,
      marginBottom: 5,
      marginRight: 5,
      marginLeft: 5,
      color: "black",
      textAlign: "left",
      fontSize: 40,
    },
    JobTitleFull: {
      marginTop: 5,
      marginBottom: 5,
      marginRight: 5,
      marginLeft: 5,
      color: "grey",
      textAlign: "left",
      fontSize: 30,
    },
    logo: {
      maxHeight: 75,
      maxWidth: 75,
      justifyContent: "center",
      alignItems: "center",
    },
    rowContainer: {
      flexDirection: "row",
    },
    textInputStyle: {
      height: 40,
      backgroundColor: 'azure', 
      fontSize: 20
    }  
    
  });

  export default styles;