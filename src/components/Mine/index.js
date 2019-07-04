import React,{Component} from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
import Header from './Header';
import Order from './Order';
import NavBar from '../../common/NaviBar'
const RefreshCon = (
  <RefreshControl
    refreshing={false}
    tintColor="#000000"
    title="loading"
    colors={['#000000']}
    progressBackgroundColor="#ffffff"
    enabled
  />
);


const MineScreen = ({ navigation }) => (
  <ScrollView
    style={styles.container}
    refreshControl={RefreshCon}>
    <NavBar title={"设置"}/>
    <Header />
    <Order navigation={navigation} style={styles.order} />
  </ScrollView>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  order: {
    marginTop: 10
  }
});

export default MineScreen;
