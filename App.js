/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Text, View, Image, Button, TextInput } from 'react-native';

class HelloInput extends Component {
	
	constructor(props){
		super(props);
		this.state = {helloText: ''};
	}

	updateText(text) {
		this.setState(prevstate => ({helloText: text}));
	}

	render() {
		return (
			<View style={{justifyContent: "center", alignItems: "center", marginVertical: 20}}>
				<Text style={{fontSize: 18}}>Üdv, {this.state.helloText}!</Text>
				<View style={{flexDirection: 'row'}}>
					<TextInput style={{width: 150}} placeholder="Név" onChangeText={(text) => this.input = text} />
					<Button onPress={() => (this.updateText(this.input))}
						title="Küldés"/>
				</View>
			</View>
		);
	}

}

export default class MedicallTest extends Component {

	render() {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Image source={require('./images/logo.png')} style={{backgroundColor: 'gray', width: 115, height:30}} />
				<HelloInput />
			</View>
		);
	}
}
