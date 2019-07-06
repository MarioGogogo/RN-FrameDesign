import React,{Component} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';


@inject('loginStore')
@observer
export default class Header extends Component{
   render(){
     const {loginStore} = this.props
     return (
      <View style={[styles.container,{backgroundColor:loginStore.defaultTheme}]}>
      <TouchableOpacity style={{ alignSelf: 'center' }}>
        <Image source={require('../../img/smile.png')} style={styles.img} />
      </TouchableOpacity>
      <Text style={styles.text}>Hello! 小吃货(　＾∀＾)</Text>
    </View>
     );
   }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 15,
    marginRight: 8
  },
  text: {
    fontSize: 15,
    alignSelf: 'center',
    color: '#000000'
  }
});


