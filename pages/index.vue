<template>
  <div>
  </div>
</template>

<script>
export default {
  
  name: 'HomeScreen',
  async asyncData({ $content }) {
    const posts = await $content("blog").fetch();

    return {
      posts,
    };
  },
  // head() {
  //   return {
  //     script: [
  //       { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
  //     ],
  //   }
  // },
  template: 'default',
}
</script>
