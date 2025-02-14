import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " ",
  description: "FTC West Coast Invitational Website",
  base: '/WCI-Website/',
  themeConfig: {
    logo: '/assets/v3_logo.png',

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
  },
  head: [
    ['style', {}, `
      :root {
        --vp-nav-height: 105px;  /* whatever navbar height you want */
      }
      .VPNavBar {
        padding: 0 24px;
      }
      .VPNavBar .logo {
        height: 100px;  /* whatever wci logo height you want */
      }
    `]
  ],
})