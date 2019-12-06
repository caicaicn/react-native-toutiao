import React from 'react';
import { Image } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import Detail from "./detail";
import Home from "./home"
import Video from "./video"
import User from "./user"
import Attention from "./attention"

// 底部导航栏
const routerConfig = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return ({
                title: '首页',
                tabBarIcon: ({ focused }) => <Image
                    style={{ width: 16, height: 18, marginRight: 3 }}
                    source={focused ? require(`../../images/tabbar_1_press.png`) : require(`../../images/tabbar_1.png`)}
                />
            })
        }
    },
    Video: {
        screen: Video,
        navigationOptions: ({ navigation }) => {
            return ({
                title: '视频',
                tabBarIcon: ({ focused }) => <Image
                    style={{ width: 16, height: 18, marginRight: 3 }}
                    source={focused ? require(`../../images/tabbar_2_press.png`) : require(`../../images/tabbar_2.png`)}
                />
            })
        }
    },
    Attention: {
        screen: Attention,
        navigationOptions: ({ navigation }) => ({
            title: '热搜',
            tabBarIcon: ({ focused }) => <Image
                style={{ width: 16, height: 18, marginRight: 3 }}
                source={focused ? require(`../../images/tabbar_3_press.png`) : require(`../../images/tabbar_3.png`)}
            />
        }),
    },
    User: {
        screen: User,
        navigationOptions: ({ navigation }) => ({
            title: '我的',
            tabBarIcon: ({ focused }) => <Image
                style={{ width: 16, height: 18, marginRight: 3 }}
                source={focused ? require(`../../images/tabbar_4_press.png`) : require(`../../images/tabbar_4.png`)}
            />
        }),
    }
}

const tabNavigatorConfig = {
    initialRouteName: 'Attention',
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: "#c54741",
        inactiveTintColor: "#333333",
        scrollEnabled: false,
        labelStyle: {
            fontSize: 14,
        },
        style: {
            backgroundColor: '#f5f5f5',
        },
        tabStyle: {
        },
        adaptive: false,
        showLabel: true,
        showLabel: true
    }
}

const topTabNavigator = createBottomTabNavigator(
    routerConfig,
    tabNavigatorConfig
);

export default topTabNavigator;