import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configStore from './store'

import './app.less'

const store = configStore()

class App extends Component {
  componentDidMount () {}
  // 对应 onShow
  componentDidShow () {}
  // 对应 onHide
  componentDidHide () {}
  // 对应 onError
  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App