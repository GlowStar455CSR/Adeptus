<template>
    <h3>网络测试</h3>
    <el-alert style="margin-top: 10px;" type="warning" show-icon title="这个测试并不代表你的网络质量好坏，具体请以运营商结果为准！"></el-alert>
    <el-button :loading="starting" @click="test" style="margin-top: 10px;">开始测试</el-button>
    <div>
        <p>网络连通性<span :style="{ marginLeft: '30px', color: status1 == '待检测' ? '#A5A5A5' : status1 == '检测中' ? '#FF8442' : status1 == '检测成功'? '#04EF57' : '#EF0404' }">{{ status1 }}</span></p>
        <p>服务器延迟<span :style="{ marginLeft: '30px', color: status2 == '待检测' ? '#A5A5A5' : status2 == '检测中' ? '#FF8442' : status2 == '检测失败或超时'? '#EF0404' : '#04EF57' }">{{ status2 }}</span></p>
        <p>静态资源访问延迟<span :style="{ marginLeft: '30px', color: status21 == '待检测' ? '#A5A5A5' : status21 == '检测中' ? '#FF8442' : status21 == '检测失败或超时'? '#EF0404' : '#04EF57' }">{{ status21 }}</span></p>
        <p>下载速度<span :style="{ marginLeft: '30px', color: status3 == '待检测' ? '#A5A5A5' : status3 == '检测中' ? '#FF8442' : status3 == '检测失败或超时'? '#EF0404' : '#04EF57' }">{{ status3 }}</span></p>
        <p>动态内容检测 1<span :style="{ marginLeft: '30px', color: status4 == '待检测' ? '#A5A5A5' : status4 == '检测中' ? '#FF8442' : status4 == '检测成功'? '#04EF57' : '#EF0404' }">{{ status4 }}</span></p>
        <p>动态内容检测 2<span :style="{ marginLeft: '30px', color: status5 == '待检测' ? '#A5A5A5' : status5 == '检测中' ? '#FF8442' : status5 == '检测成功'? '#04EF57' : '#EF0404' }">{{ status5 }}</span></p>
        <h3>{{ status }}</h3>
    </div>
</template>

<style scoped>

</style>

<script lang="ts" setup>
import * as $ from 'jquery'
import { ref } from 'vue'
import axios from 'axios';

const starting = ref(false)

const status = ref("未开始检测")
const status1 = ref("待检测")
const status2 = ref("待检测")
const status21 = ref("待检测")
const status3 = ref("待检测")
const status4 = ref("待检测")
const status5 = ref("待检测")

const failed = ref(0)
const succeed = ref(0)

function getTime(start_time){
    const currentTime = new Date().getTime()
    const duration = currentTime - start_time
    return duration
}

const test = () => {
    status.value = "正在检测中，用时较长，请耐心等待"
    starting.value = true;
    // 1.测试网络连接是否正常    
    status1.value = "检测中"
    var time = new Date().getTime()
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(function(){ status1.value = "检测成功"; succeed.value = succeed.value + 1 })
    .catch(function(){ status1.value = "检测失败或超时"; failed.value = failed.value + 1 })

    // 2.测试主站延迟
    status2.value = "检测中"
    var time = new Date().getTime()
    axios.get("https://seelevollerei.online")
    .then(function(response){ var t = getTime(time); status2.value = t + "ms"; succeed.value = succeed.value + 1 })
    .catch(function(){ status2.value = "检测失败或超时"; failed.value = failed.value + 1 })

    // 3.测试AWS S3延迟
    status21.value = "检测中"
    var time = new Date().getTime()
    axios.get("https://heycrab3-oversea-file-delivery.s3.ap-east-1.amazonaws.com/1.csv")
    .then(function(response){ var t = getTime(time); status21.value = t + "ms"; succeed.value = succeed.value + 1 })
    .catch(function(){ status21.value = "检测失败或超时"; failed.value = failed.value + 1 })

    // 4.测试下载速度
    status3.value = "检测中"
    let image = new Image(); //定义Image对象
    let imageSrc='https://heycrab3-oversea-file-delivery.s3.ap-east-1.amazonaws.com/xianzhoutongjian/1314613.jpg';	//图片路径（绝对或相对或互联网URL资源）
    let imageSize=11900000;			   //图片大小（单位字节byte）
    image.src = imageSrc + '?n=' +Math.random(); //随机访问该图片资源
    let startTime = new Date().getTime(); //开始下载时的时间戳

    image.onload = function () { //图片加载完时会执行的回调函数
        let endTime = new Date().getTime(); //完成下载的时的时间
        let diffSeconds = (endTime - startTime)/1000; //差时间转为秒
        let speedBps = (imageSize/diffSeconds)*8; //每秒下载多少B的资源
        let speedKBps = speedBps / 1024;  //每秒下载多少KB（千B）的资源
        let speedMbps = speedKBps / 1024; //每秒下载多少MB（兆B）的资源
        status3.value = speedMbps.toFixed(2) + "Mbps"
        succeed.value = succeed.value + 1
    };

    image.onerror = function(){ status3.value = "检测失败或超时"; failed.value = failed.value + 1 }

    // 5.测试 CrabAPI 是否能正常访问
    status4.value = "检测中"
    axios.get("https://asaka-admin.crabapi.cn")
    .then(function(response){ status4.value = "检测成功"; succeed.value = succeed.value + 1 })
    .catch(function(){ status4.value = "检测失败或超时"; failed.value = failed.value + 1 })

    // 6.测试一言是否能正常访问

    status21.value = "检测中"
    axios.get("https://v1.hitokoto.cn")
    .then(function(response){ status5.value = "检测成功"; succeed.value = succeed.value + 1 })
    .catch(function(){ status5.value = "检测失败或超时"; failed.value = failed.value + 1 })

    // 总结
    status.value = `检测完毕，有 ${succeed.value} 个项检测成功，${failed.value} 个项检测失败`
    starting.value = false;
}
</script>