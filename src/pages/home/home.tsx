import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components';
import Taro from "@tarojs/taro";

import './home.less'

type PageStateProps = {
}

type PageOwnProps = {}

type PageState = {
    count: number
}

type IProps = PageStateProps & PageOwnProps

interface Home {
  props: IProps;
}

class Home extends Component {
  state: PageState = {
    count: 1
  }
  goIndex = () => {
    // !跳转到目的页面，打开新页面， 这两个方法不支持跳转到tabbar上的页面
    // Taro.navigateTo({
    //     url: '/pages/index/index'
    // })
    // !跳转到目的页面，在当前页面打开
    Taro.redirectTo({
        url: '/pages/demo/demo?type=text&id=2'
    })
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.goIndex}>Click</Button>
        <View><Text>{this.state.count}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Home

