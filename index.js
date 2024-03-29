import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import Demo from './demo/demo6'
import {name as appName} from './app.json';
import { Provider } from 'mobx-react'
import stores from './src/mobx/store'


export default class Root extends Component {
  render() {
    return (
      <Provider {...stores}>
         <Demo/>
      </Provider>
    );
  }
}

console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];

console.disableYellowBox = true // 关闭全部黄色警告


AppRegistry.registerComponent(appName, () => Root);
