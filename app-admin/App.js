import React from 'react';
// import { View, Text, Image } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TopTabNavigator from "./views/main";
import News from "./views/new";

const routerConfig = {
    Main: TopTabNavigator,
    News
}

const TabNavigatorConfig = {
    initialRouteName: 'Main',
}

const stackNavigator = createStackNavigator(routerConfig, TabNavigatorConfig);

export default createAppContainer(stackNavigator);