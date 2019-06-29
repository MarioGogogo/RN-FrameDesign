import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux'
import { inject, observer } from 'mobx-react';

@inject('loginStore')
@observer
export default class Home extends Component {
  jumpToHome = () => {
    Actions.profile({key:"value"})
  }
    render() {
      const {loginStore} = this.props;

      return (
        <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.jumpToHome}>主页</Text>
          <Text style={styles.welcome} >{loginStore.username}</Text>
          <Text style={styles.welcome} >{loginStore.password}</Text>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
