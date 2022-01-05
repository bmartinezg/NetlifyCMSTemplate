<template>
  <section class="container">
    <h1>Ir al pago</h1>
    <b-button type="is-primary" @click="goToCheckout">Ir al pago</b-button>
  </section>
</template>

<script>
import {loadStripe} from '@stripe/stripe-js';

export default {
  name: 'Checkout',

  data() {
    return {
      stripe: null,
    };
  },

  async mounted() {
    this.stripe = await loadStripe('pk_live_7JwyOB2wLdPb8hvpxbqvGiqo00jOhFMjXs');
  },

  methods: {
    async goToCheckout() {
      const {error} = await this.stripe.redirectToCheckout({
        lineItems: [{
          price: 'price_1KEd6BDZMO3ZpTppLi2Gri2H', // Replace with the ID of your price
          quantity: 4,
        }],
        mode: 'payment',
        successUrl: 'https://example.com/success',
        cancelUrl: 'https://example.com/cancel',
      })

      console.log(error)
    }
  }
}
</script>