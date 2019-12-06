import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, FlatList, TouchableHighlight } from "react-native";
import HTMLView from 'react-native-htmlview';    // 渲染html标签
import { getNewsByChannel } from "../../server";
import { replaceUrl } from "../../utils/base";
import NavTop from "../../component/navTop";
import UserInfo from "../../component/userInfo";
import ItemDivideComponent from "../../component/listLine";


class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            start: 0,
            end: 10,
            newsData: [],
            newsId: "news_hot",
            isRefresh: false
        }
    }

    loadMore(type) {
        const { start, end, newsData, newsId } = this.state;
        this.setState({
            isRefresh: true
        })
        getNewsByChannel(newsId, start, end)
        .then(res => {

            let list = type == 'init' ? res : [...newsData, ...res];
            this.setState({ // 设置状态
                newsData: list,
                start: end,
                end: end + 10,
                isRefresh: false
            });
        })
    }

    init(){
        this.loadMore('init')
    }

    // 跳转到新闻详情页面
    chooseNews(url) {
        this.props.navigation.push("News", { 'newUrl': encodeURIComponent(url)})
    }
    
    componentDidMount() {
        this.loadMore()
    }

    // 顶部导航回调 id为选择的新闻id
    newIdCb(id){
        this.setState({
            newsId: id
        })
        this.init()
    }

    render() {
        const { newsData, isRefresh } = this.state
        const _item = ({ item, separators }) => (
            <TouchableHighlight
                onPress={this.chooseNews.bind(this, item.url)}
                keyExtractor={(item, index) => index.toString()} // key属性
                activeOpacity={0.5}
                underlayColor={'#ffffff'}
                style={style.newItem}
            >
                <View>
                    {/* 标题 */}
                    <Text style={style.title}>{item.title}</Text>
                    {/* 新闻描述 */}
                    {/* numberOfLines    超过换行 */}
                    <Text style={style.newDes} numberOfLines={3}>{item.abstract}</Text>
                    {/* 图片列表 */}
                    <View style={style.imgBox}>
                        {
                            item.image_list && item.image_list.map((img, index) => {
                                return (
                                    <Image
                                        key={index}
                                        style={{ height: img.height, flex: 1, margin: 5 }}
                                        source={{ uri: replaceUrl(img.url) }}
                                    />
                                )
                            })
                        }
                    </View>
                    {
                        item.user_info && item.user_info.avatar_url && item.user_info.name && <UserInfo avatar_url={item.user_info.avatar_url} name={item.user_info.name} comment_count={item.comment_count}></UserInfo>
                    }
                </View>
            </TouchableHighlight>
        )

        return (
            <View>
                <NavTop callback={ this.newIdCb.bind(this) }></NavTop>   
                {
                    newsData.length > 0 && <FlatList
                        data={newsData}
                        ItemSeparatorComponent={ItemDivideComponent}
                        renderItem={_item}
                        refreshing={isRefresh}   // 下拉才会出现 上拉不出现
                        onEndReachedThreshold={0.2}
                        onEndReached={this.loadMore.bind(this)}
                        onRefresh={this.init.bind(this)}
                        keyExtractor={(item, index) => index.toString()}    // 元素添加key
                    />
                }
            </View>
        );
    }

}

var style = StyleSheet.create({
    title: {
        fontWeight: '700',
        marginBottom: 6,
    },
    newItem: {
        padding: 20,
    },
    newDes: {
        color: "#666666"
    },
    imgBox: {
        flexDirection: 'row'
    },
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

export default Home;



