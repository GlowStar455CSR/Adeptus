<script lang="ts" setup>
import { ref } from 'vue'
const loading = ref(true)
const error = ref(null)
const noBVID = ref(false)
const show = ref(false);
const QRurl = ref(null)
const props = defineProps(['bvid'])
const isMobile = ref(window.innerWidth <= 600)
console.log('BiliPlayer: isMobile? ' + isMobile.value)
if (props.bvid == null){
    error.value = "没有 BVID 参数"
    console.error('BiliPlayer Error: 没有传入 bvid 参数')
    noBVID.value = true;
    loading.value = false;
}
else{
    if (props.bvid.substring(0,2) != 'BV'){
        console.error('BiliPlayer Error: 没有传入 bvid 参数')
        noBVID.value = true;
        loading.value = false;
        error.value = "BVID 不合法，应以 BV 开头"
    }else{
        if (isMobile.value != true){
            show.value = true;
        }else{
            loading.value = false;
            QRurl.value = `http://www.t-x-m.com/QRCode/qrcode.asp?bc1=https://m.bilibili.com/video/${props.bvid}&bc2=33&bc3=3.5&bc4=3.5&bc5=1&bc6=1&bc7=1&bc8=5&bc9=1`
        }
    }
}
function onLoad(){
    console.info('BiliPlayer Info: Load Completed')
    loading.value = false;
}
</script>

<template>
    <div v-loading="loading">
        <el-alert show-icon type="error" :title="error" v-if="noBVID"/>
        <div v-if="isMobile" style="padding: 12px; text-align: center;">
            <img :src="QRurl" style="width: 70%; display: inline;"/>
            <p style="font-size: 0.7rem; color: #9e9e9e">当前可能是以手机访问本页面，为保障浏览及观看体验，请扫描二维码或点击下方按钮观看视频，由此带来的不便，我们深感抱歉。</p>
            <a :href="`https://m.bilibili.com/video/${props.bvid}`" target="_blank"><el-button type="primary">打开视频</el-button></a>
        </div>
        <iframe v-else @load="onLoad" :style="{ display: show == true? 'block' : 'none', width: '100%', height: '400px' }" :src="`https://player.bilibili.com/player.html?bvid=${props.bvid}`"/>
    </div>
</template>

<style scoped>

</style>