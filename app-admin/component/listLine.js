import React, { Component } from "react";
import { View } from "react-native";

// 定义列表分割线
class ItemDivideComponent extends Component {
    render() {
        return (
            <View style={{ height: 1, backgroundColor: '#ccc' }} />
        );
    }
};

export default ItemDivideComponent;