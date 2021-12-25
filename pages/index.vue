<template>
  <div>
    <p>CONTENT----</p>
    {{posts}}
  </div>
</template>

<script>
export default {
  name: 'HomeScreen',

  async asyncData({ $content }) {
    const posts = await $content("single_types/home_page").fetch();

    return {
      posts,
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
