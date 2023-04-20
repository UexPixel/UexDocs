import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  logo: '/logo.svg',
  title: "UexDocs",
  description: "UexPixel 文档存放处",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: '',
        apiKey: '',
        indexName: '...',
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

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V42H39V18L24 6L9 18Z" fill="none" stroke="#4a4a4a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 29V42H29V29H19Z" fill="none" stroke="#939398" stroke-width="4" stroke-linejoin="round"/><path d="M9 42H39" stroke="#939398" stroke-width="4" stroke-linecap="round"/></svg>'
        },
        link: 'https://UexPixel.com'
      },
      { icon: 'github', link: 'https://github.com/UexPixel/UexDocs' },
    ],
    
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    
    cleanUrls: 'without-subfolders',

    footer: {
      message: '本网站采用 CC BY-NC-SA 4.0 许可协议进行许可授权',
      copyright: 'Copyright © 2022-2023 UexPixel. | UexPixel Web Group.'
    },

  }
})
