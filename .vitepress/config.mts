import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "Diskette Extras",
  description: "Extra context for (some) videos!",
  themeConfig: {
    siteTitle: false,

    logo: '/logo.svg',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Data', link: '/chromebook' },
    ],

    sidebar: [
      {
        text: 'Data',
        items: [
          { text: 'Chromebook Benchmarks', link: '/chromebook' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'youtube', link: 'https://youtube.com/@diskettekitchen' },
      { icon: 'instagram', link: 'https://instagram.com/diskettekitchen' },
      { icon: 'github', link: 'https://github.com/diskettekitchen' }
    ]
  }
})