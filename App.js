import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Scene, Router} from 'react-native-router-flux'
import Home from './src/Home';
import Register from './src/Register';
import Login from './src/Login';
import Profile from './src/Profile'
import MainPage from "./src/TabBar";

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
        <Scene key="home" component={Home}/>
        <Scene key="profile" component={Profile}/>
      </Scene>
    </Router>
  }
}



export default App
