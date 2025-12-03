import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "LengAo's Notes",
    description: "A VitePress Notes Site",
    base: '/docs',
    lastUpdated: true,
    locales:{
      root: {
        label: 'English',
        lang: 'en'
      },
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Notes', link: '/notes'},
            {text: 'Example', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Git',
                items: [
                    {text: 'Git基础命令', link: '/notes/git/git-basic-commands'},
                    {text: 'Git-cicd', link: '/notes/git/git-cicd'},
                ]
            },
            {
                text: 'Next',
                items: [
                    {text: 'next', link: '/notes/next/next'},
                ]
            },
            {
                text: 'Development language',
                items: [
                    {text: 'Notes', link: '/notes'},
                    {text: 'Markdown Notes', link: '/markdown-examples'},
                    {text: 'Runtime API Notes', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/LengAoCold/myBolg'}
        ]
    }
})
