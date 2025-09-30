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
      { text: '文档', link: '/documents/quick-start/intro.md' },
      { text: '案例', link: '/documents/cases/dstruct.md' },
      { text: '历史记录', link: '/history/intro.md' },
      {
        text: '社区',
        items: [
          { text: '核心团队', link: '/documents/community/core-team.md' },
        ]
      },
    ],

    sidebar: {
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/d2learn/MOGA' }
    ]
  }
})
