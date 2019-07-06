import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { width } from "../../common/screen";

import HomeSwiper from "./HomeSwiper";
import ThemeLine from './ThemeLine';
import NewGoodsView from './NewGoodsView';

// 引入mock数据
import newGoodsData from '../../mock/newGoods';

// 引入打乱数组函数
import Disturb from '../../common/disturbArray';
// 轮播图片
const imageSources = [
    require('../../img/i1.png'),
    require('../../img/i2.png'),
    require('../../img/i3.png')
  ];

export default class HomeScreen extends Component {
  // 默认值设置
  static defaultProps = {};
  // 初始化state
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      const {navigation} = this.props;
      
        // 打乱数组
  const data = Disturb(newGoodsData.data);
    return (
      <ScrollView style={styles.container}>
        <View style={styles.swiper}>
        <HomeSwiper imageSources={imageSources} />
        </View>
        <ThemeLine name="最近新品" />
        <NewGoodsView itemDatas={data} navigation={navigation} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  swiper: {
    width,
    height: 200
  },
  image: {
    width,
    height: 200,
    resizeMode: "stretch"
  },
  line: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});
