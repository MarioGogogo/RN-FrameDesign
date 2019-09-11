import React, {Component} from 'react';
import {StyleSheet,Text,View,Dimensions,TouchableOpacity,Animated,Image,Easing} from 'react-native';

let width = Dimensions.get("window").width;


export default class Opacity extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fadeOutOpacity: new Animated.Value(1),
    }

    this.fadeOutAnimated = (value) =>{
       return Animated.timing(
         this.state.fadeOutOpacity,
         {
           toValue: value,  //透明度动画最终值
           duration: 3000,   //动画时长3000毫秒
           easing: Easing.ease,
         }
       );
    }
  }

// {
//   duration：动画持续的时间（单位是毫秒），默认为500。
//   easing：一个用于定义曲线的渐变函数。Easing模预置了 linear、ease、elastic、bezier 等诸多缓动特性。iOS默认为Easing.inOut(Easing.ease)，。
//   delay：开始动画前的延迟时间（毫秒），默认为0。
// }
  _startAnimated() {
    console.log(this.state.fadeOutOpacity)
    if(this.state.fadeOutOpacity){
      this.fadeOutAnimated(0).start()
    }else{
      this.fadeOutAnimated(1).start()
    }

      // this.fadeOutAnimated.start(() => this.state.fadeOutOpacity.setValue(1));


  }

  render(){
    return (
      <View style={styles.mainStyle}>
        <Animated.View style={{width: 200, height: 300, opacity: this.state.fadeOutOpacity}}>
          <Image ref="image" style={{width:200,height:300}}
                 source={require('./s.png')}>
          </Image>
        </Animated.View>
        <Text>距离</Text>
        <Text>距离</Text>
        <Text>距离</Text>
        <Text>距离</Text>
        <Text>距离</Text>
        <Text>距离</Text>
        <Text>距离</Text>
        <Text>距离</Text>
        <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
          <Text style={{width:200,height:100,textAlign:'center',lineHeight:100}}>点击开始动画</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


// 构建样式
const styles = StyleSheet.create({

})
