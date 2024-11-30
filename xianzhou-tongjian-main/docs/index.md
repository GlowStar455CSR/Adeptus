---
layout: home

title: 仙舟通鉴
titleTemplate: 一个由纯良米友搭建的 Wiki

hero:
  name: 仙舟通鉴
  text: 一个由纯良米友搭建的 Wiki
  tagline: 欢迎各路米友前来参观共建
  image:
    src: https://heycrab3-oversea-file-delivery.s3.ap-east-1.amazonaws.com/xianzhoutongjian/91807422-1DDE-6A5E-5AEE-1F6B29EA53A1.png
    alt: Logo
  actions:
    - theme: brand
      text: 开始参观
      link: /a/home
    - theme: alt
      text: 共建者必读
      link: /build/guide
    - theme: alt
      text: 加入官方QQ频道
      link: https://pd.qq.com/s/4wijuc9ck

features:
  - icon: 💡
    title: 见证生物多样性
    details: 内容来自三万人大频道，让你见到每一种生物
  - icon: 📦
    title: 纯良
    details: 共建者都为纯良，除非某些特殊原因，否则他们不会对你开炮
  - icon: 🛠️
    title: 自由共建
    details: 使用 Gitee 作为文档共建平台，仅需一点点 Markdown 知识，即可立即创建一个页面
---

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ElNotification } from 'element-plus'
onMounted(() => {
  ElNotification({
    title: '公告',
    message: "广告已开始投放，如果内容让您感到不适，请加入官方QQ频道进行反馈"
  })
})
</script>