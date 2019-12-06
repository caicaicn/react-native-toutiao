import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet, Image } from "react-native";
import HTMLView from 'react-native-htmlview';    // 渲染html标签

class Home extends React.Component {

    render() {
        console.log(this.props.navigation.state);
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <TextInput
                        style={style.input}
                        clearButtonMode={'while-editing'}    // 文本框右侧显示“清除”按钮
                        defaultValue={""}
                        placeholder={"placeholder"}
                    />
                    {/* <Image 
                        style={style.searchIcon} 
                    /> */}
                </View>
            </View>
        );
    }
}

var style = StyleSheet.create({
    container:{
        backgroundColor: "#f5fcff",
        minHeight: '100%'
    },
    header:{
        backgroundColor: "#c0483d",
        padding: 10,
        flexDirection: 'row'
    },
    input:{
        padding: 10,
        backgroundColor: "#ffffff",
        borderRadius: 6,
        fontSize: 16
    },
    searchIcon:{

    }
})


export default Home;



