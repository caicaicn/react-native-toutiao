import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import HTMLView from 'react-native-htmlview';    // 渲染html标签
import { WebView } from 'react-native-webview';

class News extends Component {
    // 动态设置页面title  静态纯展示  区别于headerTitle
    static navigationOptions = ({ navigation }) => {
        // console.log(navigation);
        return {
            // title: navigation.getParam('name', 'A Nested Details Screen'),
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            // 标题右边按钮
            headerRight: () => (
                <Button
                    onPress={() => alert('are you sure?')}
                    title="分享"
                    color="#fff"
                />
            ),
            // 设置title 可以点击的那种
            // headerTitle: () => (
            //     <Button
            //         onPress={() => alert('This is a button!')}
            //         title="左边更多"
            //         color="#fff"
            //     />
            // ),
        };
    };

    render() {
        const { navigation } = this.props;
        const newUrl = navigation.getParam('newUrl')   // 第二个参数为默认值
        const htmlContent = "<div>我是一个div</div>"
        return (
            <WebView
                source={{ uri: decodeURIComponent(newUrl) }}
            />
        )
    }
}

export default News;



