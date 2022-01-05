<template>
  <section class="container">
    <h1>Ir al pago</h1>
    <b-button type="is-primary">Ir al pago</b-button>
    <client-only>
    </client-only>
  </section>
</template>

<script>
export default {
  name: 'Checkout',
  components: {
  },
  mounted() {
    console.log(this.$config)
  },
}
</script>