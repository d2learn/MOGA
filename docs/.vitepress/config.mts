import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MOGA",
  description: "Make Opensource Great Again",
  lastUpdated: true,
  base: '/MOGA/', // 设置站点根路径
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      {
        text: '文档',
        items: [
          { text: '关于MOGA', link: '/documents/quick-start/intro.md' },
          { text: '核心团队', link: '/documents/community/core-team.md' },
        ]
      },
      {
        text: '活动 / 游戏',
        items: [
          { text: 'MSCP | mcpp贡献者培养计划', link: '/activity/mscp/intro.md' },
        ]
      },
      { text: '历史记录', link: '/history/intro.md' },
    ],

    sidebar: {
      '/activity/' : [
        { text: '[ 活动/游戏主页 ]', link: '/activity/intro.md' },
        { 
          text: '[ mcpp贡献者培养计划 ]',
          items: [
            { text: '基本介绍', link: '/activity/mscp/intro.md' },
            { 
              text: '活动文档',
              items: [
                { text: '活动地图', link: '/activity/mscp/docs/map.md' },
                { text: '从完成第一个任务开始', link: '/activity/mscp/docs/start.md' },
                { text: '流程结构与玩法详解', link: '/activity/mscp/docs/flowchart-details.md' },
                { text: '申请加入活动小组(可选)', link: '/activity/mscp/docs/join-group.md' },
              ]
            },
            { text: '活动记录', link: '/activity/mscp/log.md' },
            { text: '历届通关玩家名单', link: '/activity/mscp/history.md' },
            { text: '常见问题', link: '/activity/mscp/qa.md' },
          ]
        },
      ],
      '/documents/' : [
        {
          text: '快速开始',
          items: [
            { text: '基本介绍', link: '/documents/quick-start/intro.md' },
            { text: '价值导向', link: '/documents/quick-start/mvv.md' },
            { text: '开源的问题', link: '/documents/quick-start/issues.md' },
          ]
        },
        {
          text: '社区',
          items: [
            { text: '核心团队', link: '/documents/community/core-team.md' },
          ]
        }
      ],
      '/history/' : [
        { text: '历史线', link: '/history/intro.md' },
        { 
          text: '2025-09',
          items: [
            { text: '2025-09-28', link: '/history/2025-09/2025-09-28.md' },
          ]
        },
        { 
          text: '2025-10',
          items: [
            { text: '2025-10-01', link: '/history/2025-10/2025-10-01.md' },
          ]
        },
      ]
    },

    editLink: {
      pattern: 'https://github.com/d2learn/moga/tree/main/docs/:path'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/d2learn/MOGA' }
    ]
  }
})
