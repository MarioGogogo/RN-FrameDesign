import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  RefreshControl
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { computed } from 'mobx';
// toast 组件
import Toast from 'react-native-easy-toast';
import NavBar from '../../common/NaviBar'
import theme from '../../common/theme';
// import MessageView from './MessageView';
import {Actions} from 'react-native-router-flux'

export default class ItemDetail extends Component {

  state = {
    num: 0,
    bounceValue: new Animated.Value(1)
  };

  toastRef = React.createRef();

  // 用Mobx的computed方法更加方便
  // @computed get cartCount() {
  //   // return this.props.rootStore.CartStore.allDatas.data.length;
  //   const { rootStore } = this.props;
  //   const { CartStore } = rootStore;
  //   const { foodList } = CartStore;
  //   return foodList.length;
  // }

  addNum = () => {
    let { num } = this.state;
    this.setState({
      num: (num += 1)
    });
  };

  reduceNum = () => {
    let { num } = this.state;
    if (num <= 0) return;
    this.setState({
      num: (num -= 1)
    });
  };

  // 跳转到购物车页面
  goCartPage = () => {
    const { navigation } = this.props;
    // 跳转时，传一个params来动态设置购物车的header
    // navigation.navigate('CartScreen');
  };

  addCart = value => {
    const { num, bounceValue } = this.state;
    if (num === 0) {
      this.toastRef.current.show('添加数量不能为0哦~');
      return;
    }
    // 加入购物车页面的列表上
    // 点一次，购物车数据同步刷新
    // this.state.bounceValue.setValue(1.5);
    bounceValue.setValue(1.5);
    Animated.spring(
      // 可选的基本动画类型: spring, decay, timing
      bounceValue, // 将`bounceValue`值动画化
      {
        toValue: 1, // 将其值以动画的形式改到一个较小值
        friction: 1 // Bouncier spring
      }
    ).start(); // 开始执行动画

    // this.updateCartScreen(value);
    this.toastRef.current.show('添加成功^_^请前往购物车页面查看');
  };

  // 同步更新购物车页面的数据
  // updateCartScreen(value) {
  //   const { num } = this.state;
  //   const { navigation, rootStore } = this.props;
  //   const { value: val } = navigation.state.params;
  //   const { name } = val;
  //   // 判断购物车页面是否存在同样名字的物品
  //   const { CartStore } = rootStore;
  //   const itemData = value;
  //   // 找出索引
  //   const index = CartStore.foodList.findIndex(e => e.name === name);
  //   // 不存在
  //   if (index === -1) {
  //     // 增加需要用到的字段
  //     itemData.count = 0;
  //     itemData.isSelected = true;
  //     CartStore.foodList.push(value);
  //     const { length } = CartStore.foodList;
  //     CartStore.foodList[length - 1].count += num;
  //   } else {
  //     // 增加对应name的count
  //     CartStore.foodList[index].count += num;
  //   }
  // }

  render() {
    // console.log(this.props.navigation.state.params) //普通路由传值
    console.log(this.props.value)   //获取 路由传过来的值
    const { num, bounceValue } = this.state;

    const { name, price, image } = this.props.value;
    const count = this.cartCount;
    const refreshCon = (
      <RefreshControl
        refreshing={false}
        tintColor="#000000"
        title="loading"
        colors={['#000000']}
        progressBackgroundColor="#ffffff"
        enabled
      />
    );
    return (
      <View>
        <NavBar title={"商品详情"} onBack={()=>{Actions.pop()}}/>
        <View><Text>123</Text></View>
        <ScrollView style={styles.container} refreshControl={refreshCon}>
          <View style={styles.topWrapper}>
            {/*<View style={styles.imgWrapper}>*/}
              {/*<Image source={image} style={styles.image} />*/}
            {/*</View>*/}
            <View style={styles.chooseLine}>
              <Text style={styles.number}>数量 {num}</Text>
              <TouchableOpacity style={styles.button} onPress={this.addNum}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.reduceNum}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { paddingLeft: 24, paddingRight: 10 }]}
                onPress={() => this.addCart(value)}>
                <Text style={styles.buttonText}>加入购物车 ☝</Text>
              </TouchableOpacity>
            </View>

            <Animated.View
              style={[styles.cart2, { transform: [{ scale: bounceValue }] }]}>
              <TouchableOpacity onPress={this.goCartPage}>
                <Image
                  source={require('../../img/cart2.png')}
                  style={{ height: 45, width: 45 }}
                />
              </TouchableOpacity>
            </Animated.View>

            {/* 购物车商品数量为0不出现 */}
            {count === 0 ? null : (
              <View style={styles.circle}>
                <Text
                  style={{
                    fontSize: 16,
                    color: theme.fontColor
                  }}>
                  {count}
                </Text>
              </View>
            )}
            <View style={styles.message}>
              <Text>有货</Text>
              <Text style={{ fontSize: 18, paddingTop: 5 }}>{name}</Text>
              <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 10 }}>
                ￥{price}
                /500g
              </Text>
            </View>
          </View>

          <View style={styles.bottomWrapper}>
            {/*<MessageView />*/}
          </View>

          <Toast
            ref={this.toastRef}
            position="center"
            positionValue={0}
            fadeInDuration={650}
            fadeOutDuration={600}
            opacity={0.8}
          />
        </ScrollView>
      </View>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column'
    // backgroundColor: '#ffffff'
    // backgroundColor: '#F5F6F5'
  },
  topWrapper: {
    flexDirection: 'column',
    backgroundColor: '#ffffff'
  },
  bottomWrapper: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#ffffff'
  },
  imgWrapper: {
    marginTop: 30,
    alignSelf: 'center'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  chooseLine: {
    marginTop: 60,
    height: 65,
    backgroundColor: theme.color,
    borderRadius: 30,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  number: {
    fontSize: 16,
    color: theme.fontColor,
    marginLeft: 35,
    marginRight: 10
  },
  button: {
    paddingLeft: 20,
    paddingRight: 20
  },
  buttonText: {
    fontSize: 16,
    color: theme.fontColor
  },
  cart2: {
    height: 45,
    width: 45,
    position: 'absolute',
    top: 20,
    right: 30
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: theme.color,
    position: 'absolute',
    top: 18,
    right: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cart1: {
    height: 30,
    width: 30
  },
  message: {
    paddingTop: 20,
    alignItems: 'center'
  }
});
