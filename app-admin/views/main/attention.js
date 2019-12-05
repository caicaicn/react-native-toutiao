import React, { Component } from "react";
import { Text, View, Button, ScrollView } from "react-native";
import HTMLView from 'react-native-htmlview';    // 渲染html标签

class Home extends React.Component {

    render() {
        console.log(this.props.navigation.state);
        return (
            <View>
                <ScrollView>
                    <Text>Attention</Text>
                </ScrollView>

            </View>
        );
    }
}

export default Home;



