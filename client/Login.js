import 'react-native-gesture-handler';
import React, { useState, useCallback } from 'react';
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

import { authenticate } from 'passport';

const Login = ({ loggedIn, userLogin }) => {
	const [authenticated, setAuth] = useState(false);
	const [context, setContext] = useState(null);

	const aunthenticate = async () => {
		const redirectUrl = await Linking.getInitialURL();
		const authUrl = 'http://localhost:3000/ghlogin';

		try {
			const authResult = await WebBrowser.openAuthSessionAsync(
				authUrl,
				redirectUrl
			);
			await setAuth(true);
		} catch (err) {
			console.log('Error', err);
		}
	};

	return (
		<ScrollView>
			<SafeAreaView style={styles.container}>
				<Text style={styles.baseText}>
					<Text style={styles.titleText}>Embr</Text>
				</Text>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							style={styles.button}
							testID="loginButton"
							// onPress={() => {
							// 	fetch('http://localhost:3000/ghlogin')
							// 		.then((res) => res.json())
							// 		.then((data) => console.log(data, 'data'))
							// 		.catch((err) => console.log(err));
							// }}
							onPress={authenticate}
							title="Login with GitHub"
						/>
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
