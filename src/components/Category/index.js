import React, { Component } from 'react';
import { StyleSheet,View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import theme from '../../common/theme';
import CategoryListView from './CategoryListView';
import catetgoryGoodsData from '../../mock/catetgoryGoods';
import NavBar from '../../common/NaviBar'

import CatergoryContent from './CatergoryContent'

export default class CategoryScreen extends Component {

  render() {
    const { navigation } = this.props;
    return (
       <View style={styles.container}>
         <NavBar
           title={'购物车'}
         />
         <CatergoryContent/>
       </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff'
  },

});
