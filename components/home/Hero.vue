<template>
  <section class="hero is-halfheight">
    <div class="hero-body" :style="{ backgroundImage: `url(${background})` }">
      <div class="container">
        <p class="title">
          {{ title }}
        </p>
        <p class="subtitle hero__subtitle">
          {{ description }}
        </p>
        <b-button type="is-primary">Primary</b-button>
        <b-button type="is-primary is-light">Primary Light</b-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',

  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    background: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.hero {
  &__subtitle {
    width: 60%;
  }
}
</style>
