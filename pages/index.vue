<template>
  <div>
    <Hero v-bind="data.es" />
    <Grid />
    <Divider />
  </div>
</template>

<script>
export default {
  name: 'HomeScreen',

  async asyncData({ $content }) {
    const data = await $content('single_types/home_page').fetch()

    return {
      data,
    }
  },

  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
      title: this.data.es.title,
      meta: this.data.es.meta_tags.map(el => {
        return {
          name: el.type,
          content: el.content,
          hid: `meta-${el.name}`,
        }
      })
    }
  },
  template: 'default',
}
</script>
