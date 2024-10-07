import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "Diskette Data",
  description: "Extra context for (some) videos!",
  themeConfig: {
    siteTitle: false,

    logo: '/logo.svg',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Latest Data', link: '/chromebook' }
    ],

    sidebar: [
      {
        text: 'Graphs & Data',
        items: [
          { text: 'Chromebook Benchmarks', link: '/chromebook' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'youtube', link: 'https://youtube.com/@diskettekitchen' }
    ]
  }
})