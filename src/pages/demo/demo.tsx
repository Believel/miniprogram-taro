import React, { Component } from "react";
import { View, Text } from '@tarojs/components';
import { getCurrentInstance } from "@tarojs/taro";

import "./demo.less";

class Demo extends Component {
    componentDidMount() {
        // 获取路由上传入的参数
        console.log(getCurrentInstance().router?.params);
    }
    render() {
        return (
            <View className="demo">
                <Text>demo</Text>
            </View>
        )
    }
}
export default Demo;