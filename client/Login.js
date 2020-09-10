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
} from 'react-native';

const logoImage = require('./assets/logo1.png');

const Login = ({ loggedIn, userLogin }) => {
	const [authResult, setAuthResult] = useState(false);
	console.log(userLogin, 'in login');
	const url = 'http://localhost:3000/ghlogin';

	const handleAuth = async () => {
		await Linking.openURL(url);
		// set the state
		userLogin(true);
	};

	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require('./assets/logo1.png')} />
			<Text style={styles.baseText}></Text>
			<View style={styles.buttonContainer}>
				<View style={styles.button}>
					<Button
						style={styles.button}
						testID="loginButton"
						onPress={handleAuth}
						title="Login with GitHub"
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: 'black',
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
	logo: {
		width: 420,
		height: 100,
	},
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 100,
		backgroundColor: 'black',
	},
});

export default Login;
