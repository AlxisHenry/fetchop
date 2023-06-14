import { defineConfig } from 'vitepress'

const repositoryLink = "https://github.com/AlxisHenry/Fetchop";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/fetchop/",
  title: "Fetchop",
  description: "Fetch API wrapper",
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      {
        text: '1.0.2', items: [
          { text: "Changelog", link: `${repositoryLink}/CHANGELOD.md` },
          { text: "Contributing", link: `${repositoryLink}/contributing.md` }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Introduction', collapsed: false, items: [
          { text: 'What is Fetchop ?', link: '/guide/what-is-fetchop' },
          { text: 'Getting Started', link: '/guide/getting-started' },
        ]
      },
      {
        text: 'Configuration', collapsed: false, items: [
          { text: 'Attributes', link: '/guide/configuration/attributes' }
        ]
      },
      {
        text: 'Usage', link: '/guide/usage'
      }
    ],
    socialLinks: [
      { icon: 'github', link: repositoryLink }
    ]
  }
})
