import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import HTMLView from 'react-native-htmlview';    // 渲染html标签

class Home extends React.Component {

    render() {
        console.log(this.props.navigation.state);
        return (
            <View>
                <TextInput/>
            </View>
        );
    }
}



export default Home;



