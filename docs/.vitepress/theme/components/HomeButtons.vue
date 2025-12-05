<script setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'

const link = ref('/')
const github = ref('')
onMounted(() => {
  // 示例：自动读取 notes 目录中的第一个文件作为默认跳转
  // 注意：VitePress 会自动生成页面路由信息
  const { site, theme } = useData()

  // 所有已生成的 routes
  const pages = site.value.themeConfig.sidebar

  github.value = theme.value.socialLinks[0].link;

  // 找出以 /notes 开头的
  // console.log('site', site, 'pages', pages, 'useData', useData())
  const firstNotesPage = pages[0].items[0].link;

  if (firstNotesPage) {
    link.value = firstNotesPage
  }
})
</script>

<template>
  <div class="VPHomeHeroActions">
    <a class="VPButton medium brand" style="padding: 10px 100px; border-radius: 100px" :href="link">我的笔记</a>
    <a class="VPButton medium alt" style="padding: 10px 100px; border-radius: 100px" :href="github">GitHub</a>
  </div>
</template>

<style scoped>
a {
  text-decoration: inherit;
}

.VPHomeHeroActions {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.VPButton {
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
}

.VPButton.brand {
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}
.VPButton.medium {
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
}

.VPButton.brand:hover {
  border-color: var(--vp-button-brand-hover-border);
  color: var(--vp-button-brand-hover-text);
  background-color: var(--vp-button-brand-hover-bg);
}

.VPButton.brand:active {
  border-color: var(--vp-button-brand-active-border);
  color: var(--vp-button-brand-active-text);
  background-color: var(--vp-button-brand-active-bg);
}

.VPButton.alt {
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
}

.VPButton.alt:hover {
  border-color: var(--vp-button-alt-hover-border);
  color: var(--vp-button-alt-hover-text);
  background-color: var(--vp-button-alt-hover-bg);
}

.VPButton.alt:active {
  border-color: var(--vp-button-alt-active-border);
  color: var(--vp-button-alt-active-text);
  background-color: var(--vp-button-alt-active-bg);
}

</style>
