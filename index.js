import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'mobx-react'
import stores from './src/mobx/store'


export default class Root extends Component {
  render() {
    return (
      <Provider {...stores}>
         <App/>
      </Provider>
    );
  }
}


AppRegistry.registerComponent(appName, () => Root);
