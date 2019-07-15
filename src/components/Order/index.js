import React, { Component } from "react";
import { View, FlatList, StyleSheet, SafeAreaView, Text } from "react-native";
import { observer, inject } from "mobx-react";
import { computed } from "mobx";
import OrderList from "./OrderList";
import NaviBar from '../../common/NaviBar'
import {Actions } from 'react-native-router-flux'



@inject("cartStore")
@observer
 class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OrderData: []
    };

  }

 
  renderItem = ({ item }) => <OrderList item={item} />;

  keyExtractor = (item, index) => `item-${index}`;


  render() {
    const {cartStore,from} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <NaviBar
          title={'购物车'}
          onBack={from && from === "detail" ? ()=>{Actions.pop()} :false }
        />
        {cartStore.getCartLength ? (
          <FlatList
            data={cartStore.foodsList.slice()}
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
