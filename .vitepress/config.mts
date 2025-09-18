import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "content",
  
  title: "PABNLP",
  description: "Partnership for Applied Biblical NLP",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about-us' },
      { text: 'Articles', link: '/articles' },
      { text: 'Collaborate', link: '/collaborate' }
    ],

    sidebar: [
      {
        text: 'Articles',
        items: [
          { text: 'Word Alignment', link: '/word-alignment' },
        ]
      },
      {
        text: 'Collaborate',
        link: '/collaborate'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BibleNLP' }
    ],

    footer: {
      message: "Made with ❤️ by the PABNLP community",
      copyright: "Copyright © 2025 PABNLP"
    }
  }
})
