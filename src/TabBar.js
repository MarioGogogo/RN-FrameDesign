
import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator'
import  Home from './Home'
import Profile from './Profile'
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default class MainPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'AppStore'
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            //设置选中的位置
            selected={this.state.selectedTab === 'AppStore'}
            //标题
            title="AppStore"
            //标题样式
            titleStyle={styles.tabText}
            badgeText={''}
            //选中时标题文字样式
            selectedTitleStyle={styles.selectedTabText}
            //图标
            renderIcon={() => <Icon
              name="ios-home"
              size={30}   //图片大小
              color={'#6792ff'}
            />}
            //选中时图标
            renderSelectedIcon={() => <Icon
              name="ios-home"
              size={30}   //图片大小
              color={'#f64720'}
            />}
            //点击Event
            onPress={() => this.setState({ selectedTab: 'AppStore' })}>
            <Home/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Log'}
            title="Log"
            badgeText={'2'}
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Icon
              name="ios-albums"
              size={30}   //图片大小
              color={'#6792ff'}
            />}
            renderSelectedIcon={() => <Icon
              name="ios-albums"
              size={30}   //图片大小
              color={'#f64720'}
            />}
            onPress={() => this.setState({ selectedTab: 'Log' })}>
            <Profile/>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Device'}
            title="Device"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Icon
              name="ios-heart"
              size={30}   //图片大小
              color={'#6792ff'}
            />}
            renderSelectedIcon={() => <Icon
              name="ios-heart"
              size={30}   //图片大小
              color={'#f64720'}
            />}
            onPress={() => this.setState({ selectedTab: 'Device' })}>
            <View style={styles.page1}>
              <Text style={{fontSize:18,padding:15,color: '#fff'}}>This is Device Page</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'User'}
            title="User"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Icon
              name="ios-person"
              size={30}   //图片大小
              color={'#6792ff'}
            />}
            renderSelectedIcon={() => <Icon
              name="ios-person"
              size={30}   //图片大小
              color={'#f64720'}
            />}
            onPress={() => this.setState({ selectedTab: 'User' })}>
            <View style={styles.page1}>
              <Text style={{fontSize:18,padding:15,color: '#fff'}}>This is User Page</Text>
            </View>
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
    color: 'red'
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
