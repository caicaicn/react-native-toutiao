import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import HTMLView from 'react-native-htmlview';    // 渲染html标签

class News extends Component {
    // 动态设置页面title  静态纯展示  区别于headerTitle
    static navigationOptions = ({ navigation }) => {
        // console.log(navigation);
        return {
            title: navigation.getParam('name', 'A Nested Details Screen'),
            headerStyle: {
                // backgroundColor: '#f4511e',
                backgroundColor: 'red',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            // 标题右边按钮
            headerRight: () => (
                <Button
                    onPress={() => alert('This is a button!')}
                    title="右边更多"
                    color="#fff"
                />
            ),
            // 设置title 可以点击的那种
            headerTitle: () => (
                <Button
                    onPress={() => alert('This is a button!')}
                    title="左边更多"
                    color="#fff"
                />
            ),
        };
    };

    render() {
        // console.log(this.props.navigation.state);
        const { navigation } = this.props;
        const name = JSON.stringify(navigation.getParam('name'))
        const id = JSON.stringify(navigation.getParam('id', 'default id'))    // 第二个参数为默认值
        const htmlContent = "<div>我是一个div</div>"
        return (
            <View>
                <Text>news</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({ name: 'Updated name!' })}
                />
                <Button
                    title="go Index"
                    onPress={() => this.props.navigation.navigate('Main')}
                />
                <Text>name=> {name}</Text>
                <Text>id=> {id}</Text>
                <View>
                    <HTMLView
                        value={htmlContent}
                    // stylesheet={styles}
                    />
                </View>
            </View>
        )
    }
}

export default News;



