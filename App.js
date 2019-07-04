import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Scene, Router} from 'react-native-router-flux'

import Register from './src/Register';
import Login from './src/Login';
import MainPage from "./src/TabBar";
import FuritDetail from './src/components/FuritDetail'

class App extends Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene
          hideNavBar
          key="login"
          component={Login} title="Login"/>
        <Scene
          key="mainpage"
          hideNavBar
          component={MainPage}
        />
        <Scene key="register" component={Register} title="Register"/>
        <Scene key="furitDetail" hideNavBar component={FuritDetail} title="FuritDetail"/>
      </Scene>
    </Router>
  }
}



export default App
