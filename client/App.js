
import 'react-native-gesture-handler';
import React, { useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Archive from './Archive';
import Menu from './Menu.js';
import AddPosting from './AddPosting';
import PostFull from './PostFull.js';

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
} from 'react-native';

const RootStack = createStackNavigator();


// const authUrl = 'http://localhost:3000/ghlogin';

// const OpenGitHubOAuthButton = (url) => {
// 	const handlePress = useCallback(async () => {
// 		const supported = await Linking.canOpenURL(url);
// 		if (supported) {
// 			await Linking.openURL(url);
// 		} else {
// 			Alert.alert(`Invalid URL: ${url}`);
// 		}
// 	}, [url]);
// 	return <Button title="Login with GitHub" onPress={handlePress} />;
// };

const App = () => {
  const [loggedIn, userLogin] = useState(true);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name='Home' component={Home} options={{ title: 'Embr' }} />
        <RootStack.Screen name='Menu' component={Menu} options={{ title: 'Menu' }} />
        <RootStack.Screen name='PostFull' component={PostFull} options={{ title: 'Details' }} />
        <RootStack.Screen
          name='Add Posting'
          component={AddPosting}
          options={{ title: 'New Job Posting' }}
        />
        <RootStack.Screen
          name='Archive'
          component={Archive}
          options={{ title: 'Archived Postings' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
