
import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator'
import  Home from '../src/components/Home'
import  Category from '../src/components/Category'
import  Order from '../src/components/Order'
import Mine from '../src/components/Mine'
import Profile from './Profile'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Theme from './common/theme'
import { inject, observer } from 'mobx-react';


@inject('loginStore')
@observer
export default class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'AppStore'
    }
  }

  render() {
    const {loginStore} = this.props
    return (
      <SafeAreaView style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            //设置选中的位置
            selected={this.state.selectedTab === 'AppStore'}
            //标题
            title="主页"
            //标题样式
            titleStyle={styles.tabText}
            badgeText={''}
            //选中时标题文字样式
            selectedTitleStyle={styles.selectedTabText}
            //图标
            renderIcon={() => <Icon
              name="ios-home"
              size={30}   //图片大小
              color= {loginStore.getDefalutColor}
            />}
            //选中时图标
            renderSelectedIcon={() => <Icon
              name="ios-home"
              size={30}   //图片大小
              color= {Theme.activeColor}
            />}
            //点击Event
            onPress={() => this.setState({ selectedTab: 'AppStore' })}>
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Log'}
            title="分类"
            badgeText={'2'}
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Icon
              name="ios-albums"
              size={30}   //图片大小
              color= {loginStore.defaultTheme}
            />}
            renderSelectedIcon={() => <Icon
              name="ios-albums"
              size={30}   //图片大小
              color= {Theme.activeColor}
            />}
            onPress={() => this.setState({ selectedTab: 'Log' })}>
            <Category/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Device'}
            title="购物车"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Icon
              name="ios-heart"
              size={30}   //图片大小
              color= {loginStore.defaultTheme}
            />}
            renderSelectedIcon={() => <Icon
              name="ios-heart"
              size={30}   //图片大小
              color= {Theme.activeColor}
            />}
            onPress={() => this.setState({ selectedTab: 'Device' })}>
            <Order/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'User'}
            title="我的"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Icon
              name="ios-person"
              size={30}   //图片大小
              color= {loginStore.defaultTheme}
            />}
            renderSelectedIcon={() => <Icon
              name="ios-person"
              size={30}   //图片大小
              color= {Theme.activeColor}
            />}
            onPress={() => this.setState({ selectedTab: 'User' })}>
            <Mine/>
          </TabNavigator.Item>
        </TabNavigator>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f0f0f0",

  },
  tabText: {
    marginTop:-3,
    fontSize: 10,
    color: 'black'
  },
  selectedTabText: {
    marginTop:-3,
    fontSize: 10,
    color: Theme.color
  },
  icon: {
    width: 22,
    height: 22
  },
  page0: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  page1: {
    flex: 1,
    backgroundColor: 'blue'
  }
})
