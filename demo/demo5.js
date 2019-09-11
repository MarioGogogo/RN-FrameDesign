/**
 * Created by Dongtao on 02/07/2018.
 */
import React, {PureComponent} from 'react'
import {
  View,
  StyleSheet,
  Platform,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  AppState,
  NativeAppEventEmitter,
  Animated,
  Text,
  Easing
} from 'react-native';

const { width,height } = Dimensions.get('window');
export default class JDtest extends PureComponent {
  constructor(props) {
    super(props);

    this.state={
      data:[1,2,3,4],
      fadeInOpacity:new Animated.Value(0),//初始化一个动画对象
      animValue: new Animated.Value(1),
      active:-1,
      yPosition: 0.0,//标志位，记录当前value
      maxHeight:[100,200,300,400] ,  //一定要这样写
      initHeight:new Animated.Value(0),
      fadeAnim: new Animated.Value(1.0),
    }
  }

  componentDidMount() {
    // this.translateX(this.callbackfun.bind(this))
  }


  callbackfun(){
    console.log('0000000')
  }


  _setActiveIndex=(index)=>{

    this.setState({
      active:index
    })
  }

  render (){
    console.log('maxHeight',this.state.maxHeight)
    return (
      <View style={styles.container}>
        <Text>高度</Text>
        <Text>高度</Text>
        <Text>高度</Text>
        <Text>高度</Text>
        {
           this.state.data.map((item,index)=>
             (<Item
               key={index}
               index={index}
               item={item}

               active={this.state.active}
               setActiveIndex={this._setActiveIndex}
             />)
           )
        }
      </View>
    )
  }


}


//===============item========


class Item extends PureComponent{
    constructor(props){
       super(props)
       this.state={
         fadeInOpacity:new Animated.Value(0),//初始化一个动画对象
         animValue: new Animated.Value(1),
         yPosition: 0.0,//标志位，记录当前value
         maxHeight:[50,100,200,250] ,  //一定要这样写
         initHeight:new Animated.Value(0),
         fadeAnim: new Animated.Value(1.0),
       }
    }

    componentDidMount(): void {

    }

  translateX=(index)=>{
    //判断是否有没有收拢的对象
    if(this.props.active >= 0 && this.props.active != index){
      console.log('找到其他没有收拢',this.props.active)

      //如何收拢那个展开的item????
    }

      console.log('_setActiveIndex',index)
      this.state.yPosition = this.state.yPosition == 0.0 ? 1.0 : 0.0;

      console.log(' this.state.yPosition', this.state.yPosition)
      Animated.timing(
        this.state.initHeight,
        {
          toValue: this.state.maxHeight[index]*this.state.yPosition,
          duration: 250,
        }
      ).start()
      //设置激活索引值
      this.props.setActiveIndex(index)
  }

    render(){
        return (<View style={styles.item} >
          <TouchableOpacity activeOpacity = {1}
                            onPress={()=>{this.translateX(this.props.index)}}
                            style={{width:width,height:40,backgroundColor:'#fff', zIndex:100,alignItems:"center"}}>
            <Text>点击下拉</Text>
          </TouchableOpacity>
          <Animated.View style={{
            width:500,
            height:this.state.initHeight,
            backgroundColor:'#fff',
            zIndex:4,
          }}>
          </Animated.View>
          <Text>高度</Text>
        </View>)
    }
}























const styles  = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fafafa'
  },
  item:{
    position:"relative",
  },
  iamge:{
    width:100,
    height:100,
    // backgroundColor:'pink',
    marginTop:20
  }

})

//     <View style={{width:30,height:30,backgroundColor:'red'}}></View>
//
// <Animated.View style={{
//     width:JDDevice.getRpx(100),
//     height:JDDevice.getRpx(100),
//     backgroundColor:'pink',
//     /*
//      2. 将动画值绑定到style的属性
//      * */
//     opacity: this.state.fadeInOpacity
// }}>
// </Animated.View>
// onSelect = (index) => {
//   if (index === this.state.selectedIndex) {
//     //消失
//     this.hide(index);
//   } else {
//     this.setState({selectedIndex: index, current: index});
//     this.onShow(index);
//   }
// }
//
// hide = (index, subselected) => {
//   let opts = {selectedIndex: null, current: index};
//   if (subselected !== undefined) {
//     this.state.subselected[index] = subselected;
//     this.state.top[index] = this.props.config[index].data[subselected].title;
//     opts = {selectedIndex: null, current: index, subselected: this.state.subselected.concat()};
//   }
//   this.setState(opts);
//   this.onHide(index);
// }
//
//
// onShow = (index) => {
//
//   Animated.parallel([this.createAnimation(index, this.state.maxHeight[index]), this.createFade(1)]).start();
// }

