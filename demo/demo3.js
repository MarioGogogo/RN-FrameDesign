import React, {Component} from 'react';
import {StyleSheet,Text,View,Dimensions,TouchableOpacity,Animated,Image,Easing} from 'react-native';

let width = Dimensions.get("window").width;

export default class AnimatedSpring extends Component {
  constructor(props) {
    super(props);

    this.state = {
      springValue: new Animated.Value(1), //.首先实例化动画的初始值 springValue，作为图片的初始 scale 大小。
    };

    this.springAnimated = Animated.spring(  //把它赋予 this. springAnimated 变量。
      this.state.springValue,
      {
        toValue: 1,
        friction: 9,    //弹跳系数
        tension: 17,   // 控制速度
      }
    );
  }

  _startAnimated() {
    this.state.springValue.setValue(0.1); //在动画开启之前把 scale 调到0.1，然后调用 this. springAnimated.start() 方法开启动画。
    this.springAnimated.start();
  }

  render(){
    return (
      <View style={styles.mainStyle}>
        <Text>高度</Text>
        <Text>高度</Text>
        <Text>高度</Text>
        <Text>高度</Text>
        <Text>高度</Text>
        <Text>高度</Text>
        <Text>高度</Text>
        <Text>高度</Text>
        <Animated.View
          style={{
            width: 282,
            height: 51,
            transform:[
              {scale:this.state.springValue}
            ]
          }}
        >
          <Image ref="image" style={{width:282,height:51}}
                 source={require("./s.png")}>
          </Image>
        </Animated.View>

        <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
          <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>点击开始动画</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
// 构建样式
const styles = StyleSheet.create({
  mainStyle:{
    flex:1
  }
})
