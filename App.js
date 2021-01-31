import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Chat from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

export default class App extends React.Component {
	render(){
	  return (
		<NavigationContainer>
		  <Navigator initialRouteName="Home">
			<Screen name="Home" component={Home} options={{title: 'ChatApp'}}/>
			<Screen name="Chat" component={Chat} options={{title: 'ChatApp'}}/>
		  </Navigator>
		</NavigationContainer>
	  );
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
