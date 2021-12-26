<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <div v-html="markdownToHtml" />
  </section>
</template>

<script>
import { marked } from 'marked';

export default {
  name: 'TermsAndConditions',

  async asyncData({ $content }) {
    const {title, content} = await $content("single_types/terms_and_conditions_page").fetch();

    return {
      title,
      content
    };
  },
  
  data () {
    return {
      exa: '**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha'
    }
  },

  computed: {
   markdownToHtml(){
     return marked(this.content || '');
   }
 }
}
</script>