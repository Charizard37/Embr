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
	Image,
} from 'react-native';

const ghLogo = require('./assets/githublogo.png');

const Login = ({ loggedIn, userLogin }) => {
	const [authenticated, setLogin] = useState(false);
	const [context, setContext] = useState(null);

	const aunthenticate = () => {};

	return (
		<ScrollView>
			<SafeAreaView style={styles.container}>
				<Text>Embr</Text>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							style={styles.button}
							testID="loginButton"
							// onPress={async () => {
							// 	this.login();
							// }}
							title="Login with GitHub"
						/>
					</View>
				</View>
				{/* {this.renderButtons()} */}
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.context}
				>
					<Text>{context}</Text>
				</ScrollView>
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
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 100,
	},
});

export default Login;
