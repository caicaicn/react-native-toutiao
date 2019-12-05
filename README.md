### 基于react-native开发的仿头条app

### 项目使用到的主要技术及对应版本

+ react-native

    版本：0.61.5
+ react-navigation

    版本：^4.0.10

+ react-native-webview

    版本：^7.5.2

# 项目启动

+ ios端

```
    // 1. 进入app-admin目录
    cd app-admin
    // 2. 安装项目依赖
    yarn install 没有安装yarn 则 npm install 
    // 3. 由于 react-native 0.6以上版本需要pod install所以
    cd ./ios
    pod install
    // 4. 回到app-admin目录并启动项目
    cd ../
    yarn run ios 或者 npm run ios
```