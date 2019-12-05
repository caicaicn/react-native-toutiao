import React, { Component } from "react";
import { Text, View, Button, StyleSheet, FlatList, TouchableHighlight, Image } from "react-native";
// import HTMLView from 'react-native-htmlview';    // 渲染html标签
import { getVideoList } from "../../server";
import NavTop from "../../component/navTop";
import { replaceUrl, countFilter, timeFilter } from "../../utils/base";
import UserInfo from "../../component/userInfo";
import ItemDivideComponent from "../../component/listLine";

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            start: 0,
            end: 10,
            newsData: [],
            newsId: "video"
        }
    }

    init() {
        this.setState({
            start: 0,
            end: 10,
            newsData: []
        }, () => this.loadMore())
    }

    // 顶部导航回调 id为选择的新闻id
    newIdCb(id) {
        // 没办法啊，不知道视频的id
        // this.setState({
        //     newsId: id
        // })
        this.init()
    }
    
    // 跳转到新闻详情页面
    chooseNews(url) {
        this.props.navigation.push("News", { 'newUrl': encodeURIComponent(url) })
    }

    loadMore(){
        const { start, end, newsData, newsId } = this.state;
        getVideoList(newsId, start, end)
        .then(res=>{
            let list = [...newsData, ...res]
            this.setState({ // 设置状态
                newsData: list,
                start: end,
                end: end + 10
            });
        })
        .catch(error=>{
            console.log(error)
        })
    }

    componentDidMount(){
        this.loadMore()
    }



    render() {
        const { newsData } = this.state
        const _item = ({ item }) => 
        <TouchableHighlight 
            onPress={this.chooseNews.bind(this, item.url)}
            activeOpacity={0.5} 
            underlayColor={"#ffffff"}
            style={style.item}
            >
            <View style={style.videoBox}>
                <Image
                    style={[style.videoBg, { height: item.middle_image.height }]}
                    source={{ uri: replaceUrl(item.middle_image.url)}}
                />
                {/* 视频信息 */}
                <View style={[style.videoInfo, { height: item.middle_image.height }]}>
                        <Text style={style.itemTitle} numberOfLines={2}>{item.abstract}</Text>
                        <Text style={[style.videoDetail, style.videoCount]}>{countFilter(item.video_detail_info.video_watch_count)}播放</Text>
                    <View style={[style.videoDetail, style.videoTime]}>
                        <Text style={style.videoTimeContent}>{timeFilter(item.video_duration)}</Text>
                    </View>
                </View>
                {/* 用户信息 */}
                    <UserInfo avatar_url={item.user_info.avatar_url} name={item.user_info.name} comment_count={item.comment_count}></UserInfo>
            </View>
        </TouchableHighlight>

        return (
            <View>
                <NavTop callback={this.newIdCb.bind(this)}></NavTop> 
                <FlatList
                    data={newsData}
                    renderItem={ _item }
                    ItemSeparatorComponent={ItemDivideComponent}
                    refreshing={false}   // 下拉才会出现 上拉不出现
                    onEndReachedThreshold={0.1}
                    onEndReached={this.loadMore.bind(this)}
                    onRefresh={this.init.bind(this)}
                    keyExtractor={(item, index) => index.toString()}    // 元素添加key
                />
            </View>
        );
    }
}

var style = StyleSheet.create({
    item:{
        paddingTop: 10,
        paddingBottom: 10,
    },
    itemBg:{
        backgroundColor: '#ffffff'
    },
    videoBox: {
        position: 'relative',
    },
    videoBg:{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
    },
    videoInfo:{
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingLeft: 10,
        backgroundColor: 'rgba(0,0,0, 0.2)'
    },
    videoDetail: {
        position: 'absolute',
        bottom: 10,
        color: "#ffffff",
    },
    videoCount: {
        fontSize: 14,
        left: 20
    },
    videoTime: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "rgba(0,0,0, 0.7)",
        borderRadius: 20,
        right: 20
    },
    videoTimeContent:{
        fontSize: 12,
        color: "#ffffff"
    },
    itemTitle: {
        fontWeight: '700',
        fontSize: 16,
        color: "#ffffff",
    }
})
export default Home;



