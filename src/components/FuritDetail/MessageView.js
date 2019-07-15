import React,{Component} from 'react';
import { View, Text } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { inject, observer } from "mobx-react";

@inject("loginStore")
@observer
export default class MessageView extends Component{
    render() {
      const { loginStore } = this.props;
      return (
        <ScrollableTabView
        style={{ flex: 1, height: 300 }}
        tabBarBackgroundColor="white"
        tabBarActiveTextColor={loginStore.defaultTheme}
        tabBarTextStyle={{ fontSize: 14, marginTop: 13 }}
        tabBarUnderlineStyle={{ backgroundColor: loginStore.defaultTheme }}
        initialPage={0}>
        {['商品详情', '网友评价', '猜你喜欢'].map(v => (
          <List tabLabel={v} message={v} key={v} />
        ))}
      </ScrollableTabView>
      );
    }
}

const List = ({ message }) => (
  <View style={{ flex: 1 }}>
    
    <Text>{message}</Text>
  </View>
);