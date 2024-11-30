<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #not-found>
        <div style="width: 100%; height: 600px; line-height: 600px;">
            <div style="float: left; margin-top: 20%; margin-left: 30px;">
                <h1 style="font-size: 3rem;">
                    404<span style="font-size: 1.5rem; color: #CCC">  找不到页面</span>
                </h1>
                <h1 style="margin-top: 10px; color: #a0a0a0">但只要你坚持走下去，总有一天能到达正确的页面。</h1>
                <h2 style="margin-top: 10px;"><el-link href="/"><el-button type="primary">带我回家</el-button></el-link></h2>
            </div>
        </div>
    </template>
  </Layout>
</template>