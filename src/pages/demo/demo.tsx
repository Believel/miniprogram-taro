import React, { Component } from "react";
import { View, Text } from '@tarojs/components';
import { getCurrentInstance } from "@tarojs/taro";

import "./demo.less";

type PageState = {
    data: Data
}
interface Data {
    type?: string;
    id?: string;
}
class Demo extends Component {
    state: PageState = {
        data: {}
    }
    componentDidMount() {
        // 获取路由上传入的参数
        this.setState({
            data: getCurrentInstance().router?.params
        })
    }
    render() {
        return (
            <View className="demo">
                <Text>读取路由地址中传的参数：type = {this.state.data?.type} ,id = {this.state.data?.id}</Text>
            </View>
        )
    }
}
export default Demo;