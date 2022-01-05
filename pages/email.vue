<template>
  <section class="container">
    <h1>Send email</h1>
    <b-button type="is-primary" @click="send">Send</b-button>
  </section>
</template>

<script>
export default {
  name: 'Checkout',

  methods: {
    async send() {
      try {
        await this.$axios.post(
          '/.netlify/functions/sendgrid',
          {
            message: 'My email message, in the real world this would probably come from form data '
          }
        )
        alert('Thank you, your message was sent successfully!')
      } catch (e) {
        console.error(e)
        alert('Error:  Your message could not be sent')
      }
    },
  },
}
</script>