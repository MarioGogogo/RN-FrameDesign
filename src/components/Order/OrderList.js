import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import formatTime from '../../common/formatTime';

const OrderList = ({ item }) => {
  console.log('item',item);
  console.log(item.name,item.count);
  
  
  // const date = formatTime(item.date);
  const date = "1998-12-12"
  return (
    <View style={styles.container}>
      <View style={styles.dateLine}>
        <Text>{date}</Text>
      </View>
      <View style={styles.goodsContainer}>
        {item.data.map((e) => (
          <View key={e.name}>
            <Text>{`${e.name}  x${e.count}/500g`}</Text>
          </View>
        ))}
      </View>
      <View style={styles.moneyLine}>
        <Text style={styles.moneyText}>{`总价: ￥${item.totalMoney}`}</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 10
  },
  goodsContainer: {
    flex: 1,
    paddingLeft: 10
  },
  dateLine: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10
  },
  moneyLine: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20
  },
  moneyText: {
    fontSize: 18
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc'
  }
});

export default OrderList;
