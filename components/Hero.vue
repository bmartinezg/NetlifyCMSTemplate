<template>
  <section class="hero is-halfheight">
    <div class="hero-body" :style="{ backgroundImage: `url(${background})` }">
      <div class="container">
        <h1 class="title is-1">
          {{ title }}
        </h1>
        <p class="subtitle">
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

<style lang="scss" scoped>
.title {
  color: $grey-lighter;
}
.subtitle {
  color: $grey-lighter;
  @include breakpoint(only-phone) {
    width: 100%;
  }
  width: 60%;
}
</style>
