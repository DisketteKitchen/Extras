import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'lite-youtube',
      },
    },
  },
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  title: "DiskExtras",
  description: "Extra content related to Diskette Kitchen videos and projects",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/eyes.svg',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Data',
        items: [
          { text: 'Chromebook Benchmarks', link: '/chromebook' },
        ]
      }
    ],

    sidebar: [
      {
        text: 'Data',
        items: [
          { text: 'Chromebook benchmarks', link: '/chromebook' },
        ], 
      },
            {
        text: 'BTS',
        items: [
          { text: 'Coming soon!'},
        ],
        
      },
      {
        text: 'Instructions',
        items: [
          { text: 'Coming soon!'},
        ],
        
      },
    ],

    socialLinks: [
      { icon: 'youtube', link: 'https://youtube.com/@diskettekitchen' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/diskettekitchen.com' },
      { icon: 'instagram', link: 'https://www.instagram.com/diskettekitchen' },
      { icon: 'printables', link: 'https://www.printables.com/@diskette' },
      { icon: 'github', link: 'https://github.com/DisketteKitchen' },
      
    ],

    footer: {
      message: 'Built with ❤︎ under the Big sky in Bozeman, MT',
      copyright: '© 2025 Diskette Media'
    }
  }
  
})
