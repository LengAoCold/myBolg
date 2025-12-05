import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import HomeButtons from './components/HomeButtons.vue'

const theme: Theme = {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('HomeButtons', HomeButtons)
    }
}

export default theme
