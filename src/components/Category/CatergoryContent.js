import React, { Component } from 'react';
import { StyleSheet,View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import theme from '../../common/theme';
import CategoryListView from './CategoryListView';
import catetgoryGoodsData from '../../mock/catetgoryGoods';
import NavBar from '../../common/NaviBar'

export default class CategoryContent extends Component {

  render() {
    const { navigation } = this.props;
    return (
      <ScrollableTabView
        tabBarBackgroundColor="white"
        tabBarActiveTextColor={theme.color}
        tabBarTextStyle={styles.tabBarText}
        tabBarUnderlineStyle={styles.tabBarUnderline}
        initialPage={0}>
        {catetgoryGoodsData.map(value => (
          <CategoryListView
            tabLabel={value.title}
            key={value.title}
            itemDatas={value.detail}
            navigation={navigation}
          />
        ))}
      </ScrollableTabView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  tabBarText: {
    fontSize: 14,
    marginTop: 13
  },
  tabBarUnderline: {
    backgroundColor: theme.color
  }
});
