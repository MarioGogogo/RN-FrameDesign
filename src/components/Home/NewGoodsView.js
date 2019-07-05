import React,{PureComponent} from 'react';
import { View, StyleSheet } from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux'
import NewGoodsItem from './NewGoodsItem';
import { width } from '../../common/screen';
import RefreshListView, {RefreshState} from '../../common/refreshListView'


export default class NewGoodsView extends PureComponent{
   constructor(props) {
     super(props)

   }
    //刷新
   onHeaderRefresh=()=>{

   }
   //加载
   onFooterRefresh=()=>{

   }
  renderCell=(value,index)=>{
      console.log("TCL: NewGoodsView -> renderCell -> value", value)
      return (
        <NewGoodsItem
         onPress={() => Actions.furitDetail({ value })}
         name={value.name}
         price={value.price}
         image={value.image}
         /* eslint-disable-next-line */
         key={`list-${index}`}
       />
      )
     }
     render() {
       const { itemDatas, navigation } = this.props
       return (
        <View style={styles.container}>
        <RefreshListView
           data={itemDatas}
           keyExtractor={this.keyExtractor}
           renderItem={this.renderCell}
           refreshState={this.state.refreshState}
           onHeaderRefresh={this.onHeaderRefresh}
           onFooterRefresh={this.onFooterRefresh}
           // 可选
           footerRefreshingText='数据加载中'
           footerFailureText='数据加载失败'
           footerNoMoreDataText='已全部加载完成'
           footerEmptyDataText='list'
         />
        </View>
       );
     }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    width: (width - 40) / 2,
    height: 150,
    flexDirection: 'column',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#f5f6f5',
    borderRadius: 20
  },
  image: {
    width: 100,
    height: 100
  }
});

export default NewGoodsView;
