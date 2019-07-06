import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux'
import NewGoodsItem from './NewGoodsItem';
import { width } from '../../common/screen';

const NewGoodsView = ({ itemDatas, navigation }) => (
  <View style={styles.container}>
    {itemDatas.map((value, index) => (
      <NewGoodsItem
        onPress={() => Actions.push('furitDetail', { value })}
        name={value.name}
        price={value.price}
        image={value.image}
        /* eslint-disable-next-line */
        key={`list-${index}`}
      />
    ))}
  </View>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    width: (width - 40) / 2,
    height: 150,
    flexDirection: 'column',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#f5f6f5',
    borderRadius: 20
  },
  image: {
    width: 100,
    height: 100
  }
});

export default NewGoodsView;
