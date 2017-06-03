import React, { Component } from 'react';
 
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import MyForm from '../components/MyForm';
import t from 'tcomb-form-native';
var Form = t.form.Form;

var Person = t.struct({
  Email: t.String,              // a required string
  Password: t.String,  // an optional string
});

var options = {};

export default class Login extends Component {
    press() {
        
    //execute any code here
}

  onPress() {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  }

    submit = (values) => {
        console.log(values);
    }
    render() {
        return (
        <View>
            <View style={styles.backHeader}>
                <TouchableOpacity>
                    <Image style={styles.backArrow} source={require('../img/arrow.png')}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scroll}>
                <Container>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                        placeholder="Password"
                    />
                </Container>
                <Container>
                    <Button 
                        label="LOGIN"
                        styles={{button: styles.loginButton, label: [styles.buttonWhiteText,styles.buttonBigText]}} 
                        onPress={this.press.bind(this)} />
                </Container>
                <View style={styles.footer}>
                    <Container>
                        <Button 
                            label="Don't have an account?"
                            styles={{label: styles.buttonText}} 
                            onPress={this.press.bind(this)} />
                        <Button 
                            label="SIGN UP"
                            styles={{button: styles.signUpButton, label: [styles.buttonBlueText,styles.buttonBigText]}} 
                            onPress={this.press.bind(this)}>
                        </Button>
                        <Button 
                            label="Forgot Password"
                            styles={{label: styles.buttonText}} 
                            onPress={this.press.bind(this)} />
                    </Container>
                </View>
            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#FFFFFF',
        padding: 45,
        flexDirection: 'column'
    },
    backHeader: {
        backgroundColor: '#191970',
        padding: 15,
    },
    backArrow: {
        height: 25,
        width: 25,
    },
    label: {
        color: '#0d8898',
        fontSize: 20
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    textInput: {
        height: 80,
        fontSize: 20,
        backgroundColor: '#FFF'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    buttonText: {
        fontSize: 20,
        color: '#00ced1'
    },
    loginButton: {
        backgroundColor: '#00ced1',
        borderRadius:10,
    },
    signUpButton: {
        borderColor: '#00ced1',
        borderRadius:10,
        borderWidth: 2,
    },
    buttonBlueText: {
        fontSize: 20,
        color: '#00ced1'
    },
    buttonBigText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    footer: {
        marginTop: 20
    },
});

AppRegistry.registerComponent('Login', () => Login);