
 import React, {Component} from 'react';
 import {StyleSheet,Text,View,Dimensions,TouchableOpacity,Animated} from 'react-native';

 let width = Dimensions.get("window").width;

 export default class Animal extends Component{
    // 默认值设置
    static defaultProps = {

    };
    // 初始化state
    constructor(props){
        super(props);
        this.state = {
          maxHeight: 41*4,
          fadeInOpacity:new Animated.Value(0),
        };
    }

   createAnimation = (index, height) => {
     return Animated.timing(
       this.state.maxHeight,
       {
         toValue: height,
         duration: 250
       }
     );
   }

   createFade = (value) => {
     return Animated.timing(
       this.state.fadeInOpacity,
       {
         toValue: value,
         duration: 250,
       }
     );
   }

   onShow = (index) => {
     Animated.parallel([this.createAnimation(index, this.state.maxHeight), this.createFade(1)]).start();
   }

   onHide = (index) => {
     //其他的设置为0
     // for (let i = 0, c = this.state.height.length; i < c; ++i) {
     //   if (index != i) {
     //     this.state.height[i].setValue(0);
     //   }
     // }
     Animated.parallel([this.createAnimation(index, 0), this.createFade(0)]).start();
   }

   onClick=()=>{
     this.setState({
       fadeInOpacity:1
     })
     return Animated.timing(
       this.state.fadeInOpacity,
       {
         toValue: 1,
         duration: 2000,
       }
     );



    }

   onCloseClick=()=>{
     this.setState({
       fadeInOpacity:0
     })
     return Animated.timing(
       this.state.fadeInOpacity,
       {
         toValue: 0,
         duration: 4000,
       }
     )
   }
    render(){
        return (
          <View style={styles.container}>
            <TouchableOpacity style={styles.header_item} onPress={this.onCloseClick}>
              <Text style={styles.title_item}>点击收</Text>
            </TouchableOpacity>
            <Text>高度</Text>
            <Text>高度</Text>
            <Text>高度</Text>
            <Text>高度</Text>
            <View style={styles.item}>
              <TouchableOpacity style={styles.header_item} onPress={this.onClick}>
                <Text style={styles.title_item}>点击展开</Text>
              </TouchableOpacity>
              <Animated.View style={{backgroundColor: "#999",opacity:this.state.fadeInOpacity}}>
                <View style={styles.child_item}>
                  <Text style={styles.title_item}>高度</Text>
                </View>
                <View style={styles.child_item}>
                  <Text style={styles.title_item}>高度</Text>
                </View>
                <View style={styles.child_item}>
                  <Text style={styles.title_item}>高度</Text>
                </View>
                <View style={styles.child_item}>
                  <Text style={styles.title_item}>高度</Text>
                </View>



              </Animated.View>


            </View>

          </View>

        );
    }
 }

 // 构建样式
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f0f0f0"
  },
  item:{
     width:width,
     height:40
  },
  header_item:{
     borderWidth:1,
     borderColor:"#ccc",
     alignItems:"center"
  },
  title_item:{
     fontSize:20,
     color:"red"
  },
  child_item:{
    height:40,
    borderBottomWidth:1,
    borderBottomColor:"#ccc",
    alignItems:"center",
    justifyContent:'center'
  }
});

