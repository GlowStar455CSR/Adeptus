import _APP_INFO_ from "../../components/git"

export default {
    lang: 'zh-CN',
    title: '仙舟通鉴',
    description: '一个由纯良米友搭建的 Wiki',
    sitemap: {
      hostname: 'https://seelevollerei.online'
    },
    head:[
      ['link', { rel: 'icon', type: 'image/x-icon', href: 'https://heycrab3-oversea-file-delivery.s3.ap-east-1.amazonaws.com/xianzhoutongjian/91807422-1DDE-6A5E-5AEE-1F6B29EA53A1.png' }],
      ["script", {"data-ad-client": "ca-pub-2828487861466042", async: true, src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2828487861466042", crossorigin: "anonymous"}],
      ["script", {async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-BJG5Z2RCWE", crossorigin: "anonymous"}],
      ["script", {}, `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-BJG5Z2RCWE')`],
      ["script", {}, `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NPL7MJ6N');`],
      ["script", {async: true, src: "https://fundingchoicesmessages.google.com/i/pub-2828487861466042?ers=1", nonce: "ImrkQyQ0a-jiBbdYeq4NKQ"}],
      ["script", {nonce: "ImrkQyQ0a-jiBbdYeq4NKQ"}, `(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();`]
    ],
    lastUpdated: true,
    themeConfig: {
      footer: {
        message: `本站所有内容均以 CC-BY-NC-NA 协议授权。<br/>版本 ${_APP_INFO_.VERSION}  <svg viewBox="0 0 1024 1024" style="width: 12px; height: 12px; display: inline" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"></path></svg>  ${_APP_INFO_.GIT_HASH.substring(0,7)}`,
        copyright: 'Copyright © 2023 仙舟通鉴'
      },
      lastUpdatedText: '最后更新于',
      siteTitle: '仙舟通鉴',
      search: {
        provider: 'algolia',
        options: {
          appId: 'BY3JQYGHNG',
          apiKey: '90bac1d2f947182b14ac02d2495ca070',
          indexName: 'seelevollerei',
          locales: {
            zh: {
              placeholder: '搜索文档',
              translations: {
                button: {
                  buttonText: '搜索文档',
                  buttonAriaLabel: '搜索文档'
                },
                modal: {
                  searchBox: {
                    resetButtonTitle: '清除查询条件',
                    resetButtonAriaLabel: '清除查询条件',
                    cancelButtonText: '取消',
                    cancelButtonAriaLabel: '取消'
                  },
                  startScreen: {
                    recentSearchesTitle: '搜索历史',
                    noRecentSearchesText: '没有搜索历史',
                    saveRecentSearchButtonTitle: '保存至搜索历史',
                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                    favoriteSearchesTitle: '收藏',
                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                  },
                  errorScreen: {
                    titleText: '无法获取结果',
                    helpText: '你可能需要检查你的网络连接'
                  },
                  footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                    searchByText: '搜索提供者'
                  },
                  noResultsScreen: {
                    noResultsText: '无法找到相关结果',
                    suggestedQueryText: '你可以尝试查询',
                    reportMissingResultsText: '你认为该查询应该有结果？',
                    reportMissingResultsLinkText: '点击反馈'
                  }
                }
              }
            }
          }
        }
      },
      docFooter: { prev: '上一篇', next: '下一篇' },
      editLink: {
        pattern: 'https://gitee.com/crab_tech/xianzhou-tongjian/blob/main/docs/:path',
        text: '在 Gitee 上编辑'
      },
      logo: "https://heycrab3-oversea-file-delivery.s3.ap-east-1.amazonaws.com/xianzhoutongjian/91807422-1DDE-6A5E-5AEE-1F6B29EA53A1.png",
      nav: [
        { text: "开始参观", link: "/a/home" },
        { text: "共建者必读", link: "/build/guide" },
        { text: "捐助我们", link: "/donate_us/help_me" },
        { text: "创建内容", link: "https://editor.seelevollerei.online" },
        { text: "工单&帮助中心", link: "https://help.seelevollerei.online/hc" },
        { text: '关注官方社媒', items: [
          { text: "关注 仙舟通鉴wiki 官方B站账号", link: "https://space.bilibili.com/3537119408556068?spm_id_from=333.1007.0.0" },
          { text: "加入 QQ 频道", link: "https://pd.qq.com/s/9p6w252k1" },
        ] },
        
        { text: `${_APP_INFO_.VERSION} | ${_APP_INFO_.GIT_HASH.substring(0,7)}`, items: [
          { text: `Hash: ${_APP_INFO_.GIT_HASH}`, link: '#' },
          { text: `SHA1: ${_APP_INFO_.GIT_SHA}`, link: '#' },
          { text: `提交日期: ${_APP_INFO_.GIT_COMMIT_DATE}`, link: '#' },
          { text: '查看本次 Git Commit', link: `https://gitee.com/crab_tech/xianzhou-tongjian/tree/${_APP_INFO_.GIT_HASH}` },
          { text: '留下一个 Star 吧！', link: `https://gitee.com/crab_tech/xianzhou-tongjian/` }
        ]},
      ],
      socialLinks: [
        { icon: "github", link: "https://gitee.com/crab_tech/xianzhou-tongjian" },
      ], 
      sidebar: [
        {
          text: '更新日志',
          link: '/update_log'
        },
        {
          text: '捐助我们',
          items: [
              { text: '捐助和注意事项', link: '/donate_us/help_me' },
              { text: '月度账单', link: '/donate_us/monthly_bill' },
          ],
          collapsible: true,
          collapsed: false
        },
        {
        text: '开始参观',
        items: [
            { text: '如何参观', link: '/a/home' },
            { text: '遇到问题怎么办？', link: 'https://help.seelevollerei.online/hc/zh-cn' },
            { text: '意见反馈，投诉，举报', link: '/a/jubao' },
            { text: '网络测试', link: '/a/network_test' },
        ],
        collapsible: true,
        collapsed: false
      },
      {
        text: '共建者相关',
        items: [
            { text: '导航页', link: '/build/nav' },
            { text: '相关规定', link: '/build/guide' },
            { text: 'Markdown 快速入门', link: '/build/markdown' },
        ],
        collapsible: true,
        collapsed: false
      },
      {
        text: '词条集',
        items: [
            { text: '导航页', link: '/citiao/nav' },
            //{ text: '大敌名录', link: '/citiao/namelist' },
            //23.8.15 该链接废弃，内容拆分
        ],
        collapsible: true,
        collapsed: false
      },
      {
        text: '大战监察日志',
        items: [
            { text: '导航页', link: '/log/nav' },
        ],
        collapsible: true,
        collapsed: false
      },
      {
        text: '仙舟逸闻录',
        items: [
            { text: '导航页', link: '/gengbaike/nav' },
        ],
        collapsible: true,
        collapsed: false
      },
      {
        text: '忘却之庭',
        items: [
            { text: '导航页', link: '/memory/nav' },
        ],
        collapsible: true,
        collapsed: false
      }
    ]
  }
}