import React, {
    AsyncStorage
} from 'react-native';


// 图片类型转换
export const replaceUrl = url => {
    let r = ''
    if (typeof url == 'string') {
        r = url.replace(".webp", '.jpg')
    }
    return r;
}

// 播放次数转换
export const countFilter = count => {
    return count >= 10000 ? parseInt(count / 10000) + '万' : count;
}

// 时间转换 秒数转换为时分秒
export const timeFilter = time => {
    let timeStr = '';
    let stringFormat = (i) => {
        return i < 10 ? `0${i}` : `${i}`;
    }
    let minuteTime = 0;
    let secondTime = 0;
    let hourTime = 0;
    if (time < 60) {
        timeStr = `00:${stringFormat(time)}`
    } else if (time >= 60 && time < 3600) {
        minuteTime = parseInt(time / 60);
        secondTime = parseInt(time % 60);
        timeStr = `${stringFormat(minuteTime)}:${stringFormat(secondTime)}`;
    } else if (time >= 3600) {
        let _t = parseInt(time % 3600);
        hourTime = parseInt(time / 3600);
        minuteTime = parseInt(_t / 60);
        secondTime = parseInt(_t % 60);
        timeStr = `${stringFormat(hourTime)}:${stringFormat(minuteTime)}:${stringFormat(secondTime)}`
    }
    return timeStr;
}


class DeviceStorage {
    /**
     * 获取
     * @param key
     * @returns {Promise<T>|*|Promise.<TResult>}
     */

    static get(key) {
        return AsyncStorage.getItem(key).then((value) => {
            const jsonValue = JSON.parse(value);
            return jsonValue;
        });
    }


    /**
     * 保存
     * @param key
     * @param value
     * @returns {*}
     */
    static save(key, value) {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    }


    /**
     * 更新
     * @param key
     * @param value
     * @returns {Promise<T>|Promise.<TResult>}
     */
    static update(key, value) {
        return DeviceStorage.get(key).then((item) => {
            value = typeof value === 'string' ? value : Object.assign({}, item, value);
            return AsyncStorage.setItem(key, JSON.stringify(value));
        });
    }


    /**
     * 更新
     * @param key
     * @returns {*}
     */
    static delete(key) {
        return AsyncStorage.removeItem(key);
    }
}

export default DeviceStorage;