import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReduxers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './app/reducers'
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Login from './src/pages/Login';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

export default class MyApp extends Component {
 
  render() {
    return (
      <Login />
    );
  }
}

const App = () => (
  <Provider store={store}>
    <MyApp />
  </Provider>
);

AppRegistry.registerComponent('MyApp', () => App);
