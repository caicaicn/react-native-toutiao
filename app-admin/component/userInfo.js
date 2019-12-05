import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class UserInfo extends Component {
    render(){
        const { avatar_url, name, comment_count} = this.props
        return(
            <View style={style.itemTips}>
                <Image
                    style={{ height: 30, width: 30, borderRadius: 30 }}
                    source={{ uri: avatar_url }}
                ></Image>
                <Text style={style.tipsInfo}>{name}</Text>
                <Text style={style.tipsInfo}>{comment_count}评论</Text>
            </View>
        )
    }
}

var style = StyleSheet.create({
    itemTips: {
        marginTop: 8,
        marginBottom: 8,
        flex: 1,
        flexDirection: 'row',
        resizeMode: 'center',
        alignItems: 'center'
    },
    tipsInfo: {
        marginLeft: 10,
        color: "#999999"
    }
})

export default UserInfo;