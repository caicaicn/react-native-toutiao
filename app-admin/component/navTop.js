import React, { Component } from "react";
import { Text, View, Button, ScrollView, StyleSheet } from "react-native";
import HTMLView from 'react-native-htmlview';    // 渲染html标签

const channelInfo = [
    { name: "推荐", id: "__all__" },
    { name: "热点", id: "news_hot" },
    { name: "科技", id: "news_tech" },
    { name: "社会", id: "news_society" },
    { name: "娱乐", id: "news_entertainment" },
    { name: "游戏", id: "news_game" },
    { name: "体育", id: "news_sports" },
    { name: "汽车", id: "news_car" },
    { name: "财经", id: "news_finance" },
    { name: "搞笑", id: "funny" },
    { name: "军事", id: "news_military" },
    { name: "国际", id: "news_world" },
    { name: "时尚", id: "news_fashion" },
    { name: "旅游", id: "news_travel" },
    { name: "探索", id: "news_discovery" },
    { name: "育儿", id: "news_baby" },
    { name: "养生", id: "news_regimen" },
    { name: "美文", id: "news_essay" },
    { name: "历史", id: "news_history" },
    { name: "美食", id: "news_food" },
]

class NavTop extends React.Component {
    constructor(){
        super()
        this.state = {
            newId: channelInfo[0].id
        }
    }

    select(id){
        this.setState({
            newId: id
        })
        this.props.callback(id)
    }

    render() {
        // console.log(this.props.navigation.state);
        return (
            <View style={style.navBox}>
                <ScrollView
                    horizontal={true}                       // 横向
                    showsHorizontalScrollIndicator={false}   // 隐藏滚动条
                >
                    <View style={style.itemBox}>
                        {
                            channelInfo.map((item, index) => <Text onPress={this.select.bind(this, item.id)} key={index} style={this.state.newId == item.id ? [style.navItem, style.navItemActive] : style.navItem }>{item.name}</Text>)
                        }

                    </View>
                </ScrollView>
            </View>
        );
    }
}

var style = StyleSheet.create({
    navBox: {
        backgroundColor: "#c54741",
    },
    itemBox: {
        flexDirection: 'row',
    },
    navItem: {
        color: "#dddddd",
        width: 46,
        textAlign: 'center',
        height: 40,
        fontSize: 16,
        lineHeight: 40
    },
    navItemActive:{
        color: "#ffffff",
        fontSize: 18
    }
})

export default NavTop;



