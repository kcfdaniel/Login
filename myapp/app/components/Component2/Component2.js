import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Component2 extends Component {
    onPress(){
        console.log('Area Pressed');
    }

    onPress2(){
        console.log('Area2 Pressed')
    }
    render() {
        return (
        <View>  
            <View style={styles.myView}>
                <Text style={styles.myText}>Hello Daniel</Text>
            </View>
            <View style={styles.container}>
                <TouchableHighlight 
                    style={styles.v1} 
                    onPress={this.onPress} 
                    underlayColor="blue"
                    >
                    <View>
                        <Text>View 1</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity 
                    style={styles.v1} 
                    onPress={this.onPress2} 
                    >
                    <View>
                        <Text>View 1</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
myView: {
    backgroundColor:'blue'
},
myText: {
    color: 'white'
},
container: {
    flexDirection:'row',
    height:100
},
v1: {
    flex:1,
    backgroundColor:'red',
    padding:10
},
});


AppRegistry.registerComponent('Component2', () => Component2);
