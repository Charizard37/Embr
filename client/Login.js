import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';

import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Button,
	Image,
	Linking,
	WebBrowser,
} from 'react-native';

const logoImage = require('./assets/githublogo.png');

const Login = ({ loggedIn, userLogin }) => {
	const [authResult, setAuthResult] = useState(loggedIn);

	const url = 'http://localhost:3000/ghlogin';

	const handleAuth = () => {
		Linking.openURL(url);
		// set the state
		userLogin(!loggedIn);
	};

	return (
		<ScrollView>
			<SafeAreaView style={styles.container}>
				<Text style={styles.baseText}>
					<Text style={styles.titleText}>embr</Text>
				</Text>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							style={styles.button}
							testID="loginButton"
							onPress={handleAuth}
							title="Login with GitHub"
						/>
						<Image source={require('./assets/githublogo.png')} />
					</View>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	button: {
		width: 300,
		height: 40,
		marginTop: 25,
	},
	baseText: {
		fontFamily: 'Cochin',
	},
	titleText: {
		fontSize: 26,
		fontWeight: 'bold',
	},
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 100,
	},
});

export default Login;
