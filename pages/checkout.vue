<template>
  <section class="container">
    <h1>Ir al pago</h1>
    <b-button type="is-primary" @click="goToPay">Ir al pago</b-button>
    <client-only>
    </client-only>
  </section>
</template>

<script>
export default {
  name: 'Checkout',

  methods: {
    goToPay() {
      this.$stripe.redirectToCheckout({
        lineItems: [{
          price: 'price_1KEd6BDZMO3ZpTppLi2Gri2H', // Replace with the ID of your price
          quantity: 1,
        }],
        mode: 'payment',
        successUrl: 'https://example.com/success',
        cancelUrl: 'https://example.com/cancel',
      }).then((result) => {
        console.log(result)
      })
    }
  },
}
</script>