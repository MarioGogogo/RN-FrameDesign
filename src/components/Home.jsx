
 import React, {Component} from 'react';
 import {StyleSheet,Text} from 'react-native';


 export default class Home extends Component{
    // 默认值设置
    static defaultProps = {

    };
    // 初始化state
    constructor(props){
        super(props);
        this.state = {};
    }
    // 加载前
    componentWillMount() {
        console.log('componentWillMount')
    }
    // 加载后
    componentDidMount() {
        console.log('componentDidMount')
    }
    // 接收改变参数( props或者state改变 )
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps')
    }
    // 是否更新( state改变 )
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
        return true;
    }
    // 更新前
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate')
    }
    // 更新后
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }
    // 移除前
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render(){
        console.log('render')

        let params={height:100, width:200, color:'green', fontSize:30};
        return (
            <Text>Home</Text>
        );
    }
 }

 // 构建样式
const styles = StyleSheet.create({
    /*
    * *******    style属性    *******
    * flexDirection        水平：row   竖直：column
    * justifyContent       flex-start、center、flex-end、space-around、space-between以及space-evenly
    * alignItems           flex-start、center、flex-end、stretch。
    * */
});
