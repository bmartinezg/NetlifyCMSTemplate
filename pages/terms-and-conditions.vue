<template>
  <section class="container">
    <h1 class="title">{{ title }}</h1>
    <div v-html="markdownToHtml" />
  </section>
</template>

<script>
import { marked } from 'marked'

export default {
  name: 'TermsAndConditions',

  async asyncData({ $content }) {
    const { en } = await $content(
      'single_types/terms_and_conditions_page',
    ).fetch()
    const { title, content } = en

    return {
      title,
      content,
    }
  },

  computed: {
    markdownToHtml() {
      return marked(this.content || '')
    },
  },
}
</script>
