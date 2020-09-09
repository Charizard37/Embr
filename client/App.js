import React from 'react';
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

const App = () => {
  return (
    <>
      <SafeAreaView>
        <View>
          <Button title='Press Me' onPress={() => Alert.alert('Simple Button pressed')}></Button>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
