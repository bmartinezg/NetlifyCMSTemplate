<template>
  <section class="container">
    <h1>Ir al pago</h1>
    <b-button type="is-primary" @click="goToPay">Ir al pago</b-button>
  </section>
</template>

<script>
export default {
  name: 'Checkout',

  methods: {
    goToPay() {
      this.$stripe.redirectToCheckout({
        lineItems: [
          {
            price: 'price_1KEd6BDZMO3ZpTppLi2Gri2H', // Replace with the ID of your price
            quantity: 4,
          },
        ],
        mode: 'payment',
        // TODO
        successUrl: 'https://romantic-golick-ba1447.netlify.app/success',
        cancelUrl: 'https://romantic-golick-ba1447.netlify.app/checkout',
      })
    },
  },
}
</script>
