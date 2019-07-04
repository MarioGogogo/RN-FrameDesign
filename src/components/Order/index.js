import React, { Component } from "react";
import { View, FlatList, StyleSheet, SafeAreaView, Text } from "react-native";
import { observer, inject } from "mobx-react";
import { computed } from "mobx";
import OrderList from "./OrderList";
import NaviBar from '../../common/NaviBar'
import {Actions, Scene, Router} from 'react-native-router-flux'


 class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OrderData: []
    };
  }

  // 解决安卓机标题偏右问题
  static navigationOptions = {
    headerRight: <View />
  };

  renderItem = ({ item }) => <OrderList item={item} />;

  keyExtractor = (item, index) => `item-${index}`;


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NaviBar
          title={'购物车'}
        />
        {this.state.OrderData.length ? (
          <FlatList
            data={this.OrderData}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>订单空空如也~</Text>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default OrderScreen
