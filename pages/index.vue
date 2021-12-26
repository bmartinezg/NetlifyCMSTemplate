<template>
  <div>
    <Hero v-bind="data" />
    <Grid />
  </div>
</template>

<script>
export default {
  name: 'HomeScreen',

  async asyncData({ $content }) {
    const data = await $content("single_types/home_page").fetch();

    return {
      data,
    };
  },

  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  template: 'default',
}
</script>
