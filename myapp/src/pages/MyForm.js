import React from 'react';
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
  Button,
} from 'react-native';
import { Form, TextValidator } from 'react-native-validator-form';
 
export default class MyForm extends React.Component {
 
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleChange(event) {
        //const email = event.nativeEvent.text;
        //this.setState({ email });
        this.refs.form.submit();
    }
 
    submit() {
        // your submit logic 
    }
 
    handleSubmit() {
        this.refs.form.submit();
    }
 
    render() {
        const { email } = "qwe@qwe";
        return (
            <Form
                ref="form"
                onSubmit={this.handleSubmit}
                style={{marginTop: 80}}
            >
                <TextValidator
                    name="email"
                    label="email"
                    validators={['isEmpty', 'isPositive']}
                    errorMessages={['This field is required', 'Email invalid']}
                    placeholder="Your email"
                    type="text"
                    keyboardType="email-address"
                    value={email}
                    onChange={this.handleChange}
                    style={{height: 80}}
                />
                <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                />
            </Form>
        );
    }
}

AppRegistry.registerComponent('MyForm', () => MyForm);