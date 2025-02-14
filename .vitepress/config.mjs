import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  description: "FTC West Coast Invitational Website",
  base: '/WCI-Website/',
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/ArushYadlapati/WCI-Website/edit/master/:path',
      text: 'Edit this page on GitHub'
    },
    logo: '/assets/v3_logo.png',
    siteTitle: false,

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Payment', link: '/markdown-examples' },
      { text: 'Flyer', link: '/flyer' },
      { text: 'Volunteer Form', link: 'https://forms.gle/mhn4rXsb4iEnrCjW8' },
      { text: 'Contact', link: 'mailto:westcoastinvitationalftc@gmail.com' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Event Info', link: '/event-info' },
          { text: 'FAQs', link: '/faq' },
          { text: 'WCI Flyer', link: '/flyer' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'instagram', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'youtube', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  head: [
    ['style', {}, `
      :root {
        --vp-nav-height: 105px;
      }
      .VPNav {
        background-color: #1B2C50 !important;
      }
      .VPNavBar {
        padding: 0 24px;
        background-color: #1B2C50 !important;
      }
      .VPNavBar .logo {
        height: 100px;
      }
      .VPNavBarMenuLink {
        color: white !important;
      }
      .VPNavBarHamburger .box {
        border-color: white !important;
      }
      .VPNavBar .content-body {
        background-color: #1B2C50 !important;
      }
    `],
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }]
  ],
})