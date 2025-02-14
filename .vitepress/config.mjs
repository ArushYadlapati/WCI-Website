import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WCI Website",
  description: "FTC West Coast Invitational Website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Payment', link: '/markdown-examples' },
      { text: 'Volunteer Form', link: '/markdown-examples' },
      { text: 'Flyer', link: '/markdown-examples' },
      { text: 'Contact', link: 'mailto:westcoastinvitationalftc@gmail.com' },
    ],

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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
